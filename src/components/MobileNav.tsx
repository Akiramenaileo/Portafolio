import { Home, FolderOpen, FileText, Mail, User } from 'lucide-react'

interface MobileNavProps {
  activeSection: string
  onNavigate: (id: string) => void
}

const navItems = [
  { id: 'introduction', icon: Home, label: 'Inicio' },
  { id: 'about', icon: User, label: 'Sobre mí' },
  { id: 'projects', icon: FolderOpen, label: 'Proyectos' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'contact', icon: Mail, label: 'Contacto' },
]

export default function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        background: '#0e0e0e',
        borderTop: '1px solid #1c1c1c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 100,
      }}
    >
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              aria-label={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 12px',
                color: isActive ? '#60A5FA' : '#444',
                transition: 'color 0.2s ease',
              }}
            >
              <Icon size={18} />
              <span style={{ fontSize: '9px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, letterSpacing: '0.04em' }}>
                {label}
              </span>
            </button>
          )
        })}
    </nav>
  )
}
