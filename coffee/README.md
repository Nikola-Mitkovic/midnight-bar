# Midnight Café — first edition

Visit `/coffee/` on GitHub Pages. The existing cocktail menu remains at the repository root.

The standalone coffee experience uses `coffee/index.html`, `coffee/cafe.css`, `coffee/cafe.js`, and `coffee/recipes.js`. Seven starter recipes are populated; the roulette visual has 37 pockets, but **only the seven populated recipes can win** until the other 30 are authored.

The `coffee/images/` folder contains seven lightweight SVG starter illustrations. They are deliberately replaceable. To use a finished watercolor asset, upload a PNG or WebP to this folder and change the corresponding `images/<id>.svg` references in `coffee/cafe.js` to the new extension. The generated visual concepts can be used as art direction.

The wheel supports unrestricted random draws and ingredient exclusions. The manual menu supports search, style filtering and opening individual recipe instructions. The wheel is a themed random selector, not a physical roulette simulator. The seven numbers correspond to the first seven reserved slots.

Recipes are editable objects in `coffee/recipes.js`. Add more records and matching images in batches. Ingredient keys are used by the exclusions control. Keep each `id` unique.

Irish Coffee contains alcohol and is marked with the `alcohol` ingredient key, so it can be excluded.
