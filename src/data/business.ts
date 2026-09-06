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
