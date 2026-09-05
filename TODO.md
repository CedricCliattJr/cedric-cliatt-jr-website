# Before this site goes public

Everything here is a placeholder or an assumption I couldn't verify. The site
builds and runs as-is, but these need your input.

## Blocking — don't share the link until these are done

- [ ] **Contact links** (`src/data/site.ts`, `contactLinks`) — all four rows are
      placeholders and render as dashed, un-clickable cards. Fill in the email
      address you want public, your GitHub profile URL, your LinkedIn URL, and
      either link a résumé PDF or delete that row.
- [ ] **Review the project descriptions** (`src/data/projects.ts`) — I drafted
      the Home Lab, Sage, Cove and Bruno entries from the notes you already keep
      about your own setup. Read each one and confirm it's accurate and that
      you're happy having it public. Delete anything you'd rather keep private.
      I deliberately left out hostnames, ports, IP addresses, file paths and
      network specifics; keep it that way.
- [ ] **Your role at The Library on Carson** (`src/data/business.ts`) — the
      `role` field is a placeholder, and `tech` needs the actual tools you used.
      Worth checking with the business before publishing anything more specific
      about their operations.

## Should do

- [ ] **Timeline years** (`src/data/journey.ts`) — three entries say
      "TODO: add year".
- [ ] **Location** (`src/data/site.ts`, `site.location`) — set it or delete the
      field. It isn't rendered anywhere yet, so it's harmless either way.
- [ ] **Availability line** (`src/data/site.ts`, `site.availability`) — currently
      says you're open to internships and entry-level roles, shown under the
      hero buttons. Set it to `null` to hide it.
- [ ] **"Last updated" on the Now section** (`src/data/now.ts`, `nowUpdated`) —
      set a date, and update it whenever you change that list.
- [ ] **Turn on GitHub Pages** — Settings → Pages → Source → "GitHub Actions".
      The deploy workflow will fail at the publish step until this is set.
- [ ] **License** — I didn't add one, since that's your call. MIT is the usual
      choice for a personal site; leaving it off is also fine if you'd rather
      nobody reuse the code.

## Nice to have

- [ ] **Screenshots** — drop images in `public/images/projects/` and set the
      `image` field on a project. Cards currently show an initials chip instead.
- [ ] **A network or architecture diagram for the home lab** — would be the
      single strongest addition for a cloud/networking portfolio. Same place as
      screenshots.
- [ ] **Résumé PDF** — put it in `public/` and link it from `contactLinks`.
- [ ] **A real favicon** — `public/favicon.svg` is a plain "CC" monogram tile.
- [ ] **An Open Graph preview image** — currently no `og:image`, so links shared
      on social or in chat show no thumbnail. Add a 1200×630 PNG to `public/`
      and reference it in `src/layouts/BaseLayout.astro`.
- [ ] **A custom domain** — see the deploying section of the README for the two
      environment variables to change.

## Things I deliberately did not do

- No certifications, employers, job titles, metrics, testimonials or awards
  appear anywhere on the site. Nothing was invented to fill space.
- The skills section says outright that depth varies and doesn't claim mastery.
- AI-assisted development is listed once in the Tools skill category, mentioned
  once in the Now section as something you're experimenting with, and noted once
  in the footer. It isn't a theme of the site.
