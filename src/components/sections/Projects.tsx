import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../SocialIcons'
import { data } from '../../data/portfolio'
import type { Project } from '../../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

function ProjectCard({ project }: { project: Project }) {
  const hasImage = !!project.image

  return (
    <motion.div
      variants={cardVariants}
      className="project-card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Image / Placeholder */}
      <div
        style={{
          height: '180px',
          background: hasImage ? undefined : 'linear-gradient(135deg, #161616, #1a1a1a)',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '48px',
                fontWeight: 800,
                color: '#2a2a2a',
                letterSpacing: '-0.02em',
              }}
            >
              {String(project.id).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Yellow accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '2px',
            background: '#60A5FA',
            transition: 'width 0.3s ease',
          }}
          className="card-line"
        />
      </div>

      {/* Content */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#ffffff',
            marginBottom: '8px',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 'clamp(13px, 0.9vw, 15px)',
            color: '#666',
            lineHeight: 1.65,
            marginBottom: '16px',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '10px',
              background: '#161616',
              border: '1px solid #2a2a2a',
              color: '#888',
              fontSize: '12px',
              fontFamily: 'JetBrains Mono, monospace',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#60A5FA'
              el.style.color = '#60A5FA'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#2a2a2a'
              el.style.color = '#888'
            }}
          >
            <GithubIcon size={13} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '10px',
              background: '#161616',
              border: '1px solid #2a2a2a',
              color: '#888',
              fontSize: '12px',
              fontFamily: 'JetBrains Mono, monospace',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#60A5FA'
              el.style.color = '#60A5FA'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#2a2a2a'
              el.style.color = '#888'
            }}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      style={{ padding: '64px 48px', borderTop: '1px solid #141414' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '16px' }}>
          <span className="tag-badge">
            <span>→</span>
            Projects
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(30px, 4vw, 54px)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          My Featured
          <br />
          <span style={{ color: '#60A5FA' }}>Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
      </div>
    </section>
  )
}
