import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconUser, IconUtensils, IconHome, IconBroom, IconPlus, IconArrowRight } from '@/icons'

const services = [
  {
    icon: <IconUser className="w-6 h-6" />,
    title: 'Personal Care',
    desc: 'Support with daily routines while promoting dignity and independence.',
    img: null,
  },
  {
    icon: <IconUtensils className="w-6 h-6" />,
    title: 'Meal Preparation',
    desc: 'Nutritious, home-cooked meals tailored to your needs and preferences.',
    img: null,
  },
  {
    icon: <IconHome className="w-6 h-6" />,
    title: 'Companionship',
    desc: 'Friendly support and companionship for a happier day-to-day.',
    img: null,
    featured: true,
  },
  {
    icon: <IconBroom className="w-6 h-6" />,
    title: 'Household Support',
    desc: 'Help with household tasks to keep your home comfortable and safe.',
    img: null,
  },
  {
    icon: <IconPlus className="w-6 h-6" />,
    title: 'Specialist Care',
    desc: 'Bespoke support for complex needs, including dementia care.',
    img: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesSection() {
  return (
    <section className="bg-[#F7F5F1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <svg className="w-3.5 h-3.5 text-[#7BA38C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-2 2-4 2-4S8 2 8 8c0 2 2 4 2 4s-2 0-2 2c0 1 1 2 1 2" />
            </svg>
            <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Care that's tailored to you
          </h2>
          <p className="text-[#7A6E62] max-w-xl mx-auto text-sm leading-relaxed">
            We offer a range of personalised care services to support you or your loved one to live safely, comfortably and independently at home.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 flex flex-col ${
                service.featured ? 'lg:scale-105 shadow-md' : ''
              }`}
            >
              {/* Image placeholder with gradient */}
              <div className="h-36 bg-gradient-to-br from-[#EBF2EE] to-[#D4E8DC] relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7BA38C] shadow-sm">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-[#3A3028] text-sm mb-1.5">{service.title}</h3>
                <p className="text-xs text-[#7A6E62] leading-relaxed flex-1">{service.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#7BA38C] mt-3 hover:gap-2 transition-all"
                >
                  Learn more <IconArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-[#3A3028] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#5C4F3D] transition-all hover:shadow-lg group"
          >
            <span>View all services</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
