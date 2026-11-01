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

## Restaurant photos and Google Maps links
- `img/food/<city>/<restaurant>-1.jpg` … `-5.jpg`: five photos per restaurant (web versions of the photos in Food_Plan_tidy.pptx, plus Grand Maison HK).
- In `food.html`, every restaurant name in a table is a Google Maps link. Under each table there is a "Restaurant photos" block with one card per restaurant (`<div class="pcard" id="p-...">`).
- Tap a photo to make it big, then tap anywhere to close. This is done by `lightbox.js` (the look is in `style.css`, under "PHOTO POP-UP").
- On each day page, restaurant names are Google Maps links, and the 📷 next to a name jumps to that restaurant's photo card.

### Add a restaurant (3 steps)
1. Upload 3–5 photos into `img/food/<city>/` (names like `my-place-1.jpg`; keep each file under 300 KB).
2. In `food.html`, copy a whole `<div class="pcard" ...>` block inside the right city, then change the id, name, address line, Google link and photo file names. Keep `class="zoom"` on each photo link.
3. Add the restaurant's row to that city's table (copy a `<tr>` row) and make its name `<a class="gl" href="GOOGLE LINK" target="_blank" rel="noopener">Name</a>`.

### Change a Google Maps link
Search for the restaurant name with Ctrl+F in `food.html` and the day pages. Each place has `href="https://www.google.com/maps/search/..."`. Replace the address after `/search/` (use `+` between words), or paste the link you copy from Google Maps > Share.
