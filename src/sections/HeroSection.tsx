import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconHeart, IconShield, IconUser } from '@/icons'
import heroImg from '@/assets/Care.png'

const trustBadges = [
  { icon: <IconUser className="w-4 h-4" />, label: 'Trusted Professionals' },
  { icon: <IconShield className="w-4 h-4" />, label: 'Personalised Support' },
  { icon: <IconHeart className="w-4 h-4" />, label: 'Dignity & Respect' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F0EDE6] min-h-[88vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.png"
          alt="Care at home"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0EDE6] via-[#F0EDE6]/85 to-[#F0EDE6]/20" />
      </div>

      {/* Ambient color blobs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute top-10 left-1/2 w-96 h-96 rounded-full bg-[#7BA38C] blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.13, 0.07] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 2.5 }}
        className="absolute bottom-10 right-1/3 w-72 h-72 rounded-full bg-[#C4A882] blur-3xl pointer-events-none"
      />

      {/* Decorative leaf */}
      <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-80 lg:h-80 opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M180 20C100 40 60 120 20 190L40 200l10-25a50 50 0 0 0 20 5C170 180 200 20 200 20c-10 20-80 20-80 20 0-20 20-40 20-40S60 10 60 70c0 20 20 40 20 40s-20 0-20 20c0 10 10 20 10 20s-10 10-10 20c0 10 10 20 10 20"
            stroke="#7BA38C" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating photo card — visible on xl screens */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute hidden xl:block right-20 top-1/2 -translate-y-1/2 w-64"
      >
        <div className="relative">
          {/* Main photo */}
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
            <img src={heroImg} alt="Compassionate care" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/50 to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Floating stats badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-7 bg-white rounded-2xl px-4 py-3 shadow-xl ring-1 ring-black/5"
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-[#3A3028] leading-none">500+</div>
                <div className="text-[9px] text-[#7A6E62] mt-0.5 font-medium">Clients</div>
              </div>
              <div className="w-px h-7 bg-[#E8E2DC]" />
              <div className="text-center">
                <div className="text-lg font-bold text-[#3A3028] leading-none">98%</div>
                <div className="text-[9px] text-[#7A6E62] mt-0.5 font-medium">Satisfaction</div>
              </div>
              <div className="w-px h-7 bg-[#E8E2DC]" />
              <div className="text-center">
                <div className="text-lg font-bold text-[#3A3028] leading-none">24/7</div>
                <div className="text-[9px] text-[#7A6E62] mt-0.5 font-medium">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Rating chip */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 1.2 }}
            className="absolute -top-4 -right-5 bg-[#7BA38C] text-white rounded-2xl px-3.5 py-2.5 shadow-xl"
          >
            <div className="text-sm font-bold leading-none">★ 5.0</div>
            <div className="text-[9px] opacity-80 mt-0.5 font-medium">Top Rated</div>
          </motion.div>

          {/* CQC badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center shadow-lg ring-1 ring-[#E8E2DC]"
          >
            <IconShield className="w-5 h-5 text-[#7BA38C]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 w-full">
        <div className="max-w-lg">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#7BA38C] animate-pulse" />
            <span className="text-xs font-semibold text-[#5E8A72]">Care that feels like home</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3A3028] leading-[1.1] mb-1"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Nurturing
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.17 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-1"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="text-[#7BA38C]">Care</span>
            <span className="text-[#3A3028]"> for</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3A3028] leading-[1.1] mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Better Living
          </motion.h1>

          {/* Gradient divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="origin-left h-1 w-20 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #7BA38C, #C4A882)' }}
          />

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base text-[#5C4F3D] leading-relaxed mb-8 max-w-sm"
          >
            Compassionate care and support in the comfort of your home, helping you live well and independently.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Link
              to="/request-care"
              className="inline-flex items-center gap-2.5 bg-[#7BA38C] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-xl hover:shadow-[#7BA38C]/30 group"
            >
              <IconHeart className="w-4 h-4" />
              <span>Request Care</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 bg-white text-[#3A3028] px-7 py-4 rounded-full font-bold text-sm hover:bg-[#F7F5F1] border border-[#D8D2C8] hover:border-[#7BA38C] transition-all hover:shadow-md"
            >
              Learn About Us
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.08 }}
                className="flex items-center gap-2 bg-white/75 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm"
              >
                <span className="text-[#7BA38C]">{badge.icon}</span>
                <span className="text-xs font-semibold text-[#3A3028]">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
