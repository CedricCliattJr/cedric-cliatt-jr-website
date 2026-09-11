import type { BusinessEngagement } from '../types';

/**
 * Practical, real-world technology work — as opposed to the personal projects
 * in projects.ts.
 *
 * Keep this factual. No metrics, savings figures or outcomes unless you have
 * numbers you're willing to stand behind publicly.
 */
export const businesses: BusinessEngagement[] = [
  {
    id: 'solar-grove-assistance',
    name: 'Solar Grove Assistance',
    role: 'My own business — founder and the person doing the work',
    summary:
      'Practical AI and admin help for small businesses and solo professionals: setting AI tools up around the work a business already does, closing the gaps where information gets retyped between systems, ongoing back-office support, and small custom tools where nothing off the shelf fits. It grew out of the same observation as most of the work below — the hard part is rarely the technology, it is fitting a system to how people already work.',
    focusAreas: [
      'AI workflow setup',
      'Automation and integrations',
      'Admin and back-office support',
      'Custom small tools',
    ],
    tech: ['Astro', 'TypeScript', 'Python', 'Flask', 'SQLite', 'Linux'],
    status: 'Building',
    url: {
      label: 'sg-assistance.com',
      href: 'https://sg-assistance.com',
    },
  },
  {
    id: 'library-on-carson',
    name: 'The Library on Carson',
    role: 'Independent technology and process work',
    summary:
      'Worked on technology and process projects for a bar, focused on inventory and the day-to-day operational workflows around it. The problems here were less about interesting technology and more about fitting a system to how people actually work during a shift — which turned out to be the harder part.',
    focusAreas: [
      'Inventory management',
      'Operational workflows',
      'Data organization',
      'Process improvement',
      'Business tooling',
    ],
    tech: [],
    status: 'Maintained',
    needsDetail:
      'Add the technologies you used once you are happy naming them publicly, and check with the business before publishing anything more specific about their operations.',
  },
];
