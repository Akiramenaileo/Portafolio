import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  isLoading: boolean
  name: string
}

export default function LoadingScreen({ isLoading, name }: LoadingScreenProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0a0a0a',
            zIndex: 9998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Initials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: '#60A5FA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 800,
                fontSize: '28px',
                color: '#0a0a0a',
                letterSpacing: '-0.02em',
              }}
            >
              {initials}
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.35 } }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: '#444',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Cargando portafolio...
          </motion.p>

          {/* Progress bar */}
          <motion.div
            style={{
              width: '120px',
              height: '1px',
              background: '#1e1e1e',
              borderRadius: '1px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%', transition: { duration: 1.4, delay: 0.4, ease: 'easeInOut' } }}
              style={{ height: '100%', background: '#60A5FA' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
