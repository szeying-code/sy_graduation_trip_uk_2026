# Family Trip: 10–29 Dec 2026

A day-by-day trip site. Plain HTML, no build step.

- `index.html`: home page with all 20 days, grouped into 3 parts
- `info.html`: trains, costs, things to book, favourites and tips
- `food.html`: the full food plan (restaurant, address, listed hours and which days each is open) for every city
- `days/day-10.html` … `days/day-29.html`: one page per day (the number is the date in December)
- `img/`: city photos from your slides
- `style.css`: shared design. `app.js`: saves ticks and notes in the browser

## Editing a day
Every day file also has a `<!-- FOOD PLAN -->` section (options A, B, C... for that day's meals). To change a restaurant, edit its `<li>` there and its row in `food.html`.

Every section of a day file has a capital-letter comment above it (for example `<!-- PLAN AND CHECKLIST -->`), so you can search for it with Ctrl+F.

Open the day's file in any text editor. Each plan item is one `<li class="r">` block, so copy one to add a row. Give each row's checkbox a unique `data-id` (r1, r2, ...), because ticks are saved by that id.

## Publish with GitHub Pages
1. Create a new repository (e.g. `family-trip-2026`).
2. Upload everything in this folder, keeping the `days` folder.
3. Go to Settings > Pages, set Source to "Deploy from a branch", choose `main` and `/ (root)`, then Save.
4. After a minute the site is live at `https://<username>.github.io/family-trip-2026/`.

## If the online page looks wrong (dark or unstyled)
GitHub has an old `style.css`. Replace every file in the repo with the ones from this zip (index.html, info.html, style.css, app.js and the `days` and `img` folders), commit, wait a minute, then hard refresh (Ctrl+F5).
