import { motion } from 'framer-motion'
import { IconStar, IconQuote, IconHeart } from '@/icons'
import heroImg from '@/assets/Care.png'
import { Link } from 'react-router-dom'

const testimonials = [
  { name: 'Sarah J.', role: 'Daughter of Client', initials: 'SJ', rating: 5, color: '#E85D75', bg: '#FFF0F3', quote: "InitialCare has been a lifeline for our family. The carer is kind, reliable and truly goes the extra mile. Mum is happier and more relaxed at home, and that means everything to us." },
  { name: 'Michael T.', role: 'Son of Client', initials: 'MT', rating: 5, color: '#D4820A', bg: '#FFF8EB', quote: "From the very first call, the team at InitialCare made us feel heard and supported. The care provided to my father has been exceptional — professional, warm, and truly person-centred." },
  { name: 'Margaret W.', role: 'Client', initials: 'MW', rating: 5, color: '#7BA38C', bg: '#EBF2EE', quote: "I was nervous about accepting help at home, but the InitialCare team put me completely at ease. My carer is wonderful — she's become like a friend. I feel so much more confident now." },
  { name: 'David R.', role: 'Husband of Client', initials: 'DR', rating: 5, color: '#7B5EA7', bg: '#F5F0FF', quote: "The level of care and attention to detail is outstanding. InitialCare genuinely cares about the people they support. We couldn't be more grateful for everything they do." },
  { name: 'Patricia L.', role: 'Client', initials: 'PL', rating: 5, color: '#0E8A9E', bg: '#EBF9FA', quote: "I've been with InitialCare for over a year now and I can honestly say it's changed my life. I feel safe, supported, and most importantly, I still feel independent in my own home." },
  { name: 'James H.', role: 'Son of Client', initials: 'JH', rating: 5, color: '#E85D75', bg: '#FFF0F3', quote: "Choosing InitialCare was the best decision we made for our mother. The carers are professional, compassionate, and always go above and beyond. We have complete peace of mind." },
]

export default function TestimonialsPage() {
  return (
    <main className="bg-[#F0EDE6]">

      {/* Hero — photo background */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.93) 0%, rgba(58,48,40,0.82) 55%, rgba(94,138,114,0.70) 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: 'rgba(123,163,140,0.2)', border: '1px solid rgba(123,163,140,0.35)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C] animate-pulse" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Testimonials</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Real stories,<br /><span className="text-[#7BA38C]">real impact</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg">
              Hear from the families and individuals whose lives we've had the privilege of supporting across Bromley and beyond.
            </p>
          </motion.div>

          {/* Stat pills in hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {[
              { value: '500+', label: 'Clients Supported' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '★ 5.0', label: 'Average Rating' },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
              >
                <span className="font-bold text-white text-sm">{s.value}</span>
                <span className="text-white/55 text-xs">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo strip divider */}
      <div className="relative h-40 lg:h-56 overflow-hidden">
        <img src={heroImg} alt="" className="w-full h-full object-cover object-[center_30%]" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(45,37,32,0.6) 0%, rgba(240,237,230,0) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-2.5 shadow-xl"
            style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}
          >
            <IconHeart className="w-4 h-4 text-[#7BA38C]" />
            <span className="text-xs font-bold text-[#3A3028]">Every kind word is a testament to exceptional care</span>
          </div>
        </div>
      </div>

      {/* Testimonials grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                style={{ background: t.bg }}
              >
                <div
                  className="absolute -top-2 -right-1 text-[80px] font-serif leading-none opacity-10 pointer-events-none select-none"
                  style={{ color: t.color }}
                >"</div>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: t.color }}
                >
                  <IconQuote className="w-5 h-5 text-white" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <IconStar key={j} className="w-3.5 h-3.5" style={{ color: t.color }} />
                  ))}
                </div>
                <blockquote className="text-sm text-[#3A3028] leading-relaxed mb-5">"{t.quote}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#3A3028] text-sm">{t.name}</div>
                    <div className="text-xs text-[#7A6E62]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section with photo */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.94) 0%, rgba(58,48,40,0.88) 50%, rgba(94,138,114,0.75) 100%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Join our growing family<br />
              <span className="text-[#A8C4B4]">of satisfied clients</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Experience the InitialCare difference for yourself. Get in touch today and let us show you what compassionate, professional care looks like.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/request-care"
                className="inline-flex items-center gap-3 bg-[#7BA38C] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-xl"
              >
                <IconHeart className="w-4 h-4" />
                Request Care Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-full font-bold text-sm border border-white/25 hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
