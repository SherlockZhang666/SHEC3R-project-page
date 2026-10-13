"use strict";

// Fill these with the public resource URLs when they are released.
const resources = { arxiv: "", code: "" };
for (const [name, url] of Object.entries(resources)) {
  if (!url || !/^https:\/\//.test(url)) continue;
  const placeholder = document.getElementById(`${name}-link`);
  const link = document.createElement("a");
  link.className = "pill";
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = name === "arxiv" ? "arXiv ↗" : "Code ↗";
  placeholder.replaceWith(link);
}

document.getElementById("copy-citation").addEventListener("click", async () => {
  const citation = document.getElementById("citation");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    status.textContent = "BibTeX copied. Update the author and preprint metadata before use.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "Citation selected. Press Ctrl+C or ⌘C to copy.";
  }
});
