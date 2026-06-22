import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconCheck, IconHeart } from '@/icons'

const values = [
  { title: 'Compassion', desc: 'We treat every person with warmth, empathy, and genuine care.' },
  { title: 'Dignity', desc: 'We respect the individuality and privacy of every client.' },
  { title: 'Reliability', desc: 'Consistent, dependable care you and your family can count on.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do.' },
]

const qualifications = [
  'CQC Registered Provider',
  'DBS Checked Staff',
  'Fully Insured',
  'Ongoing Training & Development',
  'Safeguarding Compliant',
  'Person-Centred Care Plans',
]

export default function AboutPage() {
  return (
    <main className="bg-[#F0EDE6]">
      {/* Hero */}
      <section className="bg-[#3A3028] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-3.5 h-3.5 text-[#7BA38C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-2 2-4 2-4S8 2 8 8c0 2 2 4 2 4s-2 0-2 2c0 1 1 2 1 2" />
              </svg>
              <span className="text-xs font-semibold text-[#A8C4B4]">Who We Are</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Care rooted in compassion
            </h1>
            <p className="text-[#C4B8AC] leading-relaxed">
              InitialCare was founded with a simple belief: everyone deserves to live well in the comfort of their own home, with dignity, independence, and the right support around them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#3A3028] mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-[#7A6E62] leading-relaxed mb-4">
                Our mission is to provide compassionate, high-quality home care that empowers individuals to live independently and with dignity. We believe that care should always be personal — tailored to the unique needs, preferences, and goals of each person we support.
              </p>
              <p className="text-[#7A6E62] leading-relaxed mb-6">
                We work closely with clients and their families to build care plans that truly reflect what matters most to them. From personal care and companionship to specialist support, our dedicated team is here every step of the way.
              </p>
              <Link
                to="/request-care"
                className="inline-flex items-center gap-3 bg-[#7BA38C] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all group"
              >
                <IconHeart className="w-4.5 h-4.5" />
                <span>Request Care</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#EBF2EE] rounded-2xl p-8"
            >
              <h3 className="font-bold text-[#3A3028] mb-5">Our Qualifications</h3>
              <ul className="space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#7BA38C] flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-[#3A3028] font-medium">{q}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F5F1] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Our Values
            </h2>
            <p className="text-[#7A6E62] text-sm max-w-md mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center mb-4">
                  <IconHeart className="w-5 h-5 text-[#7BA38C]" />
                </div>
                <h3 className="font-bold text-[#3A3028] mb-2">{v.title}</h3>
                <p className="text-sm text-[#7A6E62] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
