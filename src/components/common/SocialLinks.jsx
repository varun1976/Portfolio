import { ArrowUpRight, Code2, Globe2, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const icons = { code: Code2, web: Globe2, email: Mail }

function SocialLinks({ links }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="flex flex-col gap-3">
      {links.map(({ label, icon, href }) => {
        const Icon = icons[icon] || Globe2
        return (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group neo-transition flex w-full max-w-[320px] items-center gap-3 rounded-md bg-[#D96846] p-3 shadow-raised-sm hover:shadow-raised active:neo-pressed border border-white/20"
            whileHover={reduceMotion ? undefined : { x: 3, y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid size-9 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm transition-transform duration-200 group-hover:scale-105 border border-white/20">
              <Icon size={16} strokeWidth={1.8} />
            </div>
            <span className="font-mono text-[11px] font-bold tracking-wide text-white group-hover:text-white/90 transition-colors duration-200">
              {label}
            </span>
            <ArrowUpRight className="ml-auto text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" size={15} />
          </motion.a>
        )
      })}
    </div>
  )
}

export default SocialLinks
