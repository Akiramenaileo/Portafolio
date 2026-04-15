import { useState, useEffect, useCallback } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import RightNav from './components/RightNav'
import MobileNav from './components/MobileNav'
import LoadingScreen from './components/LoadingScreen'
import Introduction from './components/sections/Introduction'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import { useActiveSection } from './hooks/useActiveSection'
import { useMediaQuery } from './hooks/useMediaQuery'
import { data } from './data/portfolio'

const SECTION_IDS = ['introduction', 'projects', 'resume', 'tools', 'skills', 'contact']

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleNavigate = useCallback((id: string) => {
    // Mobile: window scroll | Desktop: .main-scroll container
    const target = document.getElementById(id)
    if (!target) return

    if (isMobile) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 16
      window.scrollTo({ top: offset, behavior: 'smooth' })
    } else {
      const scrollContainer = document.querySelector('.main-scroll')
      if (!scrollContainer) return
      const containerTop = scrollContainer.getBoundingClientRect().top
      const targetTop = target.getBoundingClientRect().top
      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + (targetTop - containerTop) - 24,
        behavior: 'smooth',
      })
    }
  }, [isMobile])

  const footer = (
    <footer
      style={{
        padding: '24px max(24px, calc((100% - 860px) / 2))',
        borderTop: '1px solid #141414',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: isMobile ? '60px' : '0',
      }}
    >
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#333' }}>
        © {new Date().getFullYear()} {data.name}. Todos los derechos reservados.
      </span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#333' }}>
        Hecho con React + Tailwind + Framer Motion
      </span>
    </footer>
  )

  return (
    <>
      <div className="grain" />
      <LoadingScreen isLoading={isLoading} name={data.name} />

      {isMobile ? (
        /* ── Mobile layout: todo en flujo vertical ── */
        <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
          <main>
            <Introduction isLoading={isLoading} />
            <Sidebar mobile />
            <Projects />
            <Resume />
            <Skills />
            <Contact />
            {footer}
          </main>
          <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
        </div>
      ) : (
        /* ── Desktop layout: sidebar fijo + scroll + right nav ── */
        <div style={{ display: 'flex', height: '100vh', width: '100%', overflow: 'hidden' }}>
          <Sidebar />
          <main className="main-scroll" style={{ flex: 1 }}>
            <Introduction isLoading={isLoading} />
            <Projects />
            <Resume />
            <Skills />
            <Contact />
            {footer}
          </main>
          <RightNav activeSection={activeSection} onNavigate={handleNavigate} />
        </div>
      )}
    </>
  )
}
