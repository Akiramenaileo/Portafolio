import { Home, User, FolderOpen, Mail, FileText } from 'lucide-react'

interface RightNavProps {
  activeSection: string
  onNavigate: (id: string) => void
}

const navItems = [
  { id: 'introduction', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

export default function RightNav({ activeSection, onNavigate }: RightNavProps) {
  return (
    <nav
      style={{
        width: '64px',
        minWidth: '64px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '20px 10px',
        borderLeft: '1px solid #1a1a1a',
      }}
    >
      {/* Decorative dot */}
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#60A5FA',
          marginBottom: '12px',
          boxShadow: '0 0 8px rgba(96, 165, 250, 0.35)',
        }}
      />

      {navItems.map(({ id, icon: Icon, label }) => {
        const isActive = activeSection === id
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            aria-label={label}
            title={label}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isActive ? 'rgba(96, 165, 250, 0.08)' : 'transparent',
              border: `1px solid ${isActive ? 'rgba(96, 165, 250, 0.25)' : 'transparent'}`,
              color: isActive ? '#60A5FA' : '#444',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                const el = e.currentTarget as HTMLButtonElement
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.color = '#888'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                const el = e.currentTarget as HTMLButtonElement
                el.style.background = 'transparent'
                el.style.color = '#444'
              }
            }}
          >
            <Icon size={16} />
          </button>
        )
      })}

      {/* Bottom line */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #2a2a2a, transparent)',
        }}
      />
    </nav>
  )
}
