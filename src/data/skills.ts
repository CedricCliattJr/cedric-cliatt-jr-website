import type { SkillCategory } from '../types';

/**
 * Skills, grouped so the section stays readable as it grows.
 *
 * These are technologies worked with — not claims of mastery. Add and remove
 * freely; the layout reflows on its own.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    name: 'Cloud',
    blurb: 'The focus of my degree and where most of my study time goes.',
    skills: ['AWS', 'Cloud infrastructure concepts', 'Virtualization', 'Infrastructure fundamentals'],
  },
  {
    id: 'networking',
    name: 'Networking',
    blurb: 'Coursework plus a home network I actually have to keep running.',
    skills: ['TCP/IP fundamentals', 'Routing & switching concepts', 'DNS', 'VPN / overlay networking', 'Firewall rules'],
  },
  {
    id: 'systems',
    name: 'Systems & Infrastructure',
    blurb: 'Day-to-day environments for both study and personal projects.',
    skills: ['Linux (Ubuntu Server)', 'Windows', 'Systems administration', 'Self-hosted services', 'Service management', 'Backups'],
  },
  {
    id: 'development',
    name: 'Development',
    blurb: 'Languages from coursework, and what I reach for when building.',
    skills: ['Java', 'C++', 'C#', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL / SQLite'],
  },
  {
    id: 'web',
    name: 'Web',
    blurb: 'Front-end work for my own projects and internal tools.',
    skills: ['Web development', 'Flask', 'Responsive layout', 'Static site tooling'],
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    blurb: 'What the work runs through.',
    skills: ['Git', 'GitHub', 'Microsoft 365', 'AI-assisted development', 'Command line', 'Documentation'],
  },
];
