import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' as const },
  }),
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      style={{ padding: '64px 48px', borderTop: '1px solid #141414' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="tag-badge">
              <span>→</span>
              Habilidades
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
            Mis Habilidades
            <span style={{ color: '#60A5FA' }}>.</span>
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Technical */}
          <div>
            <h3
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(13px, 0.9vw, 15px)',
                color: '#999999',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Habilidades Técnicas
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.skills.technical.map((skill, i) => (
                <motion.span
                  key={skill}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    background: 'rgba(96,165,250,0.07)',
                    border: '1px solid rgba(96,165,250,0.15)',
                    color: '#93C5FD',
                    lineHeight: 1.4,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Soft */}
          <div>
            <h3
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(13px, 0.9vw, 15px)',
                color: '#999999',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Habilidades Blandas
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.skills.soft.map((skill, i) => (
                <motion.span
                  key={skill}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    background: 'rgba(96,165,250,0.07)',
                    border: '1px solid rgba(96,165,250,0.15)',
                    color: '#93C5FD',
                    lineHeight: 1.4,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
