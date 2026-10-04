import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import Reveal from '../common/Reveal'

function ProjectCard({ project, delay }) {
  const { number, title, type, description, tags, image, github, demo } = project
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={delay}>
      <motion.article
        className="group neo-transition flex h-full flex-col overflow-hidden rounded-lg bg-[#D96846] p-3 shadow-raised hover:shadow-raised-hover border border-white/20"
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Carved Inset Image Well */}
        <div className="neo-inset-deep relative h-[200px] w-full overflow-hidden rounded-md p-2">
          <img
            src={image}
            alt={title}
            className="size-full rounded-sm object-cover shadow-raised-sm transition-transform duration-300 ease-out group-hover:scale-[1.025]"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
            }}
          />
          <span className="absolute left-4 top-4 font-mono text-[10px] font-bold text-white bg-[#596235]/90 backdrop-blur-md px-2 py-0.5 rounded-sm shadow-raised-sm border border-white/20">
            {number}
          </span>
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-[#596235] text-white shadow-raised-sm hover:shadow-raised hover:bg-[#6E7942] active:neo-pressed border border-white/20"
              aria-label={`Open ${title} live demo`}
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <ArrowUpRight size={18} />
            </motion.a>
          )}
        </div>

        {/* Card Content Body */}
        <div className="flex flex-1 flex-col p-4 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/80 font-bold">{type}</span>
          <h3 className="my-2 text-[18px] font-bold tracking-tight text-white group-hover:text-white/90 transition-colors duration-200">{title}</h3>
          <p className="mb-4 flex-1 text-[13px] leading-relaxed text-white/85">{description}</p>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="neo-inset-sm neo-transition rounded-sm px-2.5 py-1 font-mono text-[10px] font-medium text-white/85 hover:-translate-y-0.5 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-white hover:text-white/80 transition-colors duration-200"
            >
              View source <Code2 size={15} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </a>
          )}
        </div>
      </motion.article>
    </Reveal>
  )
}

export default ProjectCard
