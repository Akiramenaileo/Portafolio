import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../../data/portfolio'
import type { EducationItem, ExperienceItem } from '../../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.1 },
  }),
}

function TimelineItem({
  year,
  title,
  subtitle,
  description,
  index,
  isInView,
}: {
  year: string
  title: string
  subtitle: string
  description: string
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ display: 'flex', gap: '16px', paddingBottom: '28px', position: 'relative' }}
    >
      {/* Timeline visual */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="timeline-dot" />
        <div
          style={{
            flex: 1,
            width: '1px',
            background: 'linear-gradient(to bottom, #2a2a2a, transparent)',
            marginTop: '8px',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: '4px' }}>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: '#60A5FA',
            letterSpacing: '0.06em',
            display: 'block',
            marginBottom: '6px',
          }}
        >
          {year}
        </span>
        <h4
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#ffffff',
            marginBottom: '2px',
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#555',
            marginBottom: '8px',
          }}
        >
          {subtitle}
        </p>
        <p
          style={{
            fontSize: 'clamp(13px, 0.9vw, 15px)',
            color: '#666',
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const toolsRef = useRef(null)
  const toolsInView = useInView(toolsRef, { once: true, margin: '-60px' })

  return (
    <section
      id="resume"
      style={{ padding: '64px 48px', borderTop: '1px solid #141414' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <span className="tag-badge">
            <span>→</span>
            Resume
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
          Education &amp;
          <br />
          <span style={{ color: '#60A5FA' }}>Work Experience</span>
        </h2>
      </div>

      {/* Two columns: Education + Experience */}
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}
      >
        {/* Education */}
        <div>
          <h3
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 0.9vw, 15px)',
              color: '#999999',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            Education
          </h3>
          {data.education.map((item: EducationItem, i: number) => (
            <TimelineItem
              key={i}
              year={item.year}
              title={item.degree}
              subtitle={item.institution}
              description={item.description}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Experience */}
        <div>
          <h3
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(13px, 0.9vw, 15px)',
              color: '#999999',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            Work Experience
          </h3>
          {data.experience.map((item: ExperienceItem, i: number) => (
            <TimelineItem
              key={i}
              year={item.year}
              title={item.role}
              subtitle={item.company}
              description={item.description}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Tools section */}
      <div ref={toolsRef}>
        <h3
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 800,
            fontSize: '22px',
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '-0.01em',
          }}
        >
          My Favorite Tools
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '12px',
          }}
        >
          {data.tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={toolsInView ? 'visible' : 'hidden'}
              style={{
                padding: '16px 12px',
                background: '#111111',
                border: '1px solid #1e1e1e',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                cursor: 'default',
                transition: 'all 0.2s ease',
              }}
              whileHover={{
                y: -4,
                borderColor: '#2e2e2e',
                transition: { duration: 0.2 },
              }}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                style={{ width: '32px', height: '32px', objectFit: 'contain' }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#666',
                  textAlign: 'center',
                }}
              >
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
