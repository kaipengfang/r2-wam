# R²-WAM project page

Live: https://kaipengfang.github.io/r2-wam/ (GitHub Pages, branch `main`, root). Static page, no build step: edit, `git commit`, `git push`.

- `index.html` — the page (style "classic", chosen 2026-10-13)
- `static/` — css/js (FontAwesome + AOS copied from sim-and-human; `index.css` / `index.js` are ours)
- `resources/images` — figures rendered from the paper's vector sources (`figures/final/*.pdf`, `figures/out/*.pdf`) or the 400 dpi exports in `paper/video/assets/figs`
- `resources/video/supplementary_video.mp4` — `paper/video/out/r2wam_intro_v5_public.mp4` (v5 with the title-card line "Anonymous submission · supplementary video" replaced by "Supplementary video"; built with `R2WAM_TITLE_SUB="Supplementary video" tools/build.py p01 --final --out r2wam_intro_v5_public.mp4`), re-encoded to 1280p
- `resources/video/sim` — WAM-generated rollouts from `paper/video/assets/sim` and `experiments/session_deliverables/gen50_pipeline_replication/*/clips_raw` (head + wrist)
- `resources/video/diag` — truncation examples (gen50 spatial clips with the cut from `truncate_diagnostics.jsonl` overlaid) and flow-consistency panels cropped from `results/viz/t4w_full2000`
- `resources/video/real` — real-robot clips from `paper/video/assets/real_edit` (same editing pipeline); `tasks5_ours_t1_luncheon_meat_k4_n1_*` and `tasks5_ours_t3_fried_egg_k4_n2_*` were cut for the page from `paper/data/real_eval_results/valid/ours/*/ckpt_4` so that the five-task row shows the final checkpoint
- `resources/pdf/r2wam.pdf` — arXiv-version PDF
- `demos/` — the five style demos used for style selection (git-ignored)

Placeholders still to fill: Code link (button greyed out), homepages for Hangxu Liu / Chaojian Shi / Hongzi Zhu / Minyi Guo (`#`).
