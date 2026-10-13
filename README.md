# R²-WAM project page

Static page, no build step. Open `index.html` directly or serve the folder (`python3 -m http.server`).

- `index.html` — the page (style 1 "classic", chosen 2026-10-13)
- `static/` — css/js (FontAwesome + AOS copied from sim-and-human, `index.css` / `index.js` are ours)
- `resources/images|video` — assets copied from `4_On-going/WAM_CL/paper/` (figures/final, figures/out, video/assets, latex/main.pdf); PDF not deployed (resources/pdf/ is git-ignored, add the arXiv version later); `supplementary_video.mp4` re-encoded to 1280p / 11 MB, large clips re-encoded to crf 27
- `demos/` — the five style demos used for style selection (can be deleted)

Placeholders to fill before publishing: author homepage links (currently "#"), arXiv link, Code button (now "coming soon"), BibTeX venue.
