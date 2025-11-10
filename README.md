# Nicholas Tunje — Photography (week8_web)

A small static portfolio website built as the Week 8 final project. It showcases a photography portfolio with filtering, a lightbox, testimonials, services, and a contact form.

## Project Snapshot

- Title: Nicholas Tunje | Photography
- Technology: HTML5, CSS, vanilla JavaScript
- Purpose: Static portfolio/demo site for photography work

## Features

- Responsive navigation with mobile toggle
- Hero area with call-to-action
- Portfolio grid with category filters (All / Wedding / Portrait / Commercial / Landscape)
- Clickable portfolio items that open a lightbox (prev/next navigation)
- About, Services, Testimonials, Contact sections
- Simple contact form (client-side validation only)
- Smooth scrolling and active nav highlighting

## Files of interest

- `index.html` — Main site markup (root)
- `src/index.css` — Styles for the site
- `src/indexScript.js` — JavaScript: portfolio data, filtering, lightbox, nav, testimonials, contact form
- `public/images/` — Images used by the site (hero, portfolio images, author image, etc.)

If you want to make changes to the portfolio items, edit the `portfolioItems` array in `src/indexScript.js`.

## Project structure

```
week8_web/
├─ index.html
├─ README.md
├─ public/
│  └─ images/
├─ src/
│  ├─ index.css
│  └─ indexScript.js
```

## How to run locally

This is a static site — you can open `index.html` directly in your browser. For a better development experience (and to avoid some browser restrictions), serve the folder with a local HTTP server.

Recommended options:

- Using Python (if installed):

```powershell
# from the project root (week8_web)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

- Using the VS Code Live Server extension: right-click `index.html` -> "Open with Live Server".

## Editing and customization notes

- Portfolio items are defined in `src/indexScript.js` as an array of objects. Each item has id, title, category, description, and image path.
- CSS lives in `src/index.css`. Edit this file to change layout, fonts, colors, spacing, etc.
- Images should be placed in `public/images/`. Use consistent, web-friendly filenames (avoid spaces and special characters).

### Important: image filename caveat

Some sample image paths in `src/indexScript.js` contained spaces or typos (for example: `sunset w.jpg`, `costal.jpg`, `Nicho.jpg`). Browsers and web servers can fail to load files with spaces or inconsistent casing. Recommended fixes:

- Rename files to use hyphens or underscores and lowercase names (e.g., `sunset-w.jpg`, `coastal.jpg`, `nicho.jpg`).
- Update the `image` paths in `src/indexScript.js` (and any HTML) to match the new filenames.

The following exact PowerShell commands were run in this project to normalize the filenames (run from the repository root or adjust the paths as needed):

```powershell
Rename-Item -LiteralPath 'f:\PLP ACADEMY\Web_Development\week8_web\public\images\sunset w.jpg' -NewName 'sunset-w.jpg'
Rename-Item -LiteralPath 'f:\PLP ACADEMY\Web_Development\week8_web\public\images\costal.jpg' -NewName 'coastal.jpg'
Rename-Item -LiteralPath 'f:\PLP ACADEMY\Web_Development\week8_web\public\images\Nicho.jpg' -NewName 'nicho.jpg'
```

After renaming, the following files were updated to match the new names:

- `src/indexScript.js` — updated references to `sunset-w.jpg` and `coastal.jpg`
- `index.html` — updated reference to `./public/images/nicho.jpg`

If you prefer an automated approach for future uploads, consider adding a small script (PowerShell or Node) to normalize filenames on add.

## Known limitations

- The contact form is client-side only (it shows an alert and resets). To collect messages, wire the form to a backend or a service (Formspree, Netlify Forms, etc.).
- There is no build step—this is a plain static site.

## Accessibility notes

- Images should include descriptive alt text where appropriate (the portfolio items already set `alt` to the title in the script). Consider adding keyboard handling for lightbox navigation and focus trapping for improved accessibility.

## Contributing / Next steps

- Fix or standardize image filenames in `public/images/` and update paths in `src/indexScript.js`.
- Add unit tests or automated linting if you integrate a build tool.
- Add a backend endpoint or service integration for contact form submissions.

## License

This project can be used for learning and demo purposes. Add an appropriate license file (e.g., `LICENSE`) if you plan to reuse or share it publicly.

## Contact

Nicholas Tunje — nm.tunje@gmail.com
