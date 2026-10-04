import { motion } from 'framer-motion'
import FallingLeaves from './SakuraPetals'
import greenBranch from '../../assets/green_branch.png'

export function SakuraBranch() {
  return (
    <div className="pointer-events-none absolute right-0 -top-24 z-0 flex justify-end select-none overflow-hidden" aria-hidden="true">
      <motion.img
        src={greenBranch}
        alt=""
        className="-mt-14 -mr-12 h-auto w-[840px] max-w-none object-contain opacity-95 drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] max-tablet:-mt-8 max-tablet:-mr-8 max-tablet:w-[540px] max-small:w-[370px] max-small:opacity-90"
        initial={{ opacity: 0, x: 30, y: -15, rotate: 2 }}
        animate={{ opacity: 0.95, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Orange canvas gradient blend overlay mask at the right & top right edge */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#D96846] via-[#D96846]/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-52 bg-gradient-to-b from-[#D96846] via-[#D96846]/60 to-transparent z-10" />
    </div>
  )
}

export { FallingLeaves }
export { FallingLeaves as SakuraPetals }

export default function SakuraDecoration() {
  return <FallingLeaves />
}
