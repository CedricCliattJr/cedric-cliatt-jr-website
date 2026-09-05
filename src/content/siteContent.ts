export type ProjectStatus = 'Learning' | 'Building' | 'Experimenting' | 'Completed'

type Cta = { label: string; href: string }
type SkillGroup = { category: string; items: string[] }
type Project = {
  name: string
  description: string
  technologies: string[]
  category: string
  status: ProjectStatus
  githubUrl: string | null
  liveUrl: string | null
  image: string
  featured: boolean
}
type LearningItem = { title: string; status: ProjectStatus; note: string }
type JourneyItem = { title: string; period: string; note: string }
type ContactLink = { label: string; value: string; href: string | null }

export const siteContent: {
  brand: string
  hero: { eyebrow: string; title: string; description: string; ctas: Cta[] }
  about: string[]
  skills: SkillGroup[]
  projects: Project[]
  currentLearning: LearningItem[]
  businessProjects: { description: string[]; focusAreas: string[] }
  journey: JourneyItem[]
  contact: { description: string; links: ContactLink[] }
} = {
  brand: 'Cedric Cliatt Jr.',
  hero: {
    eyebrow: 'Cloud · Networking · Practical Builds',
    title: 'Cloud & Network Engineering Student Building Real-World Technology',
    description:
      'I build practical software and infrastructure projects across cloud, networking, systems administration, web development, and automation.',
    ctas: [
      { label: 'View My Projects', href: '#projects' },
      { label: 'About Me', href: '#about' },
      { label: 'Contact Me', href: '#contact' },
    ],
  },
  about: [
    'I am pursuing a Bachelor of Science in Cloud & Network Engineering with an AWS specialization, and I enjoy learning by building projects that solve real-world problems.',
    'My interests include cloud infrastructure, networking, cybersecurity, Linux, Windows, DevOps, AI-assisted development, and practical business technology tools.',
    'I am focused on growing into a cloud and network engineering career while continuing to build personal projects and systems that are useful in everyday operations.',
  ],
  skills: [
    { category: 'Cloud', items: ['AWS', 'Cloud infrastructure'] },
    { category: 'Networking', items: ['Networking', 'Network infrastructure'] },
    {
      category: 'Development',
      items: ['Java', 'C++', 'C#', 'HTML/CSS/JavaScript', 'Web development'],
    },
    {
      category: 'Systems',
      items: ['Linux', 'Windows', 'Self-hosted infrastructure'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Microsoft 365', 'AI coding tools'],
    },
  ],
  projects: [
    {
      name: 'Home Lab / Self-Hosted Infrastructure',
      description:
        'Personal lab environment for running and learning from self-hosted services and infrastructure tooling.',
      technologies: ['Linux', 'Networking', 'Self-hosting'],
      category: 'Infrastructure',
      status: 'Building',
      githubUrl: null,
      liveUrl: null,
      image: 'TODO: Add home lab screenshot and architecture notes.',
      featured: true,
    },
    {
      name: 'Business Inventory Application',
      description:
        'Inventory-related tooling for The Library on Carson to support organization and operational processes.',
      technologies: ['Automation', 'Business tooling', 'Data organization'],
      category: 'Business',
      status: 'Experimenting',
      githubUrl: null,
      liveUrl: null,
      image: 'TODO: Add non-sensitive project screenshot and implementation details.',
      featured: true,
    },
    {
      name: 'Personal Budget & Life Management Tools',
      description:
        'Practical tools for personal organization and tracking workflows that can grow into broader business applications.',
      technologies: ['Programming', 'Automation', 'Web development'],
      category: 'Application',
      status: 'Learning',
      githubUrl: null,
      liveUrl: null,
      image: 'TODO: Add project details and screenshots.',
      featured: false,
    },
    {
      name: 'Web Development Projects',
      description:
        'A set of web projects used to improve frontend architecture, responsive design, and maintainable UI patterns.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      status: 'Building',
      githubUrl: null,
      liveUrl: null,
      image: 'TODO: Link repositories or deployed demos.',
      featured: false,
    },
  ],
  currentLearning: [
    {
      title: 'Cloud and networking foundations',
      status: 'Learning',
      note: 'Expanding practical understanding of cloud and network infrastructure.',
    },
    {
      title: 'AWS-focused projects',
      status: 'Building',
      note: 'Applying AWS concepts through hands-on implementation projects.',
    },
    {
      title: 'Linux and automation workflows',
      status: 'Experimenting',
      note: 'Testing scripts and operational workflows to improve reliability.',
    },
    {
      title: 'Home lab infrastructure upgrades',
      status: 'Building',
      note: 'Iterating on self-hosted services and system administration skills.',
    },
    {
      title: 'AI-assisted development',
      status: 'Learning',
      note: 'Using AI tooling to move faster while improving development quality.',
    },
    {
      title: 'New personal software projects',
      status: 'Experimenting',
      note: 'Prototyping useful tools that combine technical depth and business value.',
    },
  ],
  businessProjects: {
    description: [
      'I work on practical technology and process projects that help businesses improve daily operations.',
      'At The Library on Carson, I have contributed to inventory-related systems and process improvements with a focus on useful implementation over unnecessary complexity.',
      'This area highlights technology work aimed at real operational outcomes and day-to-day reliability.',
    ],
    focusAreas: [
      'Inventory management',
      'Operational workflows',
      'Data organization',
      'Business tooling',
      'Automation',
      'Process improvement',
    ],
  },
  journey: [
    {
      title: 'Building IT and programming foundations',
      period: 'Ongoing',
      note: 'Learning core concepts in systems, networking, and programming through project-based practice.',
    },
    {
      title: 'WGU Cloud & Network Engineering degree path',
      period: 'Current',
      note: 'Pursuing a Bachelor of Science with an AWS specialization.',
    },
    {
      title: 'Developing practical systems for business use',
      period: 'Current',
      note: 'Applying technical skills to operational projects and process improvements.',
    },
    {
      title: 'Growing home lab and self-hosted infrastructure',
      period: 'Current',
      note: 'Expanding hands-on infrastructure and administration experience.',
    },
    {
      title: 'Working with AI-assisted development',
      period: 'Current',
      note: 'Exploring better build-and-learn workflows using modern AI coding tools.',
    },
  ],
  contact: {
    description:
      'I am open to discussing projects, collaborations, and opportunities related to cloud, networking, and practical software systems.',
    links: [
      { label: 'Email', value: 'TODO: add professional email', href: null },
      { label: 'GitHub', value: 'TODO: add profile URL', href: null },
      { label: 'LinkedIn', value: 'TODO: add profile URL', href: null },
      { label: 'Other', value: 'TODO: add professional link', href: null },
    ],
  },
}
