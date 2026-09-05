import type { JourneyMilestone } from '../types';

/**
 * Professional development timeline.
 *
 * `period` is free text — '2024', 'In progress' and 'Ongoing' all work. Order
 * the array the way you want it read; nothing is sorted automatically.
 */
export const journey: JourneyMilestone[] = [
  {
    period: 'TODO: add year',
    title: 'Started programming',
    detail:
      'First real exposure to writing code — Java, C++ and C#, and the fundamentals underneath them: variables, control flow, functions, and how a program is actually structured.',
  },
  {
    period: 'TODO: add year',
    title: 'Built the first home lab',
    detail:
      'A spare machine turned into a server. Learning Linux by having to keep something running rather than by following along with a lesson.',
  },
  {
    period: 'TODO: add year',
    title: 'Technology work for a local business',
    detail:
      'Applied the same skills to a real operation — inventory and workflow problems at The Library on Carson, where the constraints came from how a business actually runs.',
  },
  {
    period: 'In progress',
    title: 'B.S. Cloud & Network Engineering — WGU',
    detail:
      'Currently pursuing the degree with an AWS specialization, covering cloud platforms, networking, systems and security.',
    current: true,
  },
  {
    period: 'Ongoing',
    title: 'Building and running my own systems',
    detail:
      'A growing set of self-hosted services and small applications, maintained rather than abandoned — which is where most of the actual learning happens.',
    current: true,
  },
  {
    period: 'Next',
    title: 'Cloud and network engineering, professionally',
    detail:
      'Working toward a role where I can do this at scale: cloud infrastructure, networking and the automation that holds it together.',
  },
];
