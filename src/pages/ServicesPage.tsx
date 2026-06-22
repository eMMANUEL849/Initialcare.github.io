import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconUser, IconUtensils, IconHome, IconBroom, IconPlus, IconHeart, IconCheck } from '@/icons'
import heroImg from '@/assets/Care.png'

const services = [
  {
    icon: <IconUser className="w-7 h-7" />,
    title: 'Personal Care',
    desc: 'Support with daily routines while promoting dignity and independence.',
    details: [
      'Washing, bathing and personal hygiene',
      'Dressing and grooming',
      'Continence care',
      'Medication prompting and administration',
      'Mobility assistance',
    ],
    accentColor: '#E85D75', iconBg: '#FFD6DE', iconColor: '#C0395A', cardBg: '#FFF0F3',
  },
  {
    icon: <IconUtensils className="w-7 h-7" />,
    title: 'Meal Preparation',
    desc: 'Nutritious, home-cooked meals tailored to your needs and preferences.',
    details: [
      'Breakfast, lunch and dinner preparation',
      'Dietary and nutritional requirements',
      'Grocery shopping assistance',
      'Hydration monitoring',
      'Special diet support',
    ],
    accentColor: '#D4820A', iconBg: '#FFE9B3', iconColor: '#A86200', cardBg: '#FFF8EB',
  },
  {
    icon: <IconHome className="w-7 h-7" />,
    title: 'Companionship',
    desc: 'Friendly support and companionship for a happier day-to-day.',
    details: [
      'Social visits and conversation',
      'Accompanying to appointments',
      'Leisure and hobby support',
      'Community engagement',
      'Emotional support',
    ],
    accentColor: '#7BA38C', iconBg: '#C4DECE', iconColor: '#3A7A5C', cardBg: '#EBF2EE',
  },
  {
    icon: <IconBroom className="w-7 h-7" />,
    title: 'Household Support',
    desc: 'Help with household tasks to keep your home comfortable and safe.',
    details: [
      'Light cleaning and tidying',
      'Laundry and ironing',
      'Bed making',
      'Shopping and errands',
      'Home safety checks',
    ],
    accentColor: '#7B5EA7', iconBg: '#DDD0F5', iconColor: '#5E3DAD', cardBg: '#F5F0FF',
  },
  {
    icon: <IconPlus className="w-7 h-7" />,
    title: 'Specialist Care',
    desc: 'Bespoke support for complex needs, including dementia care.',
    details: [
      "Dementia and Alzheimer's care",
      "Parkinson's disease support",
      'Post-hospital discharge care',
      'Palliative and end-of-life care',
      'Complex health condition management',
    ],
    accentColor: '#0E8A9E', iconBg: '#B3E8EC', iconColor: '#076E80', cardBg: '#EBF9FA',
  },
  {
    icon: <IconHeart className="w-7 h-7" />,
    title: 'Live-In Care',
    desc: 'Round-the-clock support from a dedicated live-in carer.',
    details: [
      '24-hour care and support',
      'Dedicated personal carer',
      'Continuity of care',
      'Emergency response',
      'Family peace of mind',
    ],
    accentColor: '#E85D75', iconBg: '#FFD6DE', iconColor: '#C0395A', cardBg: '#FFF0F3',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#F0EDE6]">
      {/* Hero — photo background */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.94) 0%, rgba(58,48,40,0.85) 55%, rgba(94,138,114,0.72) 100%)' }}
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
              <span className="text-xs font-semibold text-[#A8C4B4]">Our Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Care that's tailored<br /><span className="text-[#7BA38C]">to you</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg">
              We offer a comprehensive range of personalised home care services designed to support you or your loved one to live safely, comfortably and independently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How we care — photo split */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImg} alt="Care professional at home" className="w-full h-[420px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/55 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-4 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center">
                    <IconHeart className="w-5 h-5 text-[#7BA38C]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#3A3028]">CQC Registered</div>
                    <div className="text-[10px] text-[#7A6E62]">Fully regulated care</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-[#7BA38C]/15 blur-2xl pointer-events-none" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
                <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">How We Care</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3028] mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                A personal approach<br /><span className="text-[#7BA38C]">every time</span>
              </h2>
              <p className="text-[#7A6E62] text-sm leading-relaxed mb-7">
                We start with a thorough assessment of your individual needs and preferences. Our care coordinators work closely with you and your family to build a plan that truly works — then match you with a compatible, experienced carer.
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Free Consultation', desc: 'We start with a no-obligation conversation to understand your needs.' },
                  { step: '02', title: 'Care Plan Created', desc: 'A personalised care plan is written around your lifestyle and goals.' },
                  { step: '03', title: 'Care Begins', desc: 'Your dedicated carer provides consistent, compassionate support.' },
                ].map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#EBF2EE] flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-[#7BA38C]">{s.step}</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#3A3028] text-sm mb-0.5">{s.title}</div>
                      <div className="text-xs text-[#7A6E62] leading-relaxed">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#F7F5F1] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
              <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">All Services</span>
            </div>
            <h2 className="text-3xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>What we offer</h2>
            <p className="text-[#7A6E62] text-sm max-w-md mx-auto">Every service is built around you — flexible, dignified, and delivered by people who genuinely care.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="h-24 relative overflow-hidden flex items-center px-5"
                  style={{ background: `linear-gradient(135deg, ${service.cardBg} 0%, ${service.accentColor}28 100%)` }}
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-25" style={{ background: service.accentColor }} />
                  <div className="absolute -bottom-6 -left-4 w-16 h-16 rounded-full opacity-15" style={{ background: service.accentColor }} />
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md relative z-10"
                    style={{ background: service.iconBg, color: service.iconColor }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#3A3028] text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-[#7A6E62] leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-[#5C4F3D]">
                        <span style={{ color: service.accentColor }}><IconCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#7A6E62] mb-5 text-sm">Not sure which service is right for you?</p>
            <Link
              to="/request-care"
              className="inline-flex items-center gap-3 bg-[#7BA38C] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-xl group"
            >
              <IconHeart className="w-4 h-4" />
              <span>Request Care</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Full-width CTA with photo background */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.95) 0%, rgba(58,48,40,0.88) 50%, rgba(94,138,114,0.75) 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: 'rgba(123,163,140,0.25)', border: '1px solid rgba(123,163,140,0.4)' }}
            >
              <IconHeart className="w-3.5 h-3.5 text-[#A8C4B4]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Let's get started</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Ready to arrange care?
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Speak to our friendly care coordinators today — no commitment, just honest guidance.
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
