import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconHeart, IconShield, IconUser } from '@/icons'

const trustBadges = [
  { icon: <IconUser className="w-5 h-5" />, label: 'Trusted', sub: 'Care Professionals' },
  { icon: <IconShield className="w-5 h-5" />, label: 'Personalised', sub: 'Support' },
  { icon: <IconHeart className="w-5 h-5" />, label: 'Dignity, Respect', sub: '& Compassion' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F0EDE6] min-h-[78vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.png"
          alt="Care worker walking with elderly client in a garden"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0EDE6]/90 via-[#F0EDE6]/60 to-transparent" />
      </div>

      {/* Decorative leaf */}
      <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-72 lg:h-72 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180 20C100 40 60 120 20 190L40 200l10-25a50 50 0 0 0 20 5C170 180 200 20 200 20c-10 20-80 20-80 20 0-20 20-40 20-40S60 10 60 70c0 20 20 40 20 40s-20 0-20 20c0 10 10 20 10 20s-10 10-10 20c0 10 10 20 10 20" stroke="#7BA38C" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
          >
            <svg className="w-3.5 h-3.5 text-[#7BA38C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-2 2-4 2-4S8 2 8 8c0 2 2 4 2 4s-2 0-2 2c0 1 1 2 1 2" />
            </svg>
            <span className="text-xs font-semibold text-[#5E8A72]">Care that feels like home</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3A3028] leading-tight mb-2"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Nurturing Care
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3A3028] leading-tight mb-4"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            for Better Living
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="origin-left w-16 h-0.5 bg-[#7BA38C] mb-5"
          />

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base text-[#5C4F3D] leading-relaxed mb-8 max-w-sm"
          >
            Compassionate care and support in the comfort of your home, helping you live well and independently.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link
              to="/request-care"
              className="inline-flex items-center gap-3 bg-[#7BA38C] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-lg hover:shadow-[#7BA38C]/30 group"
            >
              <IconHeart className="w-4.5 h-4.5" />
              <span>Request Care</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 py-2"
              >
                <span className="text-[#7BA38C]">{badge.icon}</span>
                <div>
                  <div className="text-xs font-bold text-[#3A3028] leading-tight">{badge.label}</div>
                  <div className="text-[10px] text-[#7A6E62] leading-tight">{badge.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
