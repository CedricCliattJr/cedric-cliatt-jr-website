import { useEffect, useState } from 'react'
import './App.css'
import { siteContent } from './content/siteContent'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const storedTheme = window.localStorage.getItem('portfolio-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <>
      <header className="top-nav">
        <a className="brand" href="#hero">
          {siteContent.brand}
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle light and dark theme"
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </header>

      <main>
        <section id="hero" className="section hero">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p>{siteContent.hero.description}</p>
          <div className="cta-row">
            {siteContent.hero.ctas.map((cta) => (
              <a key={cta.href} className="button-link" href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          {siteContent.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section id="skills" className="section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {siteContent.skills.map((group) => (
              <article className="card" key={group.category}>
                <h3>{group.category}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {siteContent.projects.map((project) => (
              <article className="card project-card" key={project.name}>
                <div className="project-head">
                  <h3>{project.name}</h3>
                  <div className="badge-row">
                    <span className={`status status-${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                    {project.featured ? (
                      <span className="status status-featured">Featured</span>
                    ) : null}
                  </div>
                </div>
                <p>{project.description}</p>
                <p className="meta-line">Category: {project.category}</p>
                <ul className="tag-list">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <p className="meta-line">{project.image}</p>
                <div className="link-row">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : (
                    <span className="meta-line">TODO: Add GitHub URL</span>
                  )}
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <span className="meta-line">TODO: Add live URL</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="learning" className="section">
          <h2>Current Work & Learning</h2>
          <ul className="timeline">
            {siteContent.currentLearning.map((entry) => (
              <li key={entry.title}>
                <p className="timeline-head">
                  <span>{entry.title}</span>
                  <span className={`status status-${entry.status.toLowerCase()}`}>
                    {entry.status}
                  </span>
                </p>
                <p>{entry.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="business" className="section">
          <h2>Businesses & Real-World Projects</h2>
          {siteContent.businessProjects.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="tag-list">
            {siteContent.businessProjects.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>

        <section id="journey" className="section">
          <h2>Professional Development Journey</h2>
          <ol className="timeline">
            {siteContent.journey.map((milestone) => (
              <li key={milestone.title}>
                <p className="timeline-head">
                  <span>{milestone.title}</span>
                  <span className="meta-line">{milestone.period}</span>
                </p>
                <p>{milestone.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>{siteContent.contact.description}</p>
          <ul className="contact-list">
            {siteContent.contact.links.map((link) => (
              <li key={link.label}>
                <span>{link.label}:</span>{' '}
                {link.href ? <a href={link.href}>{link.value}</a> : link.value}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>
          {siteContent.brand} · Built with React + TypeScript · Update content in{' '}
          <code>src/content/siteContent.ts</code>
        </p>
      </footer>
    </>
  )
}

export default App
