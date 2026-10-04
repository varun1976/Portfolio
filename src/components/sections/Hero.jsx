import { ArrowUpRight, ChevronDown, Mail, Sparkles, Target, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'
import NeomorphicButton from '../common/NeomorphicButton'
import { SakuraBranch } from '../common/SakuraDecoration'

const HERO_EASE = [0.22, 1, 0.36, 1]

const leftContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: HERO_EASE },
  },
}

const headingLineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: HERO_EASE },
  },
}

const profileAssemblyVariants = {
  hidden: { opacity: 0, x: 55, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.1, delay: 0.4, ease: HERO_EASE },
  },
}

const mindsetBadgeVariants = {
  hidden: { opacity: 0, x: 30, y: -25 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, delay: 1.15, ease: HERO_EASE },
  },
}

const approachBadgeVariants = {
  hidden: { opacity: 0, x: -30, y: 25 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, delay: 1.35, ease: HERO_EASE },
  },
}

function Hero({ onNavigate }) {
  const { hero, resumeUrl } = portfolioData

  return (
    <section id="home" data-label="Home" className="relative mx-auto grid min-h-[660px] max-w-[1140px] grid-cols-[1fr_.85fr] items-center gap-[50px] overflow-hidden px-6 pb-[120px] pt-[110px] max-tablet:min-h-0 max-tablet:grid-cols-1 max-tablet:gap-[40px] max-tablet:px-4 max-tablet:pt-[90px]">
      <SakuraBranch />

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={leftContainerVariants}
      >
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-white font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#596235] shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse" /> {hero.availability}
          </span>
        </motion.div>

        <h1 className="my-6 max-w-[680px] text-[clamp(3.1rem,6.5vw,6.2rem)] font-bold leading-[1.02] tracking-tight text-white">
          <motion.span variants={headingLineVariants} className="block">
            {hero.titleBefore}
            <em className="font-serif font-normal italic text-[#596235] px-1">{hero.titleEmphasis}</em>
          </motion.span>
          <motion.span variants={headingLineVariants} className="block mt-1">
            {hero.titleAfter}
          </motion.span>
        </h1>

        <motion.p variants={itemVariants} className="max-w-[480px] text-[16px] text-white/85 leading-relaxed font-medium">
          {hero.description}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-[34px] flex flex-wrap gap-4 max-small:flex-col max-small:items-stretch">
          <NeomorphicButton onClick={() => onNavigate('Projects')}>
            View my work <ArrowUpRight size={17} />
          </NeomorphicButton>
          <NeomorphicButton variant="quiet" onClick={() => onNavigate('Contact')}>
            Let&apos;s connect <Mail size={17} />
          </NeomorphicButton>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-transition inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md px-5 text-[13px] font-bold tracking-tight bg-[#596235] text-white border border-white/20 shadow-raised-sm hover:shadow-raised hover:bg-[#6E7942]"
            >
              Resume <FileText size={16} />
            </a>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-[48px] flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-white/85 max-small:flex-col max-small:items-start max-small:gap-2">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#596235] shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            {hero.status}
          </span>
          <span className="text-white/40">•</span>
          <span>{hero.location}</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 flex items-center justify-center max-tablet:mx-auto max-tablet:mt-4 max-tablet:w-full max-tablet:max-w-[440px]"
        initial="hidden"
        animate="visible"
        variants={profileAssemblyVariants}
      >
        <div className="group relative flex size-[370px] items-center justify-center rounded-full bg-[#D96846] shadow-raised-lg border border-white/20 max-tablet:size-[310px] max-small:size-[270px]">
          <div className="neo-inset-deep flex size-[320px] items-center justify-center overflow-hidden rounded-full p-4 max-tablet:size-[265px] max-small:size-[230px]">
            <div className="size-full rounded-full bg-gradient-to-br from-[#596235] to-[#D96846] flex items-center justify-center border border-white/30 shadow-raised-sm">
              <span className="font-serif text-8xl italic font-bold text-white">VK</span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute right-[-10px] top-[-10px] flex items-center gap-3 rounded-md bg-[#D96846] px-4 py-3 shadow-raised-sm border border-white/20 neo-transition hover:shadow-raised max-tablet:right-[0px] max-tablet:top-[-8px]"
          initial="hidden"
          animate="visible"
          variants={mindsetBadgeVariants}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: HERO_EASE }}
        >
          <div className="grid size-8 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm border border-white/20">
            <Sparkles size={16} />
          </div>
          <div className="text-[11px] leading-tight">
            <span className="text-white/80 font-mono block text-[9px] uppercase tracking-wider">Mindset</span>
            <strong className="text-white font-bold">Curious & Driven</strong>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[-15px] left-[-15px] flex items-center gap-3 rounded-md bg-[#D96846] px-4 py-3 shadow-raised-sm border border-white/20 neo-transition hover:shadow-raised max-tablet:bottom-[-10px] max-tablet:left-[0px]"
          initial="hidden"
          animate="visible"
          variants={approachBadgeVariants}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: HERO_EASE }}
        >
          <div className="grid size-8 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm border border-white/20">
            <Target size={16} />
          </div>
          <div className="text-[11px] leading-tight">
            <span className="text-white/80 font-mono block text-[9px] uppercase tracking-wider">Approach</span>
            <strong className="text-white font-bold">Precise & Scalable</strong>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/85 max-tablet:hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7, ease: HERO_EASE }}
      >
        <ChevronDown className="animate-bounce text-white" size={16} />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
