import { motion, useReducedMotion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import aboutHighlights from '../../data/aboutData'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'

function About() {
  const { about } = portfolioData
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" data-label="About" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} copy={about.copy} />
      </Reveal>

      <div className="grid grid-cols-[1.1fr_.9fr] items-start gap-16 max-tablet:grid-cols-1 max-tablet:gap-10">
        <Reveal className="max-w-[620px]" delay={0.08}>
          <p className="-mt-6 text-[24px] font-semibold leading-relaxed tracking-tight text-white max-tablet:text-[20px]">
            {about.lead}
          </p>
          <p className="mt-4 max-w-[490px] text-[15px] leading-relaxed text-white/85">{about.detail}</p>
          <div className="mt-4 inline-flex items-center rounded-md bg-[#596235] px-4 py-1.5 shadow-raised-sm border border-white/20">
            <span className="font-signature text-[42px] font-semibold text-white">Varun Kondreddy</span>
            <span className="ml-2 font-mono text-[12px] not-italic text-white/70">/</span>
          </div>
        </Reveal>

        <Reveal className="-mt-55 flex w-full flex-col gap-4 max-tablet:mt-0" delay={0.16}>
          {aboutHighlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="group neo-transition flex items-center gap-4 rounded-md bg-[#D96846] p-4 shadow-raised-sm hover:shadow-raised border border-white/20"
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm border border-white/20 transition-transform duration-200 group-hover:scale-105">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="grid gap-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/80 font-bold">{item.label}</span>
                  <strong className="text-[15px] font-bold text-white group-hover:text-white/90 transition-colors duration-200">{item.title}</strong>
                  <p className="text-[12px] text-white/85 leading-normal mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

export default About
