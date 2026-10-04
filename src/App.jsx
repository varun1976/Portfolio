import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import { scrollToSection } from './utils/navigation'
import { SakuraPetals } from './components/common/SakuraDecoration'
import CustomCursor from './components/common/CustomCursor'

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <CustomCursor />

      <motion.div
        className="relative min-h-screen bg-bg text-ink"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SakuraPetals />
        <Navbar />
        <main className="relative z-10">
          <Hero onNavigate={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}

export default App
