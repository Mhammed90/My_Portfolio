import { useState, type FormEvent, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownToLine,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Braces,
  Check,
  Code2,
  Database,
  GraduationCap,
  Github,
  Languages,
  Menu,
  ShieldCheck,
  Star,
  Trophy,
  Wrench,
  X,
} from 'lucide-react'
import { siCodeforces, siLeetcode } from 'simple-icons'
import {
  achievements,
  educationEntry,
  navigation,
  programmingPlatforms,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolio'

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: {
  eyebrow?: string
  title: string
  description: string
  number?: string
}) {
  return (
    <div className="section-heading">
      <div>
        {number && eyebrow && <p className="eyebrow"><span>{number}</span> / {eyebrow}</p>}
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      <span className="heading-mark" aria-hidden="true"><ArrowDownRight size={22} /></span>
    </div>
  )
}

function ContactIcon({ name }: { name: 'email' | 'github' | 'linkedin' | 'whatsapp' }) {
  if (name === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 8.1L3.5 7h17L12 13.1Zm-9 4.4 6.8-5.3L12 14l1.2-1.8L20 17.5H3Z" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.72 1.26 3.39.96.1-.75.4-1.26.74-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.05.78 2.12v3.15c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 3.6A11.7 11.7 0 0 0 2 17.7L.5 23.5l6-1.6a11.7 11.7 0 0 0 14-18.3ZM12 21a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.5 1 .9-3.4-.2-.4A9.7 9.7 0 1 1 12 21Z" fill="currentColor" />
      <path d="M16.8 13.9c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-.9-2.2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5 .8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" fill="currentColor" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Mohamed Abdalkreem home">
        <span className="wordmark-icon"><Braces size={20} /></span>
        <span>{profile.name}</span>
      </a>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a
          className="nav-resume"
          href={profile.resumePath}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume <ArrowDownToLine size={14} />
        </a>
      </nav>
      <a className="header-availability" href="#contact">
        <span className="availability-dot" /> Let’s talk
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  )
}

