# Karthik Ashok — Portfolio (ready to use)

## Setup (local)
1. Clone/copy the folder.
2. Put your background image in `assets/wallpaper.jpg` (replace the placeholder).
3. Put your resume PDF in `assets/resume.pdf` if you want the download link to work.
4. Open `index.html` in your browser.

## Make contact form live
- **Option A (quick)**: Use the current mailto behavior (opens user's email client).
- **Option B (recommended)**: Use Formspree or Netlify Forms:
  - Sign up at Formspree, copy your form endpoint (e.g. `https://formspree.io/f/xxxx`).
  - Update the form in `index.html` (add `action="https://formspree.io/f/xxxx" method="POST"`) and remove the JS mailto fallback or handle it in JS via fetch.
- **Option C (advanced)**: Create a serverless function (Netlify Functions, Vercel Serverless) to accept form posts and forward to email/integration.

## Deploy
- **GitHub Pages**:
  - Create a repository, push this folder as the `gh-pages` branch OR use the repository settings to deploy `main` branch root.
- **Netlify / Vercel**:
  - Drag & drop the folder (or connect repository) for one-click deploy.
  - Ensure `assets/` is included.

## Customize
- Edit `styles.css` for colors and spacing.
- Edit `index.html` text to include your personal bios, links, and correct contact info.
