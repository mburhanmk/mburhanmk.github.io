# Muhammed Burhan M K — Personal Portfolio

Dark-themed responsive portfolio in plain HTML, CSS and JavaScript. No build step.

## Files

- `index.html` — page structure
- `styles.css` — design system, layout, animations
- `script.js` — the `SITE` content object at the top (**edit this to change text/links**), followed by the code that renders it

## Editing content

Everything lives in the `SITE` object at the top of `script.js`. Add or remove `{...}` items in a list; set a list to `[]` to hide its section. An experience item's optional `url` links the company name.

## Contact form

Uses `mailto:` (address set in `contact.email`), so the visitor's email app opens pre-filled. For direct delivery, connect Formspree, Web3Forms or EmailJS — never expose private API keys in frontend code.

## GitHub Pages

Push all files to the repo root (`index.html` at the top level) and enable Pages from the `main` branch, `/ (root)`.
