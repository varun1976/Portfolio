import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { experiences } from '../../data/experienceData'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import TimelineItem from '../experience/TimelineItem'

function Experience() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.001,
  })

  const dotTopPercent = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" data-label="Experience" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="The journey so far"
          title="Experience & growth."
          copy="A timeline for the chapters that have shaped the way I think, build, and keep learning."
        />
      </Reveal>

      <div ref={containerRef} className="relative mx-auto mt-12 max-w-[920px] max-tablet:ml-0 max-tablet:mt-8">
        {/* Layer 1: Base Carved Inset Timeline Groove */}
        <div className="neo-inset-deep absolute bottom-2 left-1/2 top-2 w-2.5 -translate-x-1/2 rounded-full max-tablet:left-[13px]" />

        {/* Layer 2: Animated White to Olive Progress Line Overlay */}
        <motion.div
          className="absolute bottom-2 left-1/2 top-2 w-2.5 -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-white via-[#596235] to-[#3F4723] shadow-[0_0_12px_rgba(255,255,255,0.6)] max-tablet:left-[13px]"
          style={{ scaleY: smoothProgress }}
        />

        {/* Layer 3: Moving White Light Dot Indicator */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-2 z-20 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_20px_rgba(89,98,53,0.7)] max-tablet:left-[13px]"
          style={{ top: dotTopPercent }}
        >
          <span className="absolute -inset-1 rounded-full bg-white/40 blur-[2px] animate-pulse" />
        </motion.div>

        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.role + index}
            experience={experience}
            index={index}
            total={experiences.length}
            smoothProgress={smoothProgress}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
