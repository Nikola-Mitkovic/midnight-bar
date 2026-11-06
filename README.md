# The Midnight Bar — Full deck edition

54 cards from the supplied photographs: four complete suits and two jokers. There are 53 distinct cocktail names because Moscow Mule appears in both diamonds and hearts, with different garnishes. Both cards are retained.

## Update your published GitHub site

Your site address stays https://nikola-mitkovic.github.io/midnight-bar/ . These updated files have not been uploaded by the assistant.

1. Extract the ZIP on your computer.
2. Open your existing `nikola-mitkovic/midnight-bar` repository on GitHub. Open the folder that currently contains `index.html` (normally the repository root on `main`).
3. Choose **Add file → Upload files**. Upload the new `index.html`, `styles.css`, and `app.js` to the same location, keeping those exact filenames. They replace the existing versions when you commit. You can also upload the updated README, RECIPES.md, and recipes.json reference export.
4. Commit the changes to the branch already used by Pages, normally `main`. Do not upload the ZIP itself or nest everything inside another folder. Do not create a new repository.
5. Wait for the Pages deployment to finish in the repository's Actions tab, then reload the website. No Pages settings changes are needed if the same branch and folder remain selected.
6. If your phone still shows the old page, refresh or reopen it in a private tab. The updated HTML uses versioned CSS/JS links to help avoid stale assets.

Official GitHub Pages publishing-source instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview offline

Open `index.html` in a current browser with `styles.css` and `app.js` alongside it. No dependencies, installation, fonts, or image downloads are needed. Optionally run `python -m http.server 8000` in the extracted folder and visit http://localhost:8000 . Stop it with Ctrl+C.

## What's changed

- All 54 cards with suits, ranks, ingredients, expanded preparation steps, and ml/US oz units.
- Search plus base-spirit and style filters, combined together.
- Clearly burgundy header and hero, including the first mobile screen.
- Large burgundy recipe buttons with a gold double border and matching suit symbols.
- Original local SVG illustrations with different glass shapes and garnishes.
- Updated copy, results counts, and a readable recipe reference.

## Recipe transcription notes

Recipes follow the supplied photographs rather than a separate canonical recipe standard. Preparation wording is expanded. Measures use conventional rounded bar conversions: 1 recipe ounce = 30 ml. The pictured Caipirinha omits the cachaça quantity; 2 oz / 60 ml is explicitly identified as an added preparation suggestion. Its sugar quantity follows the card's volume measure. Unspecified mixers, cream, and sauces are labeled to top, to float, or to taste. White Lady's optional egg-white amount is a preparation suggestion; optional egg whites are labeled pasteurized. Large card recipes such as Hurricane and Zombie may be divided into smaller portions.

`app.js` is the live data source. `recipes.json` is an optional reference export, not a file loaded by the website; changing it alone will not change the menu. `RECIPES.md` contains the readable full recipe list. The supplied photographs are not included in the website package.

## Checks

Passed JavaScript syntax and automated logic checks covering all 54 recipe dialogs, unit switching, unique card IDs, four complete suits, two jokers, illustrations, spirit filters, duplicate-name search, empty state, and focus return. Browser spot checks confirmed the burgundy mobile layout, desktop cards, combined gin/search filtering, reset, Aviation measurements, and Escape dismissal. No browser errors were logged during those checks. An exhaustive browser click-through was interrupted by the tool time limit; the complete recipe set was checked by automated logic tests instead. Please also check on your physical phone after uploading.

## QR codes

Keep any QR code pointed at the same published URL. Replacing files at that address does not require changing its destination. No new QR code is included or scan-tested in this update.
