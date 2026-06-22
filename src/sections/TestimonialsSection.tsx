import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconQuote, IconChevronLeft, IconChevronRight, IconStar, IconHeart } from '@/icons'

const testimonials = [
  {
    quote: "InitialCare has been a lifeline for our family. The carer is kind, reliable and truly goes the extra mile. Mum is happier and more relaxed at home, and that means everything to us.",
    name: 'Sarah J.',
    role: 'Daughter of Client',
    initials: 'SJ',
    color: '#E85D75',
    bg: '#FFF0F3',
  },
  {
    quote: "From the very first call, the team at InitialCare made us feel heard and supported. The care provided to my father has been exceptional — professional, warm, and truly person-centred.",
    name: 'Michael T.',
    role: 'Son of Client',
    initials: 'MT',
    color: '#D4820A',
    bg: '#FFF8EB',
  },
  {
    quote: "I was nervous about accepting help at home, but the InitialCare team put me completely at ease. My carer is wonderful — she's become like a friend. I feel so much more confident now.",
    name: 'Margaret W.',
    role: 'Client',
    initials: 'MW',
    color: '#7BA38C',
    bg: '#EBF2EE',
  },
  {
    quote: "The level of care and attention to detail is outstanding. InitialCare genuinely cares about the people they support. We couldn't be more grateful for everything they do.",
    name: 'David R.',
    role: 'Husband of Client',
    initials: 'DR',
    color: '#7B5EA7',
    bg: '#F5F0FF',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #2D2520 0%, #3A3028 50%, #4A5E52 100%)' }}>
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#7BA38C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#C4A882]/10 blur-3xl pointer-events-none" />

      {/* Decorative dots grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Floating leaf */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M180 20C100 40 60 120 20 190L40 200l10-25a50 50 0 0 0 20 5C170 180 200 20 200 20c-10 20-80 20-80 20 0-20 20-40 20-40S60 10 60 70c0 20 20 40 20 40s-20 0-20 20c0 10 10 20 10 20s-10 10-10 20c0 10 10 20 10 20"
            stroke="#7BA38C" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — label + headline + mini stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C] animate-pulse" />
              <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">What our clients say</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Real stories,<br />
              <span className="text-[#7BA38C]">real impact</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-xs">
              We're proud to make a meaningful difference every single day across Bromley and beyond.
            </p>

            {/* Mini stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '98%', label: 'Satisfaction' },
                { value: '10+', label: 'Years Care' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="text-xl font-bold text-white leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] text-white/45 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial avatars row */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {testimonials.map((t, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrent(i)}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="relative w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-[#2D2520] transition-all"
                    style={{
                      background: t.color,
                      opacity: i === current ? 1 : 0.5,
                      zIndex: i === current ? 5 : 1,
                      transform: i === current ? 'scale(1.15)' : undefined,
                    }}
                  >
                    {t.initials}
                  </motion.button>
                ))}
              </div>
              <span className="text-white/40 text-xs ml-1">and many more...</span>
            </div>
          </motion.div>

          {/* Right — testimonial card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-7 lg:p-9 relative overflow-hidden"
                style={{ background: t.bg }}
              >
                {/* Decorative large quote */}
                <div
                  className="absolute -top-3 -right-2 text-[120px] font-serif leading-none opacity-10 pointer-events-none select-none"
                  style={{ color: t.color }}
                >
                  "
                </div>

                {/* Quote icon */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ background: t.color }}
                >
                  <IconQuote className="w-5 h-5 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="w-4 h-4" style={{ color: t.color }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#3A3028] text-base leading-relaxed mb-7 font-medium">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[#3A3028] text-sm">{t.name}</div>
                      <div className="text-xs text-[#7A6E62]">{t.role}</div>
                    </div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: t.color + '20' }}
                  >
                    <IconHeart className="w-3.5 h-3.5" style={{ color: t.color }} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#7BA38C] hover:text-[#7BA38C] transition-colors"
                  aria-label="Previous"
                >
                  <IconChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-[#7BA38C] flex items-center justify-center text-white hover:bg-[#5E8A72] transition-colors"
                  aria-label="Next"
                >
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                {testimonials.map((tm, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 20 : 8,
                      height: 8,
                      background: i === current ? tm.color : 'rgba(255,255,255,0.2)',
                    }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
