# Modular editing guide

The website still opens directly from disk and runs on GitHub Pages without a build process.

## What lives where

| File | What to edit |
| --- | --- |
| `recipes.js` | Names, ingredients, preparation, bartender notes, tags, category membership, suit/rank |
| `artwork.js` | Optional image paths, alternate text, and image cache versions |
| `images/` | Your uploaded artwork; see `ARTWORK-GUIDE.md` for every filename |
| `illustrations.js` | Original SVG fallback drawings |
| `app.js` | Filtering, recipe dialogs, and image loading behavior |
| `styles.css` | Layout, color, typography |
| `index.html` | Landing-page copy and category dropdown labels |
| `recipes.json` / `RECIPES.md` | Reference exports only; the site does not read these files |

Use a plain text editor or GitHub's file editor. Each drink is a separate object in `recipes.js`. Preserve commas and quotation marks. Existing recipes are complete examples to copy.

## Tags and categories

- `categories`: base-spirit filter membership. Allowed values are `whiskey`, `gin`, `vodka`, `tequila`, `rum`, `cachaca`, `applejack`, `absinthe`. Multiple values are allowed; Vesper belongs to gin and vodka. `category` is retained as legacy/reference metadata; the site filters on `categories`.
- `suit` and `rank`: the actual card, independent of its base spirit. The hearts Moscow Mule remains vodka; the rum-based Zombie remains a joker.
- `tags`: editable tasting/style labels, not precise sweetness, alcohol, or allergen measurements. Every tag automatically becomes an option in the style dropdown. Clicking a card tag applies that filter. Search also matches tags and preparation methods.
- Spirit, suit, style, and text search intersect: every selected condition must match. Use Clear filters to start over.
- Dropdown icons are decorative navigation cues, not additional classifications. The Card suit filter is the authoritative suit selection.

## Prepared for the next card-flip update

The flip interaction is not implemented in this edition. Content slots are already separate:

- Front: `name`, `suit`, `rank`, `artworkKey`, `ingredients`, `shortMethod`, `tip`.
- Back: `detailedSteps` (an array of instruction paragraphs), `recipeSources` (an array of source objects, e.g. `{ "title": "Recipe source", "url": "https://…" }`). These are empty until researched or supplied.
- Current dialog: continues to show `steps`, the existing preparation steps.

`shortMethod` currently contains the existing concise preparation text as a starting draft; it can be tightened when laying out the card face. Empty detailed fields do not claim online research was completed. Do not replace amounts silently when researching a recipe variant; decide whether to preserve the photographed card or adopt the new variant.

## Replace the duplicate later

Edit the `moscow-mule-hearts` object in `recipes.js`, keeping its 6/heart position if desired. Give the replacement a unique `id`, a new `artworkKey`, and matching ingredients, tags, category membership, preparation, and illustration metadata (`shape`, `color`). Upload artwork for the new key. `label` is the small collection caption. `glass` is descriptive; `shape` chooses a fallback silhouette (`rocks`, `coupe`, `tall`, `flute`, `mug`, `tiki`, `julep`, `coffee`, `hurricane`).

If you add/remove drinks rather than replacing one, update the landing/footer counts in `index.html`; the result count is automatic. Keep reference exports in sync if you use them.

## A safe batch workflow

Work on a handful of recipe objects or images, open `index.html` locally, search for each changed drink, and check its image and recipe dialog. Commit the changed files to GitHub, then check the deployed site on your phone. GitHub's commit history lets you review or revert changes.
