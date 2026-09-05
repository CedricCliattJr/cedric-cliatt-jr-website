import type { NowItem } from '../types';

/**
 * "What I'm working on now."
 *
 * This is the section that makes the site look alive, so it's the one worth
 * updating most often — treat it like a changelog for yourself. Reorder freely;
 * it renders in the order listed.
 */
export const nowUpdated = 'TODO: set this to the date you last edited this file';

export const nowItems: NowItem[] = [
  {
    title: 'AWS services and architecture',
    detail:
      'Working through the AWS specialization in my degree — core services, how they fit together, and building small things on them rather than only reading about them.',
    status: 'Learning',
  },
  {
    title: 'Networking fundamentals',
    detail:
      'Routing, switching, DNS and firewalls, reinforced by keeping my own network segmented and working.',
    status: 'Learning',
  },
  {
    title: 'Linux administration',
    detail:
      'Running Ubuntu Server day to day — service management, permissions, storage layout and backups.',
    status: 'Building',
  },
  {
    title: 'Self-hosted application stack',
    detail:
      'Adding to the set of small Flask apps running on my home lab, and improving how they are deployed and backed up.',
    status: 'Building',
  },
  {
    title: 'Automation',
    detail:
      'Replacing the manual steps in my own workflows with scripts — deployments, backups, and routine maintenance.',
    status: 'Experimenting',
  },
  {
    title: 'AI-assisted development',
    detail:
      'Using AI coding tools as part of how I build, and learning where they help and where they need to be checked.',
    status: 'Experimenting',
  },
  {
    title: 'Web development',
    detail:
      'Front-end work for my own tools, and static site tooling — this site included.',
    status: 'Building',
  },
];
