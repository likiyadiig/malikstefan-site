# CLAUDE.md

Personal site for malikstefan.com.
Astro static site, deployed to Cloudflare Pages on push to main.
Build: `npm run build`, output: `dist/`.

## Structure

- `src/layouts/Base.astro` is the shell for every page. Nav and footer live here and nowhere else.
- `src/pages/*.astro` are routes. Filename becomes the URL.
- `src/pages/log/*.md` are weekly log entries.
- `public/` is copied verbatim.

## Conventions

- Zero client-side JavaScript unless I ask for it specifically.
- Scoped styles in the component. No global stylesheet beyond Base.astro.
- Every page sets its own title and meta description via Base.astro props.
- Body text 18px minimum, content column max 680px.
- Semantic HTML. Real heading order, no div soup.

## Working agreement

- Run `npm run build` after any change and confirm it exits 0 before telling me you are done.
- Never edit files in `dist/`. That directory is generated.
- Do not add a dependency without asking. This site should build with what Astro ships.
- Do not write marketing copy for me. Draft structure and placeholders, and I will write the words.
- Work on a branch. Do not push to main.

## Pages

- `/` Home. One sentence on what I am doing and why, a week counter, links to the other pages, an email field.
- `/about` About. What I can do today, what I cannot do yet, and why I am doing this.
- `/building` What I am Building. Current ideas, which way I am leaning, and a decision date.
- `/log` Log. Dated entries, newest first, including what broke.
