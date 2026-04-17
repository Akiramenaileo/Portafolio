import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + project.images.length) % project.images.length), [project.images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % project.images.length), [project.images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0d0d0d',
          border: '1px solid #1c1c1c',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '860px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
        }}
      >
        {/* Image area */}
        <div style={{ position: 'relative', background: '#080808', aspectRatio: '16/9', flexShrink: 0 }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={project.images[current]}
              alt={`${project.title} ${current + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </AnimatePresence>

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button onClick={prev} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Dots */}
          {project.images.length > 1 && (
            <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
              {project.images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? '#60A5FA' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }} />
              ))}
            </div>
          )}

          {/* Counter */}
          <div style={{ position: 'absolute', top: '12px', left: '12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '6px' }}>
            {current + 1} / {project.images.length}
          </div>

          {/* Close */}
          <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={15} />
          </button>
        </div>

        {/* Info */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff', marginBottom: '8px' }}>{project.title}</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '16px' }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {project.tags.map((tag) => <span key={tag} className="tech-badge">{tag}</span>)}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: '10px', borderRadius: '10px', background: '#161616', border: '1px solid #2a2a2a', color: '#888', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#60A5FA'; el.style.color = '#60A5FA' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#2a2a2a'; el.style.color = '#888' }}
            ><GithubIcon size={13} /> GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: '10px', borderRadius: '10px', background: '#60A5FA', border: 'none', color: '#080808', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontWeight: 700, transition: 'opacity 0.2s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            ><ExternalLink size={13} /> Ver Demo</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const hasImages = project.images.length > 0
  const isComingSoon = !!project.comingSoon
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariants}
      className="project-card"
      onClick={isComingSoon ? undefined : onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        cursor: isComingSoon ? 'default' : 'pointer',
        transform: hovered && !isComingSoon ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered && !isComingSoon ? '0 12px 40px rgba(96,165,250,0.08)' : 'none',
        borderColor: hovered && !isComingSoon ? '#2a2a2a' : '#1c1c1c',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
    >
      {/* Image / Placeholder */}
      <div style={{ height: '180px', background: 'linear-gradient(135deg, #161616, #1a1a1a)', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        {hasImages ? (
          <>
            <img
              src={project.images[0]}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
            />
            {/* Click hint overlay */}
            <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s ease' }}>
              {hovered && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '10px', padding: '8px 14px', color: '#60A5FA', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}>
                  <Images size={13} /> Ver imágenes
                </div>
              )}
            </div>
            {/* Image count badge */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '3px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#aaa' }}>
              {project.images.length} fotos
            </div>
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'Raleway, sans-serif', fontSize: '40px', fontWeight: 800, color: '#1e1e1e', letterSpacing: '-0.02em' }}>
              {String(project.id).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#333', textTransform: 'uppercase' }}>Próximamente</span>
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: hovered && !isComingSoon ? '100%' : '40px', height: '2px', background: '#60A5FA', transition: 'width 0.4s ease' }} />
      </div>

      {/* Content */}
      {!isComingSoon && (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', marginBottom: '8px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 'clamp(13px, 0.9vw, 15px)', color: '#666', lineHeight: 1.65, marginBottom: '16px', flex: 1 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {project.tags.map((tag) => <span key={tag} className="tech-badge">{tag}</span>)}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#161616', border: '1px solid #2a2a2a', color: '#888', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#60A5FA'; el.style.color = '#60A5FA' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#2a2a2a'; el.style.color = '#888' }}
            ><GithubIcon size={13} /> GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#161616', border: '1px solid #2a2a2a', color: '#888', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#60A5FA'; el.style.color = '#60A5FA' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#2a2a2a'; el.style.color = '#888' }}
            ><ExternalLink size={13} /> Ver Demo</a>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" style={{ padding: '64px 48px', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="tag-badge"><span>→</span> Proyectos</span>
          </div>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 54px)', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Mis<br /><span style={{ color: '#60A5FA' }}>Proyectos</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}
        >
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
