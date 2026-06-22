import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconCheck, IconHeart } from '@/icons'
import heroImg from '@/assets/Care2.png'

const values = [
  {
    title: 'Compassion',
    desc: 'We treat every person with warmth, empathy, and genuine care.',
    color: '#E85D75', bg: '#FFF0F3', iconBg: '#FFD6DE',
  },
  {
    title: 'Dignity',
    desc: 'We respect the individuality and privacy of every client.',
    color: '#D4820A', bg: '#FFF8EB', iconBg: '#FFE9B3',
  },
  {
    title: 'Reliability',
    desc: 'Consistent, dependable care you and your family can count on.',
    color: '#7BA38C', bg: '#EBF2EE', iconBg: '#C4DECE',
  },
  {
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards in everything we do.',
    color: '#7B5EA7', bg: '#F5F0FF', iconBg: '#DDD0F5',
  },
]

const qualifications = [
  'CQC Registered Provider',
  'DBS Checked Staff',
  'Fully Insured',
  'Ongoing Training & Development',
  'Safeguarding Compliant',
  'Person-Centred Care Plans',
]

const team = [
  { initials: 'AC', name: 'Angela Clarke', role: 'Registered Manager', color: '#E85D75' },
  { initials: 'JO', name: 'James Osei', role: 'Care Coordinator', color: '#7BA38C' },
  { initials: 'PM', name: 'Priya Mehta', role: 'Senior Care Worker', color: '#D4820A' },
  { initials: 'LT', name: 'Lisa Thompson', role: 'Care Professional', color: '#7B5EA7' },
]

export default function AboutPage() {
  return (
    <main className="bg-[#F0EDE6]">
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #2D2520 0%, #3A3028 55%, #4A5E52 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#7BA38C] blur-3xl pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: 'rgba(123,163,140,0.2)', border: '1px solid rgba(123,163,140,0.35)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C] animate-pulse" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Who We Are</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Care rooted in<br />
              <span className="text-[#7BA38C]">compassion</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg">
              InitialCare was founded with a simple belief: everyone deserves to live well in the comfort of their own home, with dignity, independence, and the right support around them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission — photo + text */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
                <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3028] mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Empowering lives through<br />
                <span className="text-[#7BA38C]">personalised care</span>
              </h2>
              <p className="text-[#7A6E62] leading-relaxed mb-4 text-sm">
                Our mission is to provide compassionate, high-quality home care that empowers individuals to live independently and with dignity. We believe that care should always be personal — tailored to the unique needs, preferences, and goals of each person we support.
              </p>
              <p className="text-[#7A6E62] leading-relaxed mb-7 text-sm">
                We work closely with clients and their families to build care plans that truly reflect what matters most to them. From personal care and companionship to specialist support, our dedicated team is here every step of the way.
              </p>

              {/* Qualifications as badge chips */}
              <div className="flex flex-wrap gap-2 mb-7">
                {qualifications.map((q) => (
                  <div key={q} className="flex items-center gap-1.5 bg-[#EBF2EE] rounded-full px-3 py-1.5">
                    <IconCheck className="w-3 h-3 text-[#7BA38C]" />
                    <span className="text-xs font-semibold text-[#3A7A5C]">{q}</span>
                  </div>
                ))}
              </div>

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
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImg} alt="InitialCare professional" className="w-full h-[440px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/55 via-transparent to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-6 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center">
                    <IconHeart className="w-5 h-5 text-[#7BA38C]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#3A3028]">500+ Families</div>
                    <div className="text-[10px] text-[#7A6E62]">Supported in Bromley</div>
                  </div>
                </div>
              </motion.div>

              {/* Accent blob */}
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-[#7BA38C]/15 blur-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the team */}
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
              <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-3xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              People who truly care
            </h2>
            <p className="text-[#7A6E62] text-sm max-w-md mx-auto">
              Every member of our team is carefully selected, trained, and shares our passion for delivering exceptional care.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold shadow-md"
                  style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}CC 100%)` }}
                >
                  {member.initials}
                </div>
                <div className="font-bold text-[#3A3028] text-sm mb-0.5">{member.name}</div>
                <div className="text-xs text-[#7A6E62]">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
              <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="text-3xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Everything we do is guided by these
            </h2>
            <p className="text-[#7A6E62] text-sm max-w-md mx-auto">
              Our core principles shape every interaction, every visit, and every care plan we create.
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
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl p-6 hover:shadow-xl transition-all cursor-default"
                style={{ background: v.bg }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: v.iconBg }}
                >
                  <span style={{ color: v.color }}><IconHeart className="w-5 h-5" /></span>
                </div>
                <h3 className="font-bold text-[#3A3028] mb-2 text-base">{v.title}</h3>
                <p className="text-sm text-[#7A6E62] leading-relaxed">{v.desc}</p>
                <div
                  className="mt-4 h-1 w-10 rounded-full"
                  style={{ background: v.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
