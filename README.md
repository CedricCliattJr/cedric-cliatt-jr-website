# cedric-cliatt-jr-website

My personal portfolio site. It's a static site that introduces who I am, what I
know, what I'm building, and how to reach me.

Built with [Astro](https://astro.build), written in TypeScript and plain CSS,
and deployed to GitHub Pages from the `main` branch.

## What it does

One page, split into sections: a hero, about, skills, projects, what I'm
currently working on, applied work for real businesses, a timeline of how I got
here, and contact links.

All of the content lives in typed data files under `src/data/`, separate from
the components that render it. Adding a project or changing a skill is an edit
to one file — you never have to touch the layout.

It supports light and dark themes with a toggle in the header, follows the
system preference by default, and remembers the choice.

The projects section leads with a conceptual architecture diagram of the home
lab, drawn as inline SVG in `src/components/HomeLabDiagram.astro`. It's
deliberately generic — no hostnames, addresses, ports or file paths — and it
uses the same theme tokens as everything else, so it reads correctly in both
themes.

## Content model

Everything the site renders is described by types in `src/types.ts` and filled
in under `src/data/`:

| File | What's in it |
|---|---|
| `site.ts` | Name, page title, meta description, navigation, contact links |
| `about.ts` | The About paragraphs and the "at a glance" facts |
| `skills.ts` | Skill categories and the technologies in each |
| `projects.ts` | Projects — name, description, tech, status, links, image, featured flag |
| `now.ts` | The "what I'm working on" list and the date it was last updated |
| `business.ts` | Applied/business work |
| `journey.ts` | Timeline milestones |

Two conventions worth knowing:

- **`status`** is one of `Learning`, `Building`, `Experimenting`, `Maintained`,
  `Completed` or `Planned`. It drives the coloured badges. To add a new one, add
  it to the `Status` union in `src/types.ts` and give it a colour token in
  `src/styles/global.css`.
- **`needsDetail`** is an optional string on projects and business entries. When
  it's set, the card shows a visible "needs detail" note. It's there so
  half-finished entries are obvious rather than quietly shipping as if they were
  done. Delete the field once the entry is settled.

## Local development

```bash
npm install       # installs dependencies, first time only
npm run dev       # starts the dev server at http://localhost:4321
npm run build     # type-checks, then builds the static site into dist/
npm run preview   # serves the built site so you can check it before pushing
```

`npm run build` runs `astro check` first, so a type error in a data file stops
the build rather than showing up as a broken page.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Nothing to run by hand.

**One-time setup:** in the repo, go to Settings → Pages and set Source to
"GitHub Actions". Until that's done the build will succeed but the deploy step
will fail.

The site will be served from:

```
https://<your-github-username>.github.io/cedric-cliatt-jr-website/
```

Because that's a subfolder, `astro.config.mjs` sets a `base` path. If you later
point a custom domain at the site, or rename the repo to
`<username>.github.io`, set these environment variables in the workflow's build
step instead of editing the config:

```yaml
env:
  SITE_URL: https://your-domain.com
  SITE_BASE: /
```

## Adding to the site

**A new project** — add an entry to the array in `src/data/projects.ts`. Every
field is required except `needsDetail`; use `null` for `repoUrl`, `liveUrl` and
`image` when you don't have one.

**A screenshot** — drop the file in `public/images/projects/`, then set
`image: '/images/projects/your-file.png'` on the project. The card renders the
image at 16:9 across the top; without one it shows a compact initials chip
instead.

**A résumé download** — put the PDF in `public/`, then fill in the Résumé row in
`contactLinks` in `src/data/site.ts` with `href: '/your-resume.pdf'`.

**A social preview image** — `public/og-image.png` is referenced from the
`og:image` and `twitter:image` tags in `BaseLayout.astro`. Replace the file at
the same path (1200×630) to change what shows when the link is shared.

**A second page** — create `src/pages/<name>.astro`, use `BaseLayout`, and
import whichever section components you want. The sections in `src/sections/`
are self-contained, so moving one onto its own route doesn't require rewriting
it. You'd also update `nav` in `src/data/site.ts` to point at the new route
instead of an anchor.

## File structure

```
astro.config.mjs           Site URL, base path, sitemap, build settings
LICENSE                    MIT
public/                    Served as-is: favicon, og-image, robots.txt, images
src/
  types.ts                 Types for every kind of content on the site
  data/                    The actual content — this is what you edit
  styles/global.css        Design tokens, base styles, layout helpers
  layouts/BaseLayout.astro  <head>, meta tags, theme script, header/footer
  components/              Reusable pieces (cards, badges, tags, header, footer)
  sections/                One file per section of the homepage
  pages/index.astro        The homepage — assembles the sections in order
  pages/404.astro          Not-found page
.github/workflows/deploy.yml  Build and publish on push to main
```

## SEO and sharing

`BaseLayout.astro` sets the canonical URL, meta description, Open Graph and
Twitter card tags, and `Person` structured data. `@astrojs/sitemap` generates
`sitemap-index.xml` at build time, and `public/robots.txt` points at it.

If you change the site's URL, update the sitemap line in `robots.txt` to match —
that one is a literal string and isn't generated from the config.

## Still to check

`TODO.md` has the short list. The contact links are placeholders by choice, and
a few entries were drafted from existing notes and are worth reading before you
share the link.

## License

MIT — see `LICENSE`.
