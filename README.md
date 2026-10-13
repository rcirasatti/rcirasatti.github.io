# rcirasatti.github.io

Personal portfolio of Rucirasatti Nariswana, built with React and Vite.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text lives in `src/data/content.js`: profile, projects, experience, research, skills, education, and certifications. The CV offered for download is `public/Rucirasatti-Nariswana-CV.pdf`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist` to GitHub Pages. In the repository settings, Pages must use "GitHub Actions" as its source.
