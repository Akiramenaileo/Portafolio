import { data } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './SocialIcons'

interface SidebarProps {
  mobile?: boolean
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontSize: '8px',
  fontWeight: 600,
  color: '#999999',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '5px',
  textAlign: 'center',
}

const socialLinkBase: React.CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '9px',
  background: '#141414',
  border: '1px solid #222',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#555',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
}

export default function Sidebar({ mobile = false }: SidebarProps) {
  const socialLinks = [
    { icon: GithubIcon, href: data.social.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: data.social.linkedin, label: 'LinkedIn' },
  ]

  // ── Mobile: ambas cards en fila, luego apiladas en pantallas muy chicas
  if (mobile) {
    return (
      <div
        style={{
          width: '100%',
          padding: '20px 16px 16px',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          borderBottom: '1px solid #161616',
        }}
      >
        {/* Card 1 — Perfil (mobile) */}
        <div
          className="sidebar-card"
          style={{ flex: '1', minWidth: '240px', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '14px', color: '#fff', textAlign: 'center', marginBottom: '14px' }}>
            {data.name}
          </p>

          <div style={{ width: '160px', height: '210px', borderRadius: '12px', overflow: 'hidden', background: '#181818', border: '1px solid #242424', marginBottom: '14px', flexShrink: 0 }}>
            <img src="/profile.jpg" alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={(e) => {
                const p = (e.currentTarget as HTMLImageElement).parentElement
                if (!p) return
                e.currentTarget.style.display = 'none'
                p.style.display = 'flex'; p.style.alignItems = 'center'; p.style.justifyContent = 'center'
                p.innerHTML = `<span style="font-family:Raleway,sans-serif;font-size:36px;font-weight:900;color:#2a2a2a">${data.name.split(' ').map((n: string) => n[0]).join('')}</span>`
              }}
            />
          </div>

          <div style={{ width: '100%', textAlign: 'center', marginBottom: '8px' }}>
            <p style={labelStyle}>Specialization</p>
            <p style={{ fontSize: '11px', color: '#ccc', fontWeight: 500, textAlign: 'center' }}>{data.tagline}</p>
          </div>

          <div style={{ width: '100%', height: '1px', background: '#1a1a1a', margin: '8px 0' }} />

          <div style={{ width: '100%', textAlign: 'center', marginBottom: '14px' }}>
            <p style={labelStyle}>Based in</p>
            <p style={{ fontSize: '11px', color: '#ccc', fontWeight: 500, textAlign: 'center' }}>{data.location}</p>
          </div>

          <div style={{ display: 'flex', gap: '7px', marginBottom: '14px', justifyContent: 'center' }}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={socialLinkBase}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='#60A5FA'; el.style.color='#60A5FA'; el.style.background='rgba(96,165,250,0.08)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='#222'; el.style.color='#555'; el.style.background='#141414' }}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

          <a href={`mailto:${data.email}`} style={{ width: '100%', padding: '10px', borderRadius: '10px', background: 'transparent', border: '1px solid #2a2a2a', color: '#aaa', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '12px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.25s ease', display: 'block', letterSpacing: '0.04em' }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#60A5FA'; el.style.borderColor='#60A5FA'; el.style.color='#080808' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='transparent'; el.style.borderColor='#2a2a2a'; el.style.color='#aaa' }}
          >
            Let's Work!
          </a>
        </div>

        {/* Card 2 — Skills (mobile) */}
        <div className="sidebar-card" style={{ flex: '1', minWidth: '240px', padding: '16px' }}>
          <p style={{ ...labelStyle, marginBottom: '10px' }}>Technical Skills</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px', justifyContent: 'center' }}>
            {data.skills.technical.map((skill) => (
              <span key={skill} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 9px', borderRadius: '6px', background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.15)', color: '#93C5FD' }}>{skill}</span>
            ))}
          </div>
          <div style={{ width: '100%', height: '1px', background: '#1a1a1a', marginBottom: '12px' }} />
          <p style={{ ...labelStyle, marginBottom: '10px' }}>Soft Skills</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
            {data.skills.soft.map((skill) => (
              <span key={skill} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 9px', borderRadius: '6px', background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.15)', color: '#93C5FD' }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Desktop: sidebar fijo izquierda
  return (
    <aside
      style={{
        width: '300px',
        minWidth: '300px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        gap: '10px',
        borderRight: '1px solid #161616',
        overflowY: 'auto',
      }}
    >
      {/* Card 1: Perfil */}
      <div className="sidebar-card" style={{ padding: '20px 16px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '14px', color: '#ffffff', letterSpacing: '0.01em', textAlign: 'center', marginBottom: '16px', width: '100%' }}>
          {data.name}
        </p>

        <div style={{ width: '200px', height: '260px', borderRadius: '14px', overflow: 'hidden', background: '#181818', border: '1px solid #242424', marginBottom: '18px', flexShrink: 0 }}>
          <img src="/profile.jpg" alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            onError={(e) => {
              const p = (e.currentTarget as HTMLImageElement).parentElement
              if (!p) return
              e.currentTarget.style.display = 'none'
              p.style.display = 'flex'; p.style.alignItems = 'center'; p.style.justifyContent = 'center'
              p.innerHTML = `<span style="font-family:Raleway,sans-serif;font-size:44px;font-weight:900;color:#2a2a2a;letter-spacing:-0.02em">${data.name.split(' ').map((n: string) => n[0]).join('')}</span>`
            }}
          />
        </div>

        <div style={{ width: '100%', marginBottom: '10px', textAlign: 'center' }}>
          <p style={labelStyle}>Specialization</p>
          <p style={{ fontSize: '11.5px', color: '#ccc', lineHeight: 1.4, fontWeight: 500, textAlign: 'center' }}>{data.tagline}</p>
        </div>

        <div style={{ width: '100%', height: '1px', background: '#1a1a1a', margin: '10px 0' }} />

        <div style={{ width: '100%', marginBottom: '16px', textAlign: 'center' }}>
          <p style={labelStyle}>Based in</p>
          <p style={{ fontSize: '11.5px', color: '#ccc', fontWeight: 500, textAlign: 'center' }}>{data.location}</p>
        </div>

        <div style={{ display: 'flex', gap: '7px', marginBottom: '16px', justifyContent: 'center' }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={socialLinkBase}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='#60A5FA'; el.style.color='#60A5FA'; el.style.background='rgba(96,165,250,0.08)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='#222'; el.style.color='#555'; el.style.background='#141414' }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>

        <a href={`mailto:${data.email}`} style={{ width: '100%', padding: '11px', borderRadius: '11px', background: 'transparent', border: '1px solid #2a2a2a', color: '#aaa', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '12px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.25s ease', display: 'block', letterSpacing: '0.04em' }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='#60A5FA'; el.style.borderColor='#60A5FA'; el.style.color='#080808' }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background='transparent'; el.style.borderColor='#2a2a2a'; el.style.color='#aaa' }}
        >
          Let's Work!
        </a>
      </div>

      {/* Card 2: Skills */}
      <div className="sidebar-card" style={{ padding: '16px 16px 18px' }}>
        <p style={{ ...labelStyle, marginBottom: '10px' }}>Technical Skills</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px', justifyContent: 'center' }}>
          {data.skills.technical.map((skill) => (
            <span key={skill} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 9px', borderRadius: '6px', background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.15)', color: '#93C5FD', lineHeight: 1.4 }}>{skill}</span>
          ))}
        </div>
        <div style={{ width: '100%', height: '1px', background: '#1a1a1a', marginBottom: '14px' }} />
        <p style={{ ...labelStyle, marginBottom: '10px' }}>Soft Skills</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
          {data.skills.soft.map((skill) => (
            <span key={skill} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 9px', borderRadius: '6px', background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.15)', color: '#93C5FD', lineHeight: 1.4 }}>{skill}</span>
          ))}
        </div>
      </div>
    </aside>
  )
}
