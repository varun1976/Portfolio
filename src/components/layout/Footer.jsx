import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import portfolioData from '../../data/portfolioData'
import { scrollToSection } from '../../utils/navigation'

function Footer() {
  const [showBackTop, setShowBackTop] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 350)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="mx-auto flex max-w-[1140px] items-end justify-between px-6 pb-12 pt-16 max-tablet:flex-col max-tablet:items-start max-tablet:gap-6 max-tablet:px-4">
      <div>
        <button
          className="group inline-flex items-center gap-3 bg-transparent text-[15px] font-extrabold tracking-tight text-white"
          onClick={() => scrollToSection('Home')}
        >
          <span className="grid size-9 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm transition-transform duration-200 group-hover:scale-105 border border-white/20">
            <span className="font-serif text-xl italic font-bold">V</span>
          </span>
          <span className="text-[16px]">
            Varun<span className="text-[#596235]">.</span>
          </span>
        </button>
        <p className="mt-3 font-mono text-[11px] text-white/85">{portfolioData.footer}</p>
      </div>

      <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-white/85">
        <span>© 2026 Varun Kondreddy</span>
        <AnimatePresence initial={false}>
          {showBackTop && (
            <motion.button
              className="neo-transition grid size-10 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm hover:shadow-raised hover:bg-[#6E7942] active:neo-pressed border border-white/20"
              onClick={() => scrollToSection('Home')}
              aria-label="Back to top"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ArrowUpRight className="-rotate-45" size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}

export default Footer
