let scrollFrame = null

export const sectionScrollOffsets = {
  home: 0,
  about: 40,
  skills: 50,
  projects: 50,
  experience: 50,
  contact: 50,
}

const easeInOut = (progress) => progress < 0.5
  ? 2 * progress * progress
  : 1 - Math.pow(-2 * progress + 2, 2) / 2

export function scrollToSection(item) {
  const sectionId = item.toLowerCase()
  const section = document.getElementById(sectionId)
  if (!section) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const targetTop = sectionId === 'home'
    ? 0
    : section.getBoundingClientRect().top + window.scrollY - (sectionScrollOffsets[sectionId] ?? 88)
  const startTop = window.scrollY
  const distance = targetTop - startTop

  cancelAnimationFrame(scrollFrame)
  if (Math.abs(distance) < 2) return

  const duration = prefersReducedMotion ? 240 : Math.min(850, Math.max(420, Math.abs(distance) * 0.65))
  const startedAt = performance.now()

  const animateScroll = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1)
    window.scrollTo(0, startTop + distance * easeInOut(progress))
    if (progress < 1) scrollFrame = requestAnimationFrame(animateScroll)
  }

  scrollFrame = requestAnimationFrame(animateScroll)
}
