import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import socialLinks from '../../data/socialData'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import NeomorphicButton from '../common/NeomorphicButton'
import SocialLinks from '../common/SocialLinks'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xkzp94u";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_r5f36w9";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "78VmBe9N9pWL5ewIF";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [fieldErrors, setFieldErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })
  const reduceMotion = useReducedMotion()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    const newErrors = { name: '', email: '', message: '' }
    let hasError = false

    if (!name) {
      newErrors.name = 'Name is required'
      hasError = true
    }

    if (!email) {
      newErrors.email = 'Email is required'
      hasError = true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
      hasError = true
    }

    if (!message) {
      newErrors.message = 'Message is required'
      hasError = true
    }

    if (hasError) {
      setFieldErrors(newErrors)
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    setFieldErrors({ name: '', email: '', message: '' })
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      // 1. EmailJS Submission
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message },
        PUBLIC_KEY
      )

      // 2. AWS API Gateway Store (DynamoDB)
      try {
        await fetch(
          "https://6yz8yynbe6.execute-api.ap-south-1.amazonaws.com/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
          }
        )
      } catch (awsError) {
        console.warn("AWS Gateway Store Notice:", awsError)
      }

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission Error:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" data-label="Contact" className="mx-auto grid max-w-[1140px] grid-cols-[.9fr_1.1fr] items-start gap-16 px-6 py-16 max-tablet:grid-cols-1 max-tablet:gap-10 max-tablet:px-4 max-tablet:py-12">
      <div>
        <Reveal>
          <SectionHeading
            eyebrow="Have an idea?"
            title="Let&apos;s make something meaningful."
            copy="Whether you have a project in mind, a question, or simply want to say hello, my inbox is open."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SocialLinks links={socialLinks} />
        </Reveal>
      </div>

      <Reveal className="rounded-xl bg-[#D96846] p-8 shadow-raised max-tablet:p-6 neo-transition border border-white/20" delay={0.15}>
        <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-bold text-white">Start a conversation</span>
            <div className="grid size-9 place-items-center rounded-sm bg-[#596235] text-white shadow-raised-sm border border-white/20">
              <Send size={16} />
            </div>
          </div>

          <label className="grid gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/80 font-bold">
            <div className="flex items-center justify-between">
              <span>Name</span>
              {fieldErrors.name && (
                <span className="font-mono text-[10px] text-amber-200 capitalize tracking-normal font-semibold">
                  * {fieldErrors.name}
                </span>
              )}
            </div>
            <input
              className={`neo-inset-deep neo-transition w-full rounded-md px-4 py-3 font-sans text-[14px] text-white bg-[#C75735] outline-none placeholder:text-white/60 focus:shadow-[var(--shadow-inset-focus)] ${
                fieldErrors.name ? 'border border-amber-300' : ''
              }`}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/80 font-bold">
            <div className="flex items-center justify-between">
              <span>Email</span>
              {fieldErrors.email && (
                <span className="font-mono text-[10px] text-amber-200 capitalize tracking-normal font-semibold">
                  * {fieldErrors.email}
                </span>
              )}
            </div>
            <input
              className={`neo-inset-deep neo-transition w-full rounded-md px-4 py-3 font-sans text-[14px] text-white bg-[#C75735] outline-none placeholder:text-white/60 focus:shadow-[var(--shadow-inset-focus)] ${
                fieldErrors.email ? 'border border-amber-300' : ''
              }`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/80 font-bold">
            <div className="flex items-center justify-between">
              <span>Message</span>
              {fieldErrors.message && (
                <span className="font-mono text-[10px] text-amber-200 capitalize tracking-normal font-semibold">
                  * {fieldErrors.message}
                </span>
              )}
            </div>
            <textarea
              className={`neo-inset-deep neo-transition w-full resize-y rounded-md px-4 py-3 font-sans text-[14px] text-white bg-[#C75735] outline-none placeholder:text-white/60 focus:shadow-[var(--shadow-inset-focus)] ${
                fieldErrors.message ? 'border border-amber-300' : ''
              }`}
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a little about your idea..."
            />
          </label>

          <NeomorphicButton className="mt-2 w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                Sending... <Loader2 size={17} className="animate-spin" />
              </>
            ) : status.type === 'success' ? (
              <>
                Message sent <Check size={17} />
              </>
            ) : (
              <>
                Send message <ArrowUpRight size={17} />
              </>
            )}
          </NeomorphicButton>

          <AnimatePresence>
            {status.message && (
              <motion.p
                className={`mt-2 text-center font-mono text-[11px] font-semibold ${
                  status.type === 'success' ? 'text-white' : 'text-yellow-200'
                }`}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
