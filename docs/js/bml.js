(() => {
  const STORAGE_KEY = "bml-mastery-progress-v1";
  const menuBtn = document.getElementById("menuBtn");
  const overlay = document.getElementById("navOverlay");
  const progressFill = document.getElementById("progressFill");
  const progressPct = document.getElementById("progressPct");
  const resetBtn = document.getElementById("resetProgress");
  const navLinks = [...document.querySelectorAll(".nav-link[data-module]")];
  const modules = [...document.querySelectorAll(".module[id]")];
  const checks = [...document.querySelectorAll('input[type="checkbox"][data-progress]')];

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function applyChecks() {
    const state = load();
    checks.forEach((el) => {
      const id = el.dataset.progress;
      el.checked = Boolean(state[id]);
      el.closest("label")?.classList.toggle("is-checked", el.checked);
    });
    updateProgress();
    updateModuleNavComplete();
  }

  function updateProgress() {
    const total = checks.length || 1;
    const done = checks.filter((el) => el.checked).length;
    const pct = Math.round((done / total) * 100);
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressPct) progressPct.textContent = `${pct}%`;
  }

  function updateModuleNavComplete() {
    navLinks.forEach((link) => {
      const moduleId = link.dataset.module;
      const moduleChecks = checks.filter((el) => el.dataset.module === moduleId);
      const complete =
        moduleChecks.length > 0 && moduleChecks.every((el) => el.checked);
      link.classList.toggle("is-complete", complete);
    });
  }

  checks.forEach((el) => {
    el.addEventListener("change", () => {
      const state = load();
      state[el.dataset.progress] = el.checked;
      save(state);
      el.closest("label")?.classList.toggle("is-checked", el.checked);
      updateProgress();
      updateModuleNavComplete();
    });
  });

  resetBtn?.addEventListener("click", () => {
    if (!confirm("Reset all checklist progress on this device?")) return;
    localStorage.removeItem(STORAGE_KEY);
    applyChecks();
  });

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.module === id || link.getAttribute("href") === `#${id}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActiveNav(visible.target.id);
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
  );

  modules.forEach((m) => observer.observe(m));

  function closeNav() {
    document.body.classList.remove("nav-open");
  }

  function openNav() {
    document.body.classList.add("nav-open");
  }

  menuBtn?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  overlay?.addEventListener("click", closeNav);

  document.querySelectorAll('.sidebar a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) closeNav();
    });
  });

  applyChecks();

  // Deep-link highlight on load
  if (location.hash) {
    const id = location.hash.slice(1);
    setActiveNav(id);
  }
})();
