import { motion } from 'framer-motion'
import { IconStar, IconQuote } from '@/icons'

const testimonials = [
  { name: 'Sarah J.', role: 'Daughter of Client', initials: 'SJ', rating: 5, quote: "InitialCare has been a lifeline for our family. The carer is kind, reliable and truly goes the extra mile. Mum is happier and more relaxed at home, and that means everything to us." },
  { name: 'Michael T.', role: 'Son of Client', initials: 'MT', rating: 5, quote: "From the very first call, the team at InitialCare made us feel heard and supported. The care provided to my father has been exceptional — professional, warm, and truly person-centred." },
  { name: 'Margaret W.', role: 'Client', initials: 'MW', rating: 5, quote: "I was nervous about accepting help at home, but the InitialCare team put me completely at ease. My carer is wonderful — she's become like a friend. I feel so much more confident now." },
  { name: 'David R.', role: 'Husband of Client', initials: 'DR', rating: 5, quote: "The level of care and attention to detail is outstanding. InitialCare genuinely cares about the people they support. We couldn't be more grateful for everything they do." },
  { name: 'Patricia L.', role: 'Client', initials: 'PL', rating: 5, quote: "I've been with InitialCare for over a year now and I can honestly say it's changed my life. I feel safe, supported, and most importantly, I still feel independent in my own home." },
  { name: 'James H.', role: 'Son of Client', initials: 'JH', rating: 5, quote: "Choosing InitialCare was the best decision we made for our mother. The carers are professional, compassionate, and always go above and beyond. We have complete peace of mind." },
]

export default function TestimonialsPage() {
  return (
    <main className="bg-[#F0EDE6]">
      <section className="bg-[#3A3028] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <IconStar className="w-3.5 h-3.5 text-[#7BA38C]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Testimonials</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Real stories, real impact</h1>
            <p className="text-[#C4B8AC] leading-relaxed">Hear from the families and individuals whose lives we've had the privilege of supporting.</p>
          </motion.div>
        </div>
      </section>

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
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center mb-4">
                  <IconQuote className="w-5 h-5 text-[#7BA38C]" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <IconStar key={j} className="w-3.5 h-3.5 text-[#7BA38C]" />)}
                </div>
                <blockquote className="text-sm text-[#3A3028] leading-relaxed mb-5">"{t.quote}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0EDE6]">
                  <div className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{t.initials}</div>
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
    </main>
  )
}
