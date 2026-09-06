/** The About section. Paragraphs render in order. */
export const about = {
  heading: 'About',
  lead: 'I learn by building things that have to actually work.',
  paragraphs: [
    "I'm working toward a Bachelor of Science in Cloud & Network Engineering at Western Governors University, with an AWS specialization. Most of what I know outside of coursework came from picking a problem I actually had and building something to solve it.",
    "That pattern repeats: a home lab that started as one spare machine and turned into a small set of self-hosted services I depend on daily; a bar that needed a better handle on its inventory, so I built tooling for it; personal apps for budgeting and habits because the off-the-shelf versions never fit. Each one taught me more than a tutorial would have.",
    "My interests sit where infrastructure meets software — cloud platforms, networking, Linux and Windows administration, automation, and writing the code that ties them together. I'm comfortable with programming fundamentals in Java, C++ and C#, and I use those same fundamentals in the Python and web work my own projects need.",
    "I'm early in this career and I'd rather be accurate about that than oversell it. What I can point to is a habit of shipping working systems, running them, and fixing them when they break.",
  ],
  /** Small facts rendered as a definition list beside the prose. */
  facts: [
    { label: 'Studying', value: 'B.S. Cloud & Network Engineering (AWS specialization), WGU' },
    { label: 'Focus', value: 'Cloud infrastructure, networking, Linux, automation' },
    { label: 'Building with', value: 'Python, Flask, SQLite, Linux, Git' },
    { label: 'Currently', value: 'Running a self-hosted home lab and shipping small tools on it' },
  ],
} as const;
