# What's left

The site is finished and deployable. Everything below is either a decision you
made deliberately or an optional addition — none of it blocks a build or a
deploy.

## The one thing that isn't real yet

- [ ] **Contact links** (`src/data/site.ts`, `contactLinks`) — you chose to keep
      all four as placeholders, so they render as dashed, un-clickable cards.
      That's intentional and it looks deliberate rather than broken, but it does
      mean nobody can currently reach you from the site. When you're ready, set
      `href` and `value` on any row:

      ```ts
      { label: 'Email',  value: 'you@example.com',
        href: 'mailto:you@example.com', icon: 'email' },
      { label: 'GitHub', value: 'github.com/CedricCliattJr',
        href: 'https://github.com/CedricCliattJr', icon: 'github' },
      ```

      Delete any row you don't want rather than leaving it as a placeholder.

## Please read before sharing the link

- [ ] **The four project descriptions** (`src/data/projects.ts`) — Home Lab,
      Sage, Cove and Bruno were drafted from the notes you already keep about
      your own setup, not from anything you told me directly in conversation.
      Read them and confirm they're accurate and that you're happy having them
      public. Delete anything you'd rather keep private.
- [ ] **The architecture diagram** (`src/components/HomeLabDiagram.astro`) —
      same caveat. It's deliberately conceptual: no hostnames, IP addresses,
      ports, service names or file paths, just how the pieces relate. Confirm
      it's an accurate picture before sharing, and keep it at that level of
      detail.
- [ ] **The Library on Carson** (`src/data/business.ts`) — described as
      independent technology and process work. `tech` is empty, so no
      technology tags render; add them once you're happy naming them. Worth a
      word with the business before publishing anything more specific about
      their operations.

## One-time setup on GitHub

- [ ] **Turn on Pages** — Settings → Pages → Source → "GitHub Actions". The
      deploy workflow builds fine without this but fails at the publish step.

## Optional additions

- [ ] **Screenshots** — drop files in `public/images/projects/` and set `image`
      on a project. Cards show a compact initials chip until you do.
- [ ] **Résumé PDF** — put it in `public/`, then fill in the Résumé row in
      `contactLinks` with `href: '/your-resume.pdf'`.
- [ ] **Custom domain** — see the deploying section of the README for the two
      environment variables to change.
- [ ] **Keep the Now section current** — `src/data/now.ts` is the section that
      makes the site feel alive. Update the list and the `nowUpdated` date every
      month or so; it's the cheapest way to keep the site looking maintained.

## Deliberate choices worth knowing about

- **Nothing was invented.** No certifications, employers, job titles, metrics,
  testimonials or awards appear anywhere. Where information was missing it's a
  placeholder, not a plausible guess.
- **The skills section says outright that depth varies** and doesn't claim
  mastery of anything.
- **AI-assisted development appears three times total** — once in the Tools
  skill category, once in the Now section as something you're experimenting
  with, and one line in the footer. It isn't a theme of the site.
- **`needsDetail`** on a project or business entry renders a visible "needs
  detail" note on the card. It exists so half-finished entries are obvious
  rather than quietly shipping as though they were done. Delete the field once
  an entry is settled.
