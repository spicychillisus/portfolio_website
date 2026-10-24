# Personal Portfolio

A responsive personal portfolio built with Next.js Pages Router, TypeScript, and Tailwind CSS.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` to validate changes.

## Customize

- Replace the clearly marked name, location, biography, email, and social URLs in `components/` and `pages/`.
- Edit the project list in `data/projects.ts`; add thumbnails under `public/images/projects/` and language icons under `public/icons/languages/`.
- Add supported languages to `utils/types.ts` and their icon paths to `utils/languageIcons.ts`.
- Add live demo URLs to a project's optional `liveUrl` field to show its demo link.
- Use the sun button in the navigation to switch between light and dark themes. The choice is saved in local storage.

## Git branches

This working copy has local `main` and `development` branches. No GitHub remote is configured yet. Add the repository's remote URL as `origin` and push both branches to publish them:

```powershell
git remote add origin <your-github-repository-url>
git push -u origin main
git push -u origin development
```