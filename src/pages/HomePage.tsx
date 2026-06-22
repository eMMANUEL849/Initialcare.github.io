import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconHeart, IconCheck } from '@/icons'
import heroImg from '@/assets/Care.png'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
// import TestimonialsSection from '@/sections/TestimonialsSection'

const stats = [
  { value: '500+', label: 'Clients Served', desc: 'Families supported across Bromley' },
  { value: '10+', label: 'Years of Care', desc: 'Trusted experience in home care' },
  { value: '50+', label: 'Care Professionals', desc: 'Vetted and trained staff' },
  { value: '98%', label: 'Satisfaction Rate', desc: 'Based on client feedback' },
]

const whyUs = [
  'Person-centred care plans tailored to each individual',
  'Fully vetted, DBS-checked and trained care professionals',
  'Flexible scheduling — mornings, evenings, weekends',
  'CQC registered and compliant with all regulations',
  'Dedicated care coordinator for every client',
  'Regular reviews to adapt care as needs change',
]

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Stats banner */}
      <section style={{ background: 'linear-gradient(135deg, #3A3028 0%, #4A3C30 60%, #5E7A6A 100%)' }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div
                  className="text-4xl lg:text-5xl font-bold mb-1 leading-none"
                  style={{ fontFamily: 'Nunito, sans-serif', color: i % 2 === 0 ? '#A8C4B4' : '#C4A882' }}
                >
                  {s.value}
                </div>
                <div className="text-white font-bold text-sm mb-0.5">{s.label}</div>
                <div className="text-white/40 text-xs">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Why choose us — split with photo */}
      <section className="bg-[#F0EDE6] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="InitialCare professional"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/60 via-transparent to-transparent" />
              </div>

              {/* Floating card — bottom left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-4 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5 max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#EBF2EE] flex items-center justify-center">
                    <IconHeart className="w-3.5 h-3.5 text-[#7BA38C]" />
                  </div>
                  <span className="text-xs font-bold text-[#3A3028]">Trusted Care</span>
                </div>
                <div className="text-[10px] text-[#7A6E62] leading-snug">CQC registered provider serving Bromley since 2014</div>
              </motion.div>

              {/* Color accent blob */}
              <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#7BA38C]/15 blur-2xl pointer-events-none" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
                <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Why InitialCare</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3028] mb-4 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Care you can trust,<br />
                <span className="text-[#7BA38C]">people you can rely on</span>
              </h2>
              <p className="text-[#7A6E62] text-sm leading-relaxed mb-7 max-w-md">
                We believe every person deserves to live well at home, surrounded by warmth and dignity. Our team of dedicated professionals is here to make that possible.
              </p>

              <ul className="space-y-3 mb-8">
                {whyUs.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#7BA38C] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconCheck className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-sm text-[#5C4F3D]">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 bg-[#3A3028] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#5C4F3D] transition-all hover:shadow-xl group"
              >
                <span>About InitialCare</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <TestimonialsSection /> */}

      {/* Full-width CTA with hero photo */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <img
          src={heroImg}
          alt="Care at home"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.95) 0%, rgba(58,48,40,0.88) 50%, rgba(94,138,114,0.75) 100%)' }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: 'rgba(123,163,140,0.25)', border: '1px solid rgba(123,163,140,0.4)' }}>
              <IconHeart className="w-3.5 h-3.5 text-[#A8C4B4]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Start your care journey today</span>
            </div>
            <h2
              className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Ready to get the care<br />
              <span className="text-[#A8C4B4]">you deserve?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Contact our friendly team today. We'll listen, understand your needs, and create a care plan tailored just for you — no obligation, just honest advice.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/request-care"
                className="inline-flex items-center gap-3 bg-[#7BA38C] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-2xl hover:shadow-[#7BA38C]/40 group"
              >
                <IconHeart className="w-4 h-4" />
                <span>Request Care Now</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-sm border border-white/25 hover:bg-white/20 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
