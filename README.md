# The Midnight Bar — Clubs, spades & hearts edition

54 distinct cocktails. All 13 clubs, 13 spades, and 13 hearts include individual watercolor PNG illustrations and two-sided researched recipe cards. The 6♥ duplicate Moscow Mule is now Painkiller; 2♦ remains Moscow Mule. Diamonds and jokers retain their existing illustrations and recipe dialogs.

## Install this update on GitHub

Extract the ZIP and upload its contents into the same repository folder that already contains `index.html`. Replace the existing files and ADD the new files/folder. Do not upload only the original three files for this update.

Required website files:

- `index.html`
- `styles.css`
- `app.js`
- **`hero.js` — new, required for the shuffling landing card**
- **`recipes.js` — new, required**
- **`artwork.js` — new, required**
- **`illustrations.js` — new, required**
- **`images/` — new, artwork location** (includes 39 clubs/spades/hearts illustrations)

You can upload the documentation and reference exports too. Commit to your existing Pages branch, normally `main`, and wait for deployment. Keep the filenames and folder structure intact; do not nest the files inside an extra folder. Your URL stays https://nikola-mitkovic.github.io/midnight-bar/ . The assistant has not uploaded this update.

The new HTML uses `?v=6` links to avoid serving old scripts/styles. If the page looks stale after deployment, refresh or try a private tab. For future changes, increment relevant script versions in `index.html` if necessary.

## Change artwork yourself

Upload an image to the `images` folder using a listed filename, for example `images/old-fashioned.png`. That image is automatically used everywhere the drink appears. Replace it with a new file of the same name whenever you want. Missing or unreadable images show the original SVG art, with no broken-image icon. Files are lazy-loaded on menu cards.

See **ARTWORK-GUIDE.md** for all 54 filenames, image preparation tips, PNG/JPEG overrides, optional cache versions, and how to keep an individual drink on SVG. Clubs, spades, and hearts PNGs are included; diamonds and jokers retain SVG fallback art. Optional images that have not been uploaded may generate expected 404 entries in browser developer tools; the visible fallback is intentional.

## Edit content in batches

See **EDITING-GUIDE.md**. All live recipe content now lives in `recipes.js`, separate from interactions and illustrations. Tags and recipe sources can be added drink by drink. `recipes.json` and `RECIPES.md` are reference exports only and are not loaded by the site; update them separately if you need matching exports.

Clubs, spades, and hearts use `shortMethod` on the front and `detailedSteps` on the back, with source links and learning notes. See HEARTS-SOURCES.md, SPADES-SOURCES.md, and CLUBS-SOURCES.md for recipe choices. Artwork was generated with the built-in image tool; prompts are in ART-PROMPTS.md, SPADES-ART-PROMPTS.md, and CLUBS-ART-PROMPTS.md.

## Categories

- 8 base-spirit categories: whiskey, gin, vodka, tequila, rum, cachaça, applejack, absinthe. Vesper belongs to gin and vodka.
- 5 card groups: spades, clubs, diamonds, hearts, jokers. Every option has a symbol.
- 16 style/flavour tags across all 54 drinks, including spirit-forward, citrusy, smoky, herbal, tropical, creamy, coffee, and sparkling.
- Search names, ingredients, tags, and preparation methods. Accents are optional: `pina` finds Piña Colada.
- All filters combine. Click a tag to filter by it; use Clear filters to reset everything.

Taste tags are editorial descriptions, not numerical strength/sweetness measures or allergen certifications. Suit and spirit are separate: the hearts Jack Rose uses applejack; the Zombie is a rum-based joker.

## Preview

Open `index.html` with all required files beside it. No installation or build step is required. For a local server, run `python -m http.server 8000` in this folder and open http://localhost:8000 . Stop with Ctrl+C.

## Verification

Passed syntax and automated checks for all 54 records, dialogs, units, artwork paths, tag/spirit/suit filters, search, and all 39 researched card flip states. Browser checks verified watercolor loading, front/back navigation, source links, and a 390 CSS-pixel layout without horizontal overflow.

## Recipe and QR notes

Clubs, spades, and hearts use the researched versions documented in their source guides; other suits retain their previous card transcriptions. Bar conversion is rounded at 30 ml per recipe ounce. Optional egg whites in the other suits remain labeled pasteurized. Original photographs are not redistributed.

Any QR pointing to the existing site address can keep the same destination after this update. No new QR code is included or scan-tested.

## Included artwork

The 39 original transparent PNGs total about 68 MB and load lazily in the menu. They prioritize illustration quality; first visits can take longer on a slow mobile connection. Your reference JPG photos are not included in the ZIP.

## Two separate notes

One thing to learn (`learn`) explains technique or ingredient knowledge. What to expect (`expect`) describes flavor, texture, and occasional suggested pairings. Both appear on all 39 researched card backs. Tasting and pairing notes are editorial interpretations, not source quotations. Repeated techniques are intentional where useful.

## Shuffling landing card

The simplified hero randomly draws from all 54 cocktails every 20 seconds, without immediately repeating a card. It shows the drink name, art, suit/rank, spirit, and method. Deal another changes it immediately; Pause shuffle / Resume shuffle controls automatic changes. Hidden tabs suspend the timer, and an open recipe prevents background card changes. The fixed-size card avoids layout jumps. Set `HERO_INTERVAL_MS` in `hero.js` to adjust the interval.
