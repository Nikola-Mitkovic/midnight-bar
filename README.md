# The Midnight Bar — Modular edition

54 card recipes, editable artwork, and combined category filters. The duplicate Moscow Mule remains until a replacement is chosen. The card-flip redesign is prepared in the content structure but is not implemented yet.

## Install this update on GitHub

Extract the ZIP and upload its contents into the same repository folder that already contains `index.html`. Replace the existing files and ADD the new files/folder. Do not upload only the original three files for this update.

Required website files:

- `index.html`
- `styles.css`
- `app.js`
- **`recipes.js` — new, required**
- **`artwork.js` — new, required**
- **`illustrations.js` — new, required**
- **`images/` — new, artwork location** (currently contains instructions only)

You can upload the documentation and reference exports too. Commit to your existing Pages branch, normally `main`, and wait for deployment. Keep the filenames and folder structure intact; do not nest the files inside an extra folder. Your URL stays https://nikola-mitkovic.github.io/midnight-bar/ . The assistant has not uploaded this update.

The new HTML uses `?v=3` links to avoid serving old scripts/styles. If the page looks stale after deployment, refresh or try a private tab. For future changes, increment relevant script versions in `index.html` if necessary.

## Change artwork yourself

Upload an image to the `images` folder using a listed filename, for example `images/old-fashioned.webp`. That image is automatically used everywhere the drink appears. Replace it with a new file of the same name whenever you want. Missing or unreadable images show the original SVG art, with no broken-image icon. Files are lazy-loaded on menu cards.

See **ARTWORK-GUIDE.md** for all 54 filenames, image preparation tips, PNG/JPEG overrides, optional cache versions, and how to keep an individual drink on SVG. There are no replacement photos in this release. Optional images that have not been uploaded may generate expected 404 entries in browser developer tools; the visible fallback is intentional.

## Edit content in batches

See **EDITING-GUIDE.md**. All live recipe content now lives in `recipes.js`, separate from interactions and illustrations. Tags and recipe sources can be added drink by drink. `recipes.json` and `RECIPES.md` are reference exports only and are not loaded by the site; update them separately if you need matching exports.

New fields reserve space for `shortMethod`, `detailedSteps`, and `recipeSources` for a later flip-card interface. Existing `steps` still powers the current dialog. Detailed instructions have not been researched in this release. Both Moscow Mule cards have distinct IDs and image slots for easy later replacement.

## Categories

- 8 base-spirit categories: whiskey, gin, vodka, tequila, rum, cachaça, applejack, absinthe. Vesper belongs to gin and vodka.
- 5 card groups: spades, clubs, diamonds, hearts, jokers. Every option has a symbol.
- 16 style/flavour tags across all 54 drinks, including spirit-forward, citrusy, smoky, herbal, tropical, creamy, coffee, and sparkling.
- Search names, ingredients, tags, and preparation methods. Accents are optional: `pina` finds Piña Colada.
- All filters combine. Click a tag to filter by it; use Clear filters to reset everything.

Taste tags are editorial descriptions, not numerical strength/sweetness measures or allergen certifications. Suit and spirit are separate: the hearts Moscow Mule remains vodka; the Zombie is a rum-based joker.

## Preview

Open `index.html` with all required files beside it. No installation or build step is required. For a local server, run `python -m http.server 8000` in this folder and open http://localhost:8000 . Stop with Ctrl+C.

## Verification

Passed syntax and automated checks for all 54 data records, recipe dialogs, unit switching, artwork paths, 16 tag filters, 8 spirit categories, 5 suit groups, combined filters, accented search, and optional image overrides. Browser checks confirmed successful image replacement in the hero and dialog, fallback restoration after removing the test image, tag clicking, empty-result reset, and recipe units. At a 390 px viewport the page had no horizontal overflow and recipe artwork remained visible. The temporary artwork test file was removed before packaging.

## Recipe and QR notes

Recipes retain the photographed-card versions and their previous transcription notes. Bar conversion remains 30 ml per recipe ounce. Caipirinha's omitted cachaça quantity is marked as an added 60 ml / 2 oz suggestion; unspecified mixers remain to top/to taste. Optional egg whites are labeled pasteurized. The original photographs are not redistributed.

Any QR pointing to the existing site address can keep the same destination after this update. No new QR code is included or scan-tested.
