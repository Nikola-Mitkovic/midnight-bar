# Midnight Snack — The Backgammon Room

Third room of Midnight Bar, served at `/midnight-bar/snack/`. Buildless HTML/CSS/JavaScript; open through a static server or GitHub Pages. No dependencies or API keys.

## Collection

31 house recipes: 1 cinnamon roll, 10 hot chocolates, 8 muffins, 3 brownie cookies, 5 tiramisus and 4 trifles. Spellings normalized to blueberry, white, pumpkin and caramel. Recipe fronts show measures and The Ritual; backs show instructions, technique, a learning note, flavour/pairing notes, storage and a base-method reference. Flavour variations are house adaptations, not kitchen-tested publisher recipes. Tiramisu creams omit raw eggs and alcohol; ladyfingers normally contain eggs. Recipe times include approximate resting/chilling where applicable. Muffins and cookies are baked in proper tins/trays, then presented in cups/glasses.

## Backgammon foundation

The board has 24 points, two dice and a decorative standard opening arrangement of 15 dark and 15 light checkers. The separate glowing ivory marker is the dessert selector. It advances around the points by the dice total; doubles advance four times the die value. This is not a legal-move engine or a competitive backgammon match. “Set a new table” shuffles all 31 records and deals 24 distinct recipes. Every recipe remains available in the full menu. Menu filters deliberately do not change the board's table; this is explained in table etiquette.

Stable recipe IDs are separate from board point numbers, allowing future game rules, menus and illustrations to evolve independently. Grid/single-card browsing supports category, flavour and ingredient search, arrow buttons, keyboard arrows and horizontal touch swipes. The latest board-selected recipe receives a persistent gentle glow in the menu for the current browser session.

## Artwork workflow

Illustrated cards use watercolor WebPs in `images/`, mapped by recipe ID in `recipes.js`. Other cards use cup, glass or ramekin sketches from `snack.js`.

1. Add the final image to `snack/images/`, ideally a transparent WebP/PNG or cream-background image with room around the whole vessel.
2. Set `image: 'images/example.webp'` on its recipe record in `recipes.js` (or in the relevant factory output for that ID).
3. Upload the image and edited recipe file to the same GitHub paths. Bump the cache version on `recipes.js` in this directory's `index.html` when changing the file.

The shared renderer uses `object-fit: contain`, accessible alt text, and a sketch fallback for missing images. Art must show desserts served in cups, glasses, or ramekins, not plates. Six family-level renderers keep placeholders easy to replace.

## Recipe research

Base-method references, read November 9, 2026:

- [King Arthur Baking: Small-Batch Cinnamon Rolls](https://www.kingarthurbaking.com/recipes/small-batch-cinnamon-rolls-recipe)
- [Good Food: Peppermint Hot Chocolate](https://www.bbcgoodfood.com/recipes/peppermint-hot-chocolate)
- [Good Food: Basic Muffin Recipe](https://www.bbcgoodfood.com/recipes/basic-muffin-recipe)
- [Sally’s Baking: Brownie Cookies](https://sallysbakingaddiction.com/brownie-cookies/)
- [Good Food: Best Ever Tiramisu](https://www.bbcgoodfood.com/recipes/best-ever-tiramisu)
- [Good Food: Chocolate Trifle](https://www.bbcgoodfood.com/recipes/boozy-brownie-trifle)

Quantities and flavour additions are explicitly listed per variant. These references explain the underlying methods, not an endorsement of every house variation. Instructions and flavour notes are written for this collection.
