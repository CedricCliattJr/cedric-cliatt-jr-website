/**
 * Shared content types.
 *
 * Everything the site renders is described here first, then filled in under
 * src/data/. If you want a new field on a project (say, a write-up link),
 * add it here and TypeScript will tell you everywhere it needs handling.
 */

/** Where a piece of work currently stands. Drives the coloured badges. */
export type Status =
  | 'Learning'
  | 'Building'
  | 'Experimenting'
  | 'Maintained'
  | 'Completed'
  | 'Planned';

export type ProjectCategory =
  | 'Infrastructure'
  | 'Business Tooling'
  | 'Personal Tools'
  | 'Web';

export interface Project {
  /** Stable id used for anchors and React-less keying. */
  id: string;
  name: string;
  /** One or two sentences. Plain description, no marketing. */
  description: string;
  /** Technologies actually used. Leave empty rather than guessing. */
  tech: string[];
  category: ProjectCategory;
  status: Status;
  /** Full URL to the repo, or null if there isn't a public one yet. */
  repoUrl: string | null;
  /** Full URL to a live/demo version, or null. */
  liveUrl: string | null;
  /**
   * Path to a screenshot in /public (e.g. '/images/projects/sage.png'),
   * or null to render the fallback monogram tile instead.
   */
  image: string | null;
  /** Featured projects render first and get a wider card. */
  featured: boolean;
  /**
   * Set this when the entry is a stub you still need to flesh out. It renders
   * a visible "needs detail" marker so nothing fake ships by accident.
   */
  needsDetail?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  /** Short line explaining what this grouping covers. */
  blurb: string;
  skills: string[];
}

export interface NowItem {
  title: string;
  detail: string;
  status: Status;
}

export interface BusinessEngagement {
  id: string;
  /** Business or context name. */
  name: string;
  /** Your relationship to it, in plain words. */
  role: string;
  summary: string;
  /** Areas of work — kept deliberately non-quantified. */
  focusAreas: string[];
  tech: string[];
  status: Status;
  /**
   * An optional public link for the engagement — a site you can actually
   * visit. Omit it when there's nothing to point at; a dead or private link
   * is worse than none.
   */
  url?: { label: string; href: string };
  needsDetail?: string;
}

export interface JourneyMilestone {
  /** Free-form: '2024', 'In progress', 'Ongoing'. Not validated as a date. */
  period: string;
  title: string;
  detail: string;
  /** Marks the entry as current — renders a filled marker on the timeline. */
  current?: boolean;
}

export interface ContactLink {
  label: string;
  /** Text shown to the reader. Use a placeholder if you don't have it yet. */
  value: string;
  /** null renders the row as an un-clickable placeholder. */
  href: string | null;
  icon: 'email' | 'github' | 'linkedin' | 'link';
}
