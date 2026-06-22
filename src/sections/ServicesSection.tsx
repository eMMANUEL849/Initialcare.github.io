import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconUser, IconUtensils, IconHome, IconBroom, IconPlus, IconArrowRight } from '@/icons'

const services = [
  {
    icon: <IconUser className="w-6 h-6" />,
    title: 'Personal Care',
    desc: 'Support with daily routines while promoting dignity and independence.',
    cardBg: 'linear-gradient(135deg, #FFF0F3 0%, #FFD6DE 100%)',
    iconBg: '#FFB8C6',
    iconColor: '#C0395A',
    accentColor: '#E85D75',
    textColor: '#C0395A',
  },
  {
    icon: <IconUtensils className="w-6 h-6" />,
    title: 'Meal Preparation',
    desc: 'Nutritious, home-cooked meals tailored to your needs and preferences.',
    cardBg: 'linear-gradient(135deg, #FFFBF0 0%, #FFE8A3 100%)',
    iconBg: '#FFD566',
    iconColor: '#A86200',
    accentColor: '#D4820A',
    textColor: '#A86200',
  },
  {
    icon: <IconHome className="w-6 h-6" />,
    title: 'Companionship',
    desc: 'Friendly visits and meaningful connection for a happier day-to-day.',
    cardBg: 'linear-gradient(135deg, #EBF2EE 0%, #C4DECE 100%)',
    iconBg: '#A8D4BE',
    iconColor: '#3A7A5C',
    accentColor: '#7BA38C',
    textColor: '#3A7A5C',
    featured: true,
  },
  {
    icon: <IconBroom className="w-6 h-6" />,
    title: 'Household Support',
    desc: 'Help with household tasks to keep your home comfortable and safe.',
    cardBg: 'linear-gradient(135deg, #F5F0FF 0%, #DDD0F5 100%)',
    iconBg: '#C9B8F0',
    iconColor: '#5E3DAD',
    accentColor: '#7B5EA7',
    textColor: '#5E3DAD',
  },
  {
    icon: <IconPlus className="w-6 h-6" />,
    title: 'Specialist Care',
    desc: 'Bespoke support for complex needs, including dementia care.',
    cardBg: 'linear-gradient(135deg, #EBF9FA 0%, #B3E8EC 100%)',
    iconBg: '#88D8E0',
    iconColor: '#076E80',
    accentColor: '#0E8A9E',
    textColor: '#076E80',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
            <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Our Services</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
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
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group rounded-2xl overflow-hidden bg-white flex flex-col cursor-pointer"
              style={{
                boxShadow: service.featured
                  ? `0 4px 24px ${service.accentColor}30`
                  : '0 1px 4px rgba(0,0,0,0.06)',
                outline: service.featured ? `2px solid ${service.accentColor}` : undefined,
              }}
            >
              {/* Colored gradient header */}
              <div
                className="h-44 relative overflow-hidden flex items-center justify-center"
                style={{ background: service.cardBg }}
              >
                {/* Decorative circles */}
                <div
                  className="absolute -top-5 -right-5 w-24 h-24 rounded-full opacity-35"
                  style={{ background: service.accentColor }}
                />
                <div
                  className="absolute -bottom-8 -left-5 w-20 h-20 rounded-full opacity-20"
                  style={{ background: service.accentColor }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-10"
                  style={{ background: service.accentColor }}
                />

                {/* Featured badge */}
                {service.featured && (
                  <div
                    className="absolute top-3 right-3 text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow"
                    style={{ background: service.accentColor }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: service.iconBg, color: service.iconColor }}
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-[#3A3028] text-sm mb-1.5">{service.title}</h3>
                <p className="text-xs text-[#7A6E62] leading-relaxed flex-1">{service.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold mt-3 group-hover:gap-2 transition-all"
                  style={{ color: service.textColor }}
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
            className="inline-flex items-center gap-3 bg-[#3A3028] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#5C4F3D] transition-all hover:shadow-xl group"
          >
            <span>View all services</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
