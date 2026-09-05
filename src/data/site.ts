import type { ContactLink } from '../types';

/** Identity, metadata and navigation. Edit this first. */
export const site = {
  name: 'Cedric Cliatt Jr.',
  /** Used in the browser tab and search results. */
  title: 'Cedric Cliatt Jr. — Cloud & Network Engineering',
  role: 'Cloud & Network Engineering Student',
  /** Meta description. Keep it under ~160 characters. */
  description:
    'Cloud and network engineering student building real infrastructure, self-hosted services and practical business tools.',
  location: 'TODO: add your city/state, or delete this line',
  /** Shown in the hero as a small availability line. Set to null to hide. */
  availability: 'Open to internships and entry-level cloud/IT roles',
} as const;

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Now', href: '#now' },
  { label: 'Business', href: '#business' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const;

/**
 * Contact links.
 *
 * These are all placeholders on purpose — nothing real ships until you fill it
 * in. Set `href` to a real URL (or a mailto:) and update `value` to match.
 * Delete any row you don't want.
 */
export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'TODO: add the address you want people to use',
    href: null,
    icon: 'email',
  },
  {
    label: 'GitHub',
    value: 'TODO: add your GitHub profile URL',
    href: null,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'TODO: add your LinkedIn profile URL',
    href: null,
    icon: 'linkedin',
  },
  {
    label: 'Résumé',
    value: 'TODO: drop a PDF in public/ and link it here',
    href: null,
    icon: 'link',
  },
];
