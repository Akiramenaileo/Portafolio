import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../SocialIcons'
import { data } from '../../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes conectar EmailJS u otro servicio
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: '#111111',
    border: '1px solid #1e1e1e',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section
      id="contact"
      style={{ padding: '64px 48px 80px', borderTop: '1px solid #141414' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <span className="tag-badge">
            <span>→</span>
            Contacto
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
          Hablemos
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
        {/* Left: Info */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ fontSize: 'clamp(14px, 0.9vw, 16px)', color: '#666', lineHeight: 1.75, marginBottom: '32px' }}
          >
            Busco oportunidades para integrarme a empresas donde pueda aportar valor real. Abierto a propuestas laborales y proyectos de desarrollo.
          </motion.p>

          {[
            { icon: Mail, text: data.email, href: `mailto:${data.email}` },
            { icon: WhatsappIcon, text: data.phone, href: `https://wa.me/${data.phone.replace(/\D/g, '')}` },
            { icon: MapPin, text: data.location, href: '#' },
          ].map(({ icon: Icon, text, href }, i) => (
            <motion.a
              key={text}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
                textDecoration: 'none',
                color: '#888',
                fontSize: '14px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#60A5FA')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#888')}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#111',
                  border: '1px solid #2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={15} />
              </div>
              {text}
            </motion.a>
          ))}

          {/* Social */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ display: 'flex', gap: '10px', marginTop: '24px' }}
          >
            {[
              { icon: GithubIcon, href: data.social.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: data.social.linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: '#111',
                  border: '1px solid #2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  textDecoration: 'none',
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
                  el.style.color = '#666'
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.form
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <div>
            <input
              type="text"
              placeholder="Tu Nombre"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={(e) =>
                ((e.currentTarget as HTMLInputElement).style.borderColor = '#60A5FA')
              }
              onBlur={(e) =>
                ((e.currentTarget as HTMLInputElement).style.borderColor = '#1e1e1e')
              }
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Tu Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              onFocus={(e) =>
                ((e.currentTarget as HTMLInputElement).style.borderColor = '#60A5FA')
              }
              onBlur={(e) =>
                ((e.currentTarget as HTMLInputElement).style.borderColor = '#1e1e1e')
              }
            />
          </div>
          <div>
            <textarea
              placeholder="Tu Mensaje"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              onFocus={(e) =>
                ((e.currentTarget as HTMLTextAreaElement).style.borderColor = '#60A5FA')
              }
              onBlur={(e) =>
                ((e.currentTarget as HTMLTextAreaElement).style.borderColor = '#1e1e1e')
              }
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '13px',
              borderRadius: '12px',
              background: sent ? '#1a2e1a' : '#60A5FA',
              border: sent ? '1px solid #2a4a2a' : 'none',
              color: sent ? '#4ade80' : '#0a0a0a',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
            }}
          >
            {sent ? (
              '✓ ¡Mensaje Enviado!'
            ) : (
              <>
                Enviar Mensaje <Send size={14} />
              </>
            )}
          </button>
        </motion.form>
      </div>
      </div>
    </section>
  )
}
