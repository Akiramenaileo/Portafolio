import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { data } from '../../data/portfolio'
import { useCounter } from '../../hooks/useCounter'

function StatCard({
  value,
  suffix,
  label,
  start,
}: {
  value: number
  suffix: string
  label: string
  start: boolean
}) {
  const count = useCounter(value, 1400, start)
  return (
    <div
      style={{
        flex: 1,
        minWidth: '160px',
        padding: '20px 20px',
        background: '#111111',
        border: '1px solid #1e1e1e',
        borderRadius: '16px',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#2e2e2e'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'
      }}
    >
      <div
        style={{
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(36px, 3vw, 52px)',
          color: '#ffffff',
          lineHeight: 1,
          marginBottom: '6px',
        }}
      >
        {count}
        <span style={{ color: '#60A5FA' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: 'clamp(11px, 0.8vw, 13px)',
          fontWeight: 500,
          color: '#666',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Introduction() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="introduction"
      style={{ padding: '64px 48px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section badge */}
        <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
          <span className="tag-badge">
            <span>→</span>
            Introduction
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 78px)',
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: '28px',
            letterSpacing: '-0.02em',
          }}
        >
          {`I'm Leandro`}
          <br />
          <span style={{ color: '#d0d0d0', fontWeight: 700 }}>Software Developer</span>
          <span style={{ color: '#60A5FA' }}>.</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(15px, 1vw, 17px)',
            color: '#777',
            lineHeight: 1.75,
            marginBottom: '36px',
            maxWidth: '640px',
          }}
        >
          {data.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '12px', marginBottom: '56px', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              padding: '12px 22px',
              borderRadius: '12px',
              background: '#60A5FA',
              color: '#ffffff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 8px 24px rgba(96,165,250,0.25)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
            }}
          >
            My Projects <ArrowRight size={14} />
          </a>
          <a
            href={data.cvUrl}
            download
            style={{
              padding: '12px 22px',
              borderRadius: '12px',
              background: 'transparent',
              color: '#aaa',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #2a2a2a',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#3e3e3e'
              el.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#2a2a2a'
              el.style.color = '#aaa'
            }}
          >
            <Download size={14} /> Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={itemVariants}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          {data.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={statsVisible}
            />
          ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  )
}
