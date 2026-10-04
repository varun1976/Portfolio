import { ArrowUpRight, Code2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../common/Reveal'

function SkillCard({ skill, delay }) {
  const { name, category, icon: Icon = Code2 } = skill
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={delay}>
      <motion.div
        className="group neo-transition flex items-center gap-3 rounded-md bg-[#D96846] p-3 shadow-raised-sm hover:shadow-raised active:neo-pressed border border-white/20"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid size-9 shrink-0 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm border border-white/20 transition-transform duration-200 group-hover:scale-105">
          <Icon size={18} strokeWidth={1.8} />
        </div>
        <div className="grid gap-0.5 flex-1 min-w-0">
          <strong className="text-[13px] font-bold text-white group-hover:text-white/90 transition-colors duration-200 truncate">
            {name}
          </strong>
          <span className="neo-inset-sm w-fit rounded-sm px-1.5 py-0.5 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-white/85">
            {category}
          </span>
        </div>
        <ArrowUpRight className="ml-auto text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white shrink-0" size={14} />
      </motion.div>
    </Reveal>
  )
}

export default SkillCard
