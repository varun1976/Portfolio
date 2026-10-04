import { motion, useReducedMotion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0, x = 0, y = 16, scale = 1, whileHover, whileTap }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y, scale }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : whileHover}
      whileTap={reduceMotion ? undefined : whileTap}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
