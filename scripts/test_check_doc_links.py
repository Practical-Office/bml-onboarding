#!/usr/bin/env python3
"""Regression tests for Published Course link integrity."""

from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from check_doc_links import ISSUE_DRAFTS, check_docs, check_svgs

REPO_ROOT = Path(__file__).resolve().parents[1]
DOCS = REPO_ROOT / "docs"


class CheckDocLinksTests(unittest.TestCase):
    def test_live_course_passes_link_check(self) -> None:
        errors = check_docs(DOCS)
        self.assertEqual(errors, [], "\n".join(errors))

    def test_missing_issues_index_fails(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            (docs / "reference" / "issues").mkdir(parents=True)
            for draft in ISSUE_DRAFTS:
                (docs / "reference" / "issues" / draft).write_text("# draft", encoding="utf-8")
            (docs / "page.html").write_text("<a href='module-1.html'>x</a>", encoding="utf-8")
            errors = check_docs(docs)
            self.assertTrue(any("index.html is required" in e for e in errors))

    def test_malformed_svg_fails(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            diagrams = docs / "assets" / "diagrams"
            diagrams.mkdir(parents=True)
            (diagrams / "bad.svg").write_text(
                '<svg xmlns="http://www.w3.org/2000/svg"><text>bad \x14 char</text></svg>',
                encoding="utf-8",
            )
            errors = check_svgs(docs)
            self.assertTrue(any("bad.svg" in e and "malformed" in e for e in errors))

    def test_directory_issues_link_fails(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            issues = docs / "reference" / "issues"
            issues.mkdir(parents=True)
            (issues / "index.html").write_text("<html></html>", encoding="utf-8")
            for draft in ISSUE_DRAFTS:
                (issues / draft).write_text("# draft", encoding="utf-8")
            (docs / "appendix.html").write_text('<a href="reference/issues/">all</a>', encoding="utf-8")
            errors = check_docs(docs)
            self.assertTrue(any("reference/issues/" in e for e in errors))


if __name__ == "__main__":
    unittest.main()
