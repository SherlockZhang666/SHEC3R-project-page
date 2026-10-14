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
    status.textContent = "BibTeX copied. Update the preprint metadata before use.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "Citation selected. Press Ctrl+C or ⌘C to copy.";
  }
});

const evaluationSplits = {
  sim: { title: "Simulation · 400 scenes", values: [["EasyHeC", 25.2], ["EasyHeC++", 8.0], ["SHEC3R", 80.2]] },
  real: { title: "Real · 86 scenes", values: [["EasyHeC++", 15.1], ["SHEC3R", 86.0]] }
};
for (const button of document.querySelectorAll("[data-split]")) {
  button.addEventListener("click", () => {
    const split = evaluationSplits[button.dataset.split];
    document.getElementById("chart-title").textContent = split.title;
    for (const other of document.querySelectorAll("[data-split]")) {
      other.setAttribute("aria-pressed", String(other === button));
    }
    const rows = split.values.map(([name, value]) => {
      const row = document.createElement("div");
      row.className = "bar-row" + (name === "SHEC3R" ? " is-ours" : "");
      const label = document.createElement("span");
      label.className = "bar-name";
      label.textContent = name;
      const track = document.createElement("div");
      track.className = "bar-track";
      track.setAttribute("aria-hidden", "true");
      const fill = document.createElement("div");
      fill.className = "bar-fill";
      fill.style.setProperty("--value", value + "%");
      track.append(fill);
      const number = document.createElement("span");
      number.className = "bar-value";
      number.textContent = value.toFixed(1) + "%";
      row.append(label, track, number);
      return row;
    });
    document.getElementById("success-bars").replaceChildren(...rows);
  });
}

const figureDialog = document.getElementById("figure-dialog");
for (const link of document.querySelectorAll(".paper-figure a")) {
  link.addEventListener("click", event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const image = link.querySelector("img");
    const enlarged = document.getElementById("expanded-figure");
    enlarged.src = link.href;
    enlarged.alt = image.alt;
    document.getElementById("figure-dialog-title").textContent = link.closest("section").querySelector("h2").textContent;
    figureDialog.showModal();
  });
}
document.getElementById("close-figure").addEventListener("click", () => figureDialog.close());
figureDialog.addEventListener("click", event => {
  if (event.target !== figureDialog) return;
  const bounds = figureDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) figureDialog.close();
});

const outlineLinks = [...document.querySelectorAll(".outline a")];
const outlineSections = outlineLinks.map(link => document.querySelector(link.getAttribute("href")));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of outlineLinks) {
        if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-8% 0px -68% 0px", threshold: 0 });
  outlineSections.forEach(section => observer.observe(section));
}