function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(Boolean(profile.photoPath))

  return (
    <section className="hero section-wrap">
      <Reveal className="hero-portrait">
        <div className="portrait-frame">
          {photoAvailable ? (
            <img
              className="portrait-image"
              src={profile.photoPath}
              alt={profile.name}
              onError={() => setPhotoAvailable(false)}
            />
          ) : (
            <div className="portrait-placeholder">
              <div className="portrait-monogram">MA<span>.</span></div>
            </div>
          )}
        </div>
      </Reveal>
      <div className="hero-copy">
        <Reveal>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-projects" href="#projects">Explore My Projects <ArrowRight size={15} /></a>
            <a className="button button-contact" href="#contact">Get in Touch <ArrowUpRight size={15} /></a>
            <a className="button button-resume" href={profile.resumePath} target="_blank" rel="noreferrer">
              Resume <ArrowDownToLine size={14} />
            </a>
          </div>
          <div className="hero-socials" aria-label="Contact links">
            <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title={profile.email}>
              <ContactIcon name="email" />
            </a>
            {socialLinks.filter(({ label }) => label === 'GitHub' || label === 'LinkedIn').map(({ label, href }) => {
              const name = label === 'GitHub' ? 'github' : 'linkedin'
              return <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} key={label}><ContactIcon name={name} /></a>
            })}
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp +${profile.whatsapp}`} title={`WhatsApp +${profile.whatsapp}`}>
              <ContactIcon name="whatsapp" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section-wrap content-section about-section">
      <Reveal className="about-card">
        <h2>About Me</h2>
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>
    </section>
  )
}

function Education() {
  return (
    <section className="section-wrap content-section education-section" id="education">
      <Reveal>
        <div className="education-heading">
          <h2>Academic Journey</h2>
        </div>
      </Reveal>
      <Reveal>
        <article className="education-card">
          <div className="education-card-heading">
            <span className="education-degree-icon"><GraduationCap size={30} /></span>
            <div className="education-degree">
              <h3>{educationEntry.degree}</h3>
              <p>{educationEntry.institution}</p>
            </div>
            <span className="education-completion">{educationEntry.completion}</span>
          </div>
          <div className="education-details">
            <div className="education-detail">
              <Award size={20} aria-hidden="true" />
              <div><strong>Overall Grade</strong><span>{educationEntry.overallGrade}</span></div>
            </div>
            <div className="education-detail">
              <Star size={20} aria-hidden="true" />
              <div><strong>Project Grade</strong><span>{educationEntry.projectGrade}</span></div>
            </div>
            <div className="education-detail">
              <Award size={20} aria-hidden="true" />
              <div><strong>GPA</strong><span>{educationEntry.gpa}</span></div>
            </div>
            <div className="education-detail education-project">
              <Code2 size={20} aria-hidden="true" />
              <div>
                <strong>Graduation Project</strong>
                <a href={educationEntry.graduationProject.href} target="_blank" rel="noreferrer">
                  {educationEntry.graduationProject.name}<ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  )
}

function Skills() {
  const skillIcons = {
    'Programming Languages': Code2,
    Frameworks: Boxes,
    'Databases & ORMs': Database,
    Technologies: ShieldCheck,
    Tools: Wrench,
    Languages,
  }

  return (
    <section className="section-wrap content-section skills-section" id="skills">
      <Reveal><SectionHeading title="Skills" description="The tools and technologies I use to build reliable backend applications." /></Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const SkillIcon = skillIcons[group.category]
          return (
            <Reveal key={group.category} delay={index * 0.04}>
              <article className={`skill-category skill-category-${index + 1}`}>
                <div className="skill-category-top">
                  <span className="skill-icon"><SkillIcon size={18} strokeWidth={1.8} /></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{group.category}</h3>
                <div className="tag-list skill-tags">
                  {group.skills.map((skill) => <span className="tag skill-tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-top">
        <span className="project-glyph"><Braces size={19} /></span>
      </div>
      <span className="project-category">{project.category}</span>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-features">
        {project.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}
      </ul>
      <div className="project-card-bottom">
        <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            <Github size={15} /> Repository <ArrowUpRight size={14} />
          </a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">Live demo <ArrowUpRight size={14} /></a>}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="section-wrap content-section projects-section" id="projects">
      <Reveal><div className="projects-heading"><h2>Projects</h2></div></Reveal>
      <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.number} delay={index * 0.07}><ProjectCard project={project} /></Reveal>)}</div>
      <p className="projects-note"><span className="availability-dot" /> Project work and learning—no employment claims.</p>
    </section>
  )
}

function PlatformIcon({ name }: { name: string }) {
  if (name === 'leetcode') {
    return <svg className="platform-brand-logo" viewBox="0 0 24 24" aria-hidden="true"><path d={siLeetcode.path} /></svg>
  }
  if (name === 'codeforces') {
    return <svg className="platform-brand-logo" viewBox="0 0 24 24" aria-hidden="true"><path d={siCodeforces.path} /></svg>
  }
  if (name === 'atcoder') {
    return <Code2 className="platform-line-icon" aria-hidden="true" strokeWidth={2} />
  }
  return <Trophy className="platform-line-icon" aria-hidden="true" strokeWidth={1.8} />
}

function CompetitiveProgramming() {
  return (
    <section className="section-wrap content-section cp-section" id="problem-solving">
      <Reveal>
        <div className="achievement-heading">
          <h2>Achievements</h2>
          <p>Milestones from my competitive programming journey.</p>
        </div>
      </Reveal>
      <Reveal className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card" key={achievement.label}>
            <h3>{achievement.label}</h3>
            <strong>{achievement.value}</strong>
            <p>{achievement.detail}</p>
          </article>
        ))}
      </Reveal>
      <Reveal className="platform-grid" delay={0.08}>
        {programmingPlatforms.map((platform) => (
          <a className={`platform-card platform-card-${platform.icon}`} href={platform.href} target="_blank" rel="noreferrer" key={platform.name}>
            <span className={`platform-icon platform-icon-${platform.icon}`}><PlatformIcon name={platform.icon} /></span>
            <span className="platform-info">
              <strong>{platform.name}</strong>
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  )
}

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!profile.contactFormEndpoint) {
      setSubmissionStatus('error')
      setSubmissionMessage('Contact form is not configured yet. Add your Formspree endpoint to .env.local to enable sending.')
      return
    }

    const form = event.currentTarget
    const message = Object.fromEntries(new FormData(form).entries())
    setSubmissionStatus('sending')
    setSubmissionMessage('')

    try {
      const response = await fetch(profile.contactFormEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      })

      if (!response.ok) {
        console.error('Contact form submission was rejected by Formspree.', response.status)
        setSubmissionStatus('error')
        setSubmissionMessage('Your message could not be sent. Please try again or email me directly.')
        return
      }

      form.reset()
      setSubmissionStatus('success')
      setSubmissionMessage('Your message was sent. Thank you for reaching out!')
    } catch (error) {
      console.error('Contact form submission failed.', error)
      setSubmissionStatus('error')
      setSubmissionMessage('We could not reach the contact service. Check your connection or email me directly.')
    }
  }

  return (
    <section className="section-wrap content-section contact-section" id="contact">
      <Reveal>
        <div className="contact-heading">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out for questions, opportunities, or collaborations. I'm always happy to connect and exchange ideas.</p>
        </div>
      </Reveal>
      <Reveal className="contact-form-wrap" delay={0.08}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label><span className="contact-sr-only">Your Name</span><input name="name" type="text" autoComplete="name" placeholder="Your Name" required /></label>
          <label><span className="contact-sr-only">Your Email</span><input name="email" type="email" autoComplete="email" placeholder="Your Email" required /></label>
          <label><span className="contact-sr-only">Your Message</span><textarea name="message" rows={4} placeholder="Your Message" required /></label>
          <button type="submit" className="button button-primary form-submit" disabled={submissionStatus === 'sending' || !profile.contactFormEndpoint}>
            {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {submissionMessage ? (
            <p className={`form-notice${submissionStatus === 'error' ? ' form-notice-error' : ''}`} role="status">{submissionMessage}</p>
          ) : !profile.contactFormEndpoint ? (
            <p className="form-footnote">Formspree setup required before messages can be sent. You can email me directly at {profile.email}.</p>
          ) : null}
        </form>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="contact-socials" aria-label="Contact links">
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title={profile.email}>
            <ContactIcon name="email" />
          </a>
          {socialLinks.filter(({ label }) => label === 'GitHub' || label === 'LinkedIn').map(({ label, href }) => {
            const name = label === 'GitHub' ? 'github' : 'linkedin'
            return <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} key={label}><ContactIcon name={name} /></a>
          })}
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp +${profile.whatsapp}`} title={`WhatsApp +${profile.whatsapp}`}>
            <ContactIcon name="whatsapp" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Header />
      <main className="min-h-screen" id="home">
        <section className="about-page-section" id="about">
          <Hero />
          <About />
        </section>
        <Education />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
