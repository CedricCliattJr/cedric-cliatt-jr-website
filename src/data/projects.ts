import type { Project } from '../types';

/**
 * Projects.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * READ THIS BEFORE PUBLISHING
 *
 * The entries below were drafted from the notes you already keep about your own
 * home lab and apps. They describe what the projects are, deliberately without
 * any infrastructure detail that shouldn't be public — no hostnames, ports,
 * IPs, file paths or network specifics. Go through each one and confirm the
 * description is accurate and that you're happy having it public. Delete
 * anything you'd rather keep private.
 *
 * `needsDetail` renders a small visible marker on the card so you can see at a
 * glance what still needs your input. Remove the field once it's settled.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    id: 'home-lab',
    name: 'Home Lab & Self-Hosted Infrastructure',
    description:
      'A personal Ubuntu server running the services I use every day. It handles storage split across separate drives for the OS, applications, media and backups, network-wide DNS filtering, private remote access, and the small web apps I write for myself. It is where I practice the Linux administration, networking and service management side of my coursework on something I actually depend on.',
    tech: ['Ubuntu Server', 'Linux', 'systemd', 'Networking', 'DNS filtering', 'Backups'],
    category: 'Infrastructure',
    status: 'Maintained',
    repoUrl: null,
    liveUrl: null,
    image: null,
    featured: true,
    needsDetail:
      'Confirm this description and the architecture diagram above are accurate before sharing the site.',
  },
  {
    id: 'sage',
    name: 'Sage — Expense Tracker',
    description:
      'A self-hosted web app for tracking what I spend and seeing it summarised by month. Built to fit how I actually budget rather than how a commercial app assumes I do.',
    tech: ['Python', 'Flask', 'JSON storage', 'HTML/CSS'],
    category: 'Personal Tools',
    status: 'Maintained',
    repoUrl: null,
    liveUrl: null,
    image: null,
    featured: true,
    needsDetail: 'Add the repo link if you want this one public, plus a screenshot.',
  },
  {
    id: 'cove',
    name: 'Cove — Habit & Skill Tracker',
    description:
      'A tracker for habits, recurring chores and skills I am working on, backed by a small relational schema so history is queryable rather than just a running list.',
    tech: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
    category: 'Personal Tools',
    status: 'Building',
    repoUrl: null,
    liveUrl: null,
    image: null,
    featured: false,
    needsDetail: 'Confirm the current status and add a repo link or screenshot.',
  },
  {
    id: 'bruno',
    name: 'Bruno — Fitness & Grocery Planner',
    description:
      'Tracks workouts and nutrition, and turns planned meals into a grocery list. The most data-model-heavy of my personal apps — it is where I have done the most work on schema design.',
    tech: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
    category: 'Personal Tools',
    status: 'Building',
    repoUrl: null,
    liveUrl: null,
    image: null,
    featured: false,
    needsDetail: 'Confirm the current status and add a repo link or screenshot.',
  },
  {
    id: 'portfolio',
    name: 'This Site',
    description:
      'A static portfolio built with Astro. All of the content lives in typed data files separate from the components, so updating a project or a skill is a one-file edit rather than a rewrite. Deployed automatically from the main branch.',
    tech: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions', 'GitHub Pages'],
    category: 'Web',
    status: 'Building',
    repoUrl: null,
    liveUrl: null,
    image: null,
    featured: false,
    needsDetail: 'Add the repo URL for this site once you are happy publishing it.',
  },
];

/** Featured first, then original order. Used by the projects section. */
export const sortedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);
