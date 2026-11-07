# Modular editing guide

The website still opens directly from disk and runs on GitHub Pages without a build process.

## What lives where

| File | What to edit |
| --- | --- |
| `recipes.js` | Names, ingredients, preparation, bartender notes, tags, category membership, suit/rank |
| `artwork.js` | Optional image paths, alternate text, and image cache versions |
| `images/` | Your uploaded artwork; see `ARTWORK-GUIDE.md` for every filename |
| `illustrations.js` | Original SVG fallback drawings |
| `games/deck.js` | Future game logic; not yet loaded by the menu |
| `hero.js` | Landing card shuffle interval and controls |
| `app.js` | Filtering, recipe dialogs, and image loading behavior |
| `styles.css` | Layout, color, typography |
| `index.html` | Landing-page copy and category dropdown labels |
| `recipes.json` / `RECIPES.md` | Reference exports only; the site does not read these files |

Use a plain text editor or GitHub's file editor. Each drink is a separate object in `recipes.js`. Preserve commas and quotation marks. Existing recipes are complete examples to copy.

## Tags and categories

- `categories`: base-spirit filter membership. Allowed values are `whiskey`, `gin`, `vodka`, `tequila`, `rum`, `cachaca`, `applejack`, `absinthe`. Multiple values are allowed; Vesper belongs to gin and vodka. `category` is retained as legacy/reference metadata; the site filters on `categories`.
- `suit` and `rank`: the actual card, independent of its base spirit. The hearts Jack Rose uses applejack; the rum-based Zombie remains a joker.
- `tags`: editable tasting/style labels, not precise sweetness, alcohol, or allergen measurements. Every tag automatically becomes an option in the style dropdown. Clicking a card tag applies that filter. Search also matches tags and preparation methods.
- Spirit, suit, style, and text search intersect: every selected condition must match. Use Clear filters to start over.
- Dropdown icons are decorative navigation cues, not additional classifications. The Card suit filter is the authoritative suit selection.

## Two-sided cards

All 52 cards across the four suits now flip. `researched: true` plus a nonempty `detailedSteps` array enables the two-sided layout for any drink.

- Front: `ingredients` (metric / ounce / ingredient triples), `shortMethod`, `tip`, and artwork.
- Back: `detailedSteps`, `tools`, `learn` (technique/ingredient lesson), `expect` (flavor, texture, optional pairing), `recipeVersion`, and `recipeSources` (`title`, HTTPS `url`, and `accessed`).
- `measureNote` explains the unit convention. `steps` remains the preparation field for unresearched cards.

To upgrade another suit, follow a hearts object, verify its source, and fill these fields. Preserve ingredient/step agreement. The backs explicitly explain recipe variants instead of silently mixing recipes. Update the reference exports separately.

## Replacing a drink

The duplicate at 6♥ is now Painkiller. Moscow Mule remains at 2♦. To replace another drink, keep its suit/rank, give it a unique `id` and `artworkKey`, update all recipe/category/tag fields, and set its image path in `artwork.js`. Keep the total card count unchanged or update the landing-page count.

## A safe batch workflow

Work on a handful of recipe objects or images, open `index.html` locally, search for each changed drink, and check its image and recipe dialog. Commit the changed files to GitHub, then check the deployed site on your phone. GitHub's commit history lets you review or revert changes.
