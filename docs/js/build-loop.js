(() => {
  const STORAGE_KEY = "build-loop-mastery-progress-v1";

  const MODULES = [
    { id: "module-1", href: "module-1.html", num: "1", label: "Introduction", meta: "25m" },
    { id: "module-2", href: "module-2.html", num: "2", label: "The Build Loop", meta: "25m" },
    { id: "module-3", href: "module-3.html", num: "3", label: "GitHub Setup", meta: "20m" },
    { id: "module-4", href: "module-4.html", num: "4", label: "Ticket Template", meta: "25m" },
    { id: "module-5", href: "module-5.html", num: "5", label: "First Experiment", meta: "30m" },
    { id: "module-6", href: "module-6.html", num: "6", label: "Operating Board", meta: "25m" },
    { id: "module-7", href: "module-7.html", num: "7", label: "First Project", meta: "30m" },
  ];

  const SKILLS = [
    { id: "skill-grill-with-docs", href: "skills/grill-with-docs.html", label: "grill-with-docs" },
    { id: "skill-grilling", href: "skills/grilling.html", label: "grilling" },
    { id: "skill-to-spec", href: "skills/to-spec.html", label: "to-spec" },
    { id: "skill-to-tickets", href: "skills/to-tickets.html", label: "to-tickets" },
    { id: "skill-implement", href: "skills/implement.html", label: "implement" },
    { id: "skill-tdd", href: "skills/tdd.html", label: "tdd" },
    { id: "skill-code-review", href: "skills/code-review.html", label: "code-review" },
    { id: "skill-prototype", href: "skills/prototype.html", label: "prototype" },
    { id: "skill-wayfinder", href: "skills/wayfinder.html", label: "wayfinder" },
  ];

  const REFERENCE = [
    { id: "appendix", href: "appendix.html", num: "A", label: "BookIQ Appendix" },
    { id: "next-steps", href: "next-steps.html", num: "→", label: "Next steps" },
    { id: "certification", href: "certification.html", num: "✓", label: "Certification" },
  ];

  const PROGRESS_IDS = [
    "m1-c1", "m1-c2", "m1-c3", "m1-c4",
    "m2-c1", "m2-c2", "m2-c3", "m2-c4",
    "m3-c1", "m3-c2", "m3-c3", "m3-c4",
    "m4-c1", "m4-c2", "m4-c3", "m4-c4", "m4-c5",
    "m5-c1", "m5-c2", "m5-c3", "m5-c4",
    "m6-c1", "m6-c2", "m6-c3", "m6-c4",
    "m7-c1", "m7-c2", "m7-c3",
    "cert-1", "cert-2", "cert-3", "cert-4", "cert-5", "cert-6",
  ];

  const PAGE_ORDER = [
    "index.html",
    ...MODULES.map((m) => m.href),
    ...SKILLS.map((s) => s.href),
    "appendix.html",
    "next-steps.html",
    "certification.html",
  ];

  const body = document.body;
  const base = body.dataset.base || "";
  const pageId = body.dataset.page || "";
  const isPrintPage = body.classList.contains("print-page");

  function href(path) {
    return `${base}${path}`;
  }

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

  function moduleComplete(moduleId) {
    const checks = [...document.querySelectorAll(`input[data-module="${moduleId}"]`)];
    if (checks.length === 0) {
      const state = load();
      return Object.keys(state).some((k) => k.startsWith(moduleId.replace("module-", "m")) && state[k]);
    }
    const state = load();
    const ids = checks.map((c) => c.dataset.progress);
    return ids.length > 0 && ids.every((id) => state[id]);
  }

  function updateGlobalProgress() {
    const state = load();
    const unique = PROGRESS_IDS;
    const done = unique.filter((id) => state[id]).length;
    const pct = unique.length ? Math.round((done / unique.length) * 100) : 0;
    const progressFill = document.getElementById("progressFill");
    const progressPct = document.getElementById("progressPct");
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressPct) progressPct.textContent = `${pct}%`;
  }

  function applyChecks() {
    const state = load();
    document.querySelectorAll('input[type="checkbox"][data-progress]').forEach((el) => {
      el.checked = Boolean(state[el.dataset.progress]);
      el.closest("label")?.classList.toggle("is-checked", el.checked);
    });
    updateGlobalProgress();
    updateNavComplete();
  }

  function updateNavComplete() {
    const state = load();
    const byModule = {
      "module-1": ["m1-c1", "m1-c2", "m1-c3", "m1-c4"],
      "module-2": ["m2-c1", "m2-c2", "m2-c3", "m2-c4"],
      "module-3": ["m3-c1", "m3-c2", "m3-c3", "m3-c4"],
      "module-4": ["m4-c1", "m4-c2", "m4-c3", "m4-c4", "m4-c5"],
      "module-5": ["m5-c1", "m5-c2", "m5-c3", "m5-c4"],
      "module-6": ["m6-c1", "m6-c2", "m6-c3", "m6-c4"],
      "module-7": ["m7-c1", "m7-c2", "m7-c3"],
      certification: ["cert-1", "cert-2", "cert-3", "cert-4", "cert-5", "cert-6"],
    };
    document.querySelectorAll(".nav-link[data-module]").forEach((link) => {
      const moduleId = link.dataset.module;
      const ids = byModule[moduleId];
      const complete = ids ? ids.every((id) => state[id]) : false;
      link.classList.toggle("is-complete", complete);
    });
  }

  function buildSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar || sidebar.dataset.built) return;

    const moduleLinks = MODULES.map(
      (m) =>
        `<a class="nav-link${pageId === m.id ? " is-active" : ""}" data-module="${m.id}" href="${href(m.href)}"><span class="nav-num">${m.num}</span> ${m.label} <span class="nav-meta">${m.meta}</span></a>`
    ).join("");

    const skillLinks = SKILLS.map(
      (s) =>
        `<a class="nav-link${pageId === s.id ? " is-active" : ""}" data-module="${s.id}" href="${href(s.href)}"><span class="nav-num">/</span> ${s.label}</a>`
    ).join("");

    const refLinks = REFERENCE.map(
      (r) =>
        `<a class="nav-link${pageId === r.id ? " is-active" : ""}" data-module="${r.id}" href="${href(r.href)}"><span class="nav-num">${r.num}</span> ${r.label}</a>`
    ).join("");

    sidebar.innerHTML = `
      <a class="sidebar-brand" href="${href("index.html")}">
        <img src="${href("assets/practical-ai-mark.png")}" alt="" width="40" height="40" />
        <div class="sidebar-brand-text">
          <strong>Practical AI</strong>
          <span>Build Loop Mastery</span>
        </div>
      </a>
      <div class="progress-panel">
        <div class="progress-label">
          <span>Course progress</span>
          <strong id="progressPct">0%</strong>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" id="progressFill"></div>
        </div>
      </div>
      <nav class="sidebar-nav">
        <p class="nav-section-label">Start</p>
        <a class="nav-link${pageId === "hub" ? " is-active" : ""}" data-module="hub" href="${href("index.html")}"><span class="nav-num">⌂</span> Course hub</a>
        <p class="nav-section-label">Modules</p>
        ${moduleLinks}
        <p class="nav-section-label">Cursor skills</p>
        ${skillLinks}
        <p class="nav-section-label">Reference</p>
        ${refLinks}
        <a class="nav-link" href="${href("course-full.html")}"><span class="nav-num">PDF</span> Save as PDF</a>
      </nav>
      <div class="sidebar-footer">
        <a href="https://github.com/Practical-Office/bml-onboarding" target="_blank" rel="noopener noreferrer">GitHub repo</a>
        ·
        <a href="https://p-ai.net" target="_blank" rel="noopener noreferrer">p-ai.net</a>
      </div>`;
    sidebar.dataset.built = "1";
  }

  function setupPrevNext() {
    const nav = document.getElementById("pageNav");
    if (!nav) return;
    const current = `${base}${body.dataset.file || "index.html"}`.replace(/^\.\//, "");
    const idx = PAGE_ORDER.findIndex((p) => current.endsWith(p) || p === current);
    if (idx < 0) return;
    const prev = idx > 0 ? PAGE_ORDER[idx - 1] : null;
    const next = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;
    let html = "";
    if (prev) html += `<a class="btn btn-ghost btn-sm page-nav-prev" href="${href(prev)}">← Previous</a>`;
    if (next) html += `<a class="btn btn-primary btn-sm page-nav-next" href="${href(next)}">Next →</a>`;
    nav.innerHTML = html;
  }

  function bindChecks() {
    document.querySelectorAll('input[type="checkbox"][data-progress]').forEach((el) => {
      el.addEventListener("change", () => {
        const state = load();
        state[el.dataset.progress] = el.checked;
        save(state);
        el.closest("label")?.classList.toggle("is-checked", el.checked);
        updateGlobalProgress();
        updateNavComplete();
      });
    });
  }

  function bindMobileNav() {
    const menuBtn = document.getElementById("menuBtn");
    const overlay = document.getElementById("navOverlay");
    const closeNav = () => document.body.classList.remove("nav-open");
    menuBtn?.addEventListener("click", () => document.body.classList.toggle("nav-open"));
    overlay?.addEventListener("click", closeNav);
    document.querySelectorAll(".sidebar a").forEach((a) => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 900px)").matches) closeNav();
      });
    });
  }

  function bindReset() {
    document.getElementById("resetProgress")?.addEventListener("click", () => {
      if (!confirm("Reset all checklist progress on this device?")) return;
      localStorage.removeItem(STORAGE_KEY);
      applyChecks();
    });
  }

  function bindPrint() {
    document.getElementById("printCourse")?.addEventListener("click", () => window.print());
  }

  if (!isPrintPage) {
    buildSidebar();
    setupPrevNext();
    bindChecks();
    bindMobileNav();
    bindReset();
    applyChecks();
  }
  bindPrint();
})();
