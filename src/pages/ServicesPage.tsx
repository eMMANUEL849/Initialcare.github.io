import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconUser, IconUtensils, IconHome, IconBroom, IconPlus, IconHeart, IconCheck } from '@/icons'

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
  },
  {
    icon: <IconPlus className="w-7 h-7" />,
    title: 'Specialist Care',
    desc: 'Bespoke support for complex needs, including dementia care.',
    details: [
      'Dementia and Alzheimer\'s care',
      'Parkinson\'s disease support',
      'Post-hospital discharge care',
      'Palliative and end-of-life care',
      'Complex health condition management',
    ],
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
  },
]

export default function ServicesPage() {
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
              <span className="text-xs font-semibold text-[#A8C4B4]">Our Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Care that's tailored to you
            </h1>
            <p className="text-[#C4B8AC] leading-relaxed">
              We offer a comprehensive range of personalised home care services designed to support you or your loved one to live safely, comfortably and independently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF2EE] flex items-center justify-center text-[#7BA38C] mb-4 group-hover:bg-[#7BA38C] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#3A3028] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-[#7A6E62] leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-[#5C4F3D]">
                      <IconCheck className="w-3.5 h-3.5 text-[#7BA38C] mt-0.5 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
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
              className="inline-flex items-center gap-3 bg-[#7BA38C] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all group"
            >
              <IconHeart className="w-4.5 h-4.5" />
              <span>Request Care</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
