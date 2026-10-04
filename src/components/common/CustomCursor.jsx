import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [cursorState, setCursorState] = useState('default')

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const dotX = useSpring(rawX, { stiffness: 750, damping: 45 })
  const dotY = useSpring(rawY, { stiffness: 750, damping: 45 })

  const ringX = useSpring(rawX, { stiffness: 240, damping: 24 })
  const ringY = useSpring(rawY, { stiffness: 240, damping: 24 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const handleMediaChange = (e) => setIsPointerFine(e.matches)
    setIsPointerFine(mediaQuery.matches)
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange)
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaChange)
    }

    const handleMouseMove = (e) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, textarea, select, [role="button"], .sakura-petal-container, img[src*="screen"], [data-cursor], .neo-transition')
      
      if (!target) {
        setCursorState('default')
        return
      }

      const tagName = target.tagName.toLowerCase()
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        setCursorState('input')
      } else if (target.classList.contains('sakura-petal-container') || target.tagName === 'IMG') {
        setCursorState('sakura')
      } else if (target.dataset.cursor === 'card' || target.classList.contains('neo-transition')) {
        setCursorState('card')
      } else {
        setCursorState('button')
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseover', handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseover', handleMouseOver)
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange)
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMediaChange)
      }
    }
  }, [rawX, rawY, isVisible])

  if (!isPointerFine) {
    return null
  }

  let ringSize = 36
  let ringScale = 1
  let dotScale = 1
  let ringBg = 'rgba(89, 98, 53, 0.20)'
  let ringBorder = 'rgba(255, 255, 255, 0.8)'
  let ringGlow = '0 0 14px rgba(89, 98, 53, 0.4)'
  let opacity = isVisible ? 1 : 0

  if (cursorState === 'button') {
    ringScale = 1.6
    dotScale = 0.5
    ringBg = 'rgba(89, 98, 53, 0.35)'
    ringBorder = 'rgba(255, 255, 255, 0.95)'
    ringGlow = '0 0 20px rgba(255, 255, 255, 0.6)'
  } else if (cursorState === 'card') {
    ringScale = 1.35
    dotScale = 0.8
    ringBg = 'rgba(89, 98, 53, 0.25)'
    ringBorder = 'rgba(255, 255, 255, 0.85)'
    ringGlow = '0 0 16px rgba(89, 98, 53, 0.5)'
  } else if (cursorState === 'sakura') {
    ringScale = 1.45
    dotScale = 0.9
    ringBg = 'rgba(205, 203, 214, 0.30)'
    ringBorder = 'rgba(255, 255, 255, 0.9)'
    ringGlow = '0 0 22px rgba(255, 255, 255, 0.6)'
  } else if (cursorState === 'input') {
    opacity = 0.2
    ringScale = 0.5
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none" aria-hidden="true">
      <motion.div
        className="pointer-events-none absolute rounded-full border transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          marginLeft: `-${ringSize / 2}px`,
          marginTop: `-${ringSize / 2}px`,
          backgroundColor: ringBg,
          borderColor: ringBorder,
          boxShadow: ringGlow,
          opacity,
        }}
        animate={{ scale: ringScale }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute size-2.5 rounded-full bg-[#FFFFFF] shadow-[0_0_10px_rgba(255,255,255,0.9)]"
        style={{
          x: dotX,
          y: dotY,
          marginLeft: '-5px',
          marginTop: '-5px',
          opacity,
        }}
        animate={{ scale: dotScale }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
