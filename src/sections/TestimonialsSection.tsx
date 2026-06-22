import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconQuote, IconChevronLeft, IconChevronRight, IconStar } from '@/icons'

const testimonials = [
  {
    quote: "InitialCare has been a lifeline for our family. The carer is kind, reliable and truly goes the extra mile. Mum is happier and more relaxed at home, and that means everything to us.",
    name: 'Sarah J.',
    role: 'Daughter of Client',
    initials: 'SJ',
  },
  {
    quote: "From the very first call, the team at InitialCare made us feel heard and supported. The care provided to my father has been exceptional — professional, warm, and truly person-centred.",
    name: 'Michael T.',
    role: 'Son of Client',
    initials: 'MT',
  },
  {
    quote: "I was nervous about accepting help at home, but the InitialCare team put me completely at ease. My carer is wonderful — she's become like a friend. I feel so much more confident now.",
    name: 'Margaret W.',
    role: 'Client',
    initials: 'MW',
  },
  {
    quote: "The level of care and attention to detail is outstanding. InitialCare genuinely cares about the people they support. We couldn't be more grateful for everything they do.",
    name: 'David R.',
    role: 'Husband of Client',
    initials: 'DR',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="bg-[#F0EDE6] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <svg className="w-3.5 h-3.5 text-[#7BA38C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-2 2-4 2-4S8 2 8 8c0 2 2 4 2 4s-2 0-2 2c0 1 1 2 1 2" />
              </svg>
              <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">What our clients say</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3028] leading-tight mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Real stories,<br />real impact
            </h2>
            <p className="text-[#7A6E62] text-sm leading-relaxed">
              We're proud to make a positive difference every day.
            </p>
          </motion.div>

          {/* Right — Testimonial card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm relative">
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center mb-5">
                <IconQuote className="w-5 h-5 text-[#7BA38C]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-4 h-4 text-[#7BA38C]" />
                ))}
              </div>

              {/* Quote text */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#3A3028] text-sm leading-relaxed mb-6"
                >
                  "{testimonials[current].quote}"
                </motion.blockquote>
              </AnimatePresence>

              {/* Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7BA38C] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#3A3028] text-sm">{testimonials[current].name}</div>
                    <div className="text-xs text-[#7A6E62]">{testimonials[current].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#F0EDE6]">
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-[#D8D2C8] flex items-center justify-center text-[#7A6E62] hover:border-[#7BA38C] hover:text-[#7BA38C] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <IconChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center text-white hover:bg-[#5E8A72] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <IconChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`rounded-full transition-all ${
                        i === current ? 'w-5 h-2 bg-[#7BA38C]' : 'w-2 h-2 bg-[#D8D2C8]'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
