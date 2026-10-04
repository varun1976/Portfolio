import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigationData'
import { scrollToSection } from '../../utils/navigation'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const pendingSection = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase()))

    const updateActiveSection = () => {
      const marker = 120

      if (pendingSection.current) {
        const target = document.getElementById(pendingSection.current.toLowerCase())
        const distance = target ? target.getBoundingClientRect().top - marker : 0
        const reachedTarget = pendingSection.current === 'Home'
          ? window.scrollY < 100
          : Math.abs(distance) < 80

        if (!reachedTarget) return
        pendingSection.current = null
      }

      const current = sections
        .filter(Boolean)
        .map((section) => ({ section, distance: section.getBoundingClientRect().top - marker }))
        .filter(({ distance }) => distance <= 0)
        .sort((a, b) => b.distance - a.distance)[0]

      setActiveSection(current?.section.dataset.label || 'Home')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const navigate = (item) => {
    pendingSection.current = item
    setActiveSection(item)
    scrollToSection(item)
    setMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-5 z-30 pointer-events-none"
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto flex min-h-[66px] max-w-[1140px] items-center justify-between rounded-xl bg-[#D96846]/95 px-6 py-2.5 shadow-raised backdrop-blur-md pointer-events-auto max-tablet:mx-4 max-tablet:min-h-[58px] max-tablet:px-4 border border-white/20"
        aria-label="Main navigation"
      >
        <button
          className="group inline-flex items-center gap-3 bg-transparent text-[15px] font-extrabold tracking-tight text-white"
          onClick={() => navigate('Home')}
          aria-label="Go to home"
        >
          <span className="grid size-9 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm transition-transform duration-200 group-hover:scale-105 border border-white/20">
            <span className="font-serif text-xl italic font-bold">V</span>
          </span>
          <span className="text-[16px]">
            Varun<span className="text-[#596235]">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-2.5 tablet:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item
            return (
              <motion.button
                key={item}
                className={`neo-transition rounded-sm px-4 py-2 text-[12px] font-bold tracking-wide ${
                  isActive
                    ? 'bg-[#596235] text-white shadow-raised-sm font-extrabold border border-white/20'
                    : 'text-white/90 hover:bg-[#E27655] hover:text-white hover:shadow-raised-sm'
                }`}
                onClick={() => navigate(item)}
                whileHover={reduceMotion || isActive ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {item}
              </motion.button>
            )
          })}
        </div>

        <motion.button
          className="grid size-10 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm active:neo-pressed tablet:hidden border border-white/20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          transition={{ duration: 0.15 }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="pointer-events-auto absolute left-4 right-4 top-[72px] flex flex-col items-stretch gap-1.5 rounded-lg bg-[#D96846] p-3 shadow-raised-lg tablet:hidden border border-white/25"
            initial={reduceMotion ? false : { opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item
              return (
                <motion.button
                  key={item}
                  className={`neo-transition rounded-sm p-3 text-left text-[13px] font-bold ${
                    isActive
                      ? 'bg-[#596235] text-white shadow-raised-sm font-extrabold border border-white/20'
                      : 'text-white/90 hover:bg-[#E27655] hover:text-white hover:shadow-raised-sm'
                  }`}
                  onClick={() => navigate(item)}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18, delay: index * 0.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {item}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
