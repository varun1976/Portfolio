import { motion, useReducedMotion } from 'framer-motion'

function NeomorphicButton({ children, variant = 'primary', onClick, type = 'button', className = '', disabled = false }) {
  const reduceMotion = useReducedMotion()

  const variantStyles = variant === 'primary'
    ? 'bg-[#596235] text-white shadow-[var(--shadow-accent-raised)] hover:bg-[#6E7942] active:shadow-[var(--shadow-accent-pressed)] font-bold border border-white/20'
    : 'bg-[#D96846] text-white hover:bg-[#E27655] shadow-raised-sm hover:shadow-raised active:neo-pressed border border-white/25 font-bold'

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`neo-transition inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-md px-5 text-[13px] tracking-tight ${variantStyles} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      whileHover={reduceMotion || disabled ? undefined : { y: -2 }}
      whileTap={reduceMotion || disabled ? undefined : { y: 1, scale: 0.985 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.button>
  )
}

export default NeomorphicButton
