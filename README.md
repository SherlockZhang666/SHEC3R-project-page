# SHEC3R project page

Static project website for **SHEC3R: A Robot-Grounded Neural Initializer for Stationary Eye-to-Hand Calibration**.

The manuscript is under review. The project page displays the author list and affiliations supplied by the authors. Research code and the RoboEyeCalib dataset are forthcoming; this repository contains the website only.

## Preview

No build or dependency installation is required:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Publish with GitHub Pages

In the repository, open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, and Save. The intended project URL is <https://sherlockzhang666.github.io/SHEC3R-project-page/>.

All asset paths are relative so the site works under a project subdirectory. `.nojekyll` keeps the site buildless. GitHub Pages deployment does not need a framework or custom workflow.

## Update content

- `index.html`: title, author list, affiliations, text, benchmark table, citation.
- `styles.css`: desktop and mobile layout.
- `script.js`: set `resources.arxiv` and `resources.code` to the public URLs when available.
- `assets/papers/SHEC3R.pdf`: replace the unstamped anonymous manuscript with your author-restored public PDF.
- `assets/videos/SHEC3R_video_v4_arxiv.mp4`: supplied arXiv-version project video (1080p, approximately 2 min 53 s).
- `assets/images/`: original figures from the manuscript, plus a video poster.

Update the BibTeX after arXiv announces the paper, including eprint, archivePrefix, primaryClass, and URL. Do not list ICRA 2027 as an accepted publication before acceptance.

## arXiv checklist

1. Confirm the public version and author order with all co-authors. Restore names, affiliations, and acknowledgments in a separate copy of the manuscript. The project page already includes the supplied author list; the linked manuscript remains the anonymous submission PDF.
2. Register/sign in at <https://arxiv.org/> and verify your email. A first submission to `cs.RO` may require endorsement: <https://info.arxiv.org/help/endorsement.html>.
3. Prepare a minimal source ZIP. Include `main.tex`, its referenced `sections/` and figures, `ieeeconf.cls`, the required bibliography (`main.bbl` and/or `refs.bib` plus `IEEEtran.bst`), and any referenced local files. Remove `.git`, internal notes, backups, comments containing private discussion, build logs, auxiliary files, and unused figures. Do not include this website, PPTX, or MP4 in the TeX upload.
4. Use **Start New Submission** and choose a suitable category; `cs.RO` is the natural primary category for this calibration paper. Select a license after considering co-author, funder, and publisher requirements; each version's chosen license is irrevocable. Official license guidance: <https://info.arxiv.org/help/license/index.html>.
5. Upload the source ZIP, select `main.tex` and the appropriate compiler, then inspect arXiv's compiled PDF. Enter the exact title, real author list, and abstract. Add the project URL to Comments if desired. Keep Journal reference and DOI blank until a publication/DOI exists; optional Comments may say `Submitted to ICRA 2027`.
6. Check all pages, equations, figure labels, citations, and metadata, then finalize submission. Moderation and announcement determine when the public identifier becomes available. Update `script.js`, the PDF, author block, and BibTeX after receiving the arXiv ID.

The official ICRA 2027 FAQ permits preprints on arXiv while prohibiting simultaneous submission to another conference or journal: <https://2027.ieee-icra.org/contribute/call-for-icra-2027-papers-now-accepting-submissions/>. The submitted conference materials still follow double-anonymous review requirements. Uploading this site to a named GitHub account does not make it an anonymous review supplement.

arXiv requires TeX sources for papers created with TeX: <https://info.arxiv.org/help/submit/index.html>. It currently supports bibliography processing and also accepts a matching pre-generated `.bbl`; include a verified `main.bbl` for a reproducible upload: <https://info.arxiv.org/help/submit_tex.html>.

## Sync subsequent changes

```bash
git add index.html styles.css script.js assets README.md
git commit -m "Update project page"
git push
```

## Content provenance

Text and numbers follow the supplied ICRA 2027 manuscript. Headline S@5° values (80.2% simulation / 86.0% real) are **after optional refinement**, with 400 and 86 evaluation scenes, respectively. The 883 real scenes describe the full dataset, not the held-out evaluation split. The initializer uses RGB and robot masks; metric scaling uses a depth frame; optional DR refinement additionally needs meshes and joint readings.

The paper PDF is copied from the local unstamped `main_submit.pdf`, not the PaperPlaza-stamped review copy. No LaTeX source, review history, private notes, or credentials are included here. No open-source license is assigned to the research assets by this website repository.

## Presentation

The page uses a photographic opening with original RoboEyeCalib capture images, Source Serif 4 reading typography, a desktop article outline, clickable paper figures, and a Simulation/Real success-rate comparison. All plotted values come from the manuscript and use final errors after DR refinement. The complete arXiv-version video remains linked unchanged.

Source Serif 4 is self-hosted under the SIL Open Font License; see `assets/fonts/OFL.txt`. No runtime network request is needed for fonts.
