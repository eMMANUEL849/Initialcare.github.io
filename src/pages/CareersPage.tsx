import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconBriefcase, IconMapPin, IconCheck, IconUpload, IconHeart } from '@/icons'
import heroImg from '@/assets/Care5.png'

const jobs = [
  {
    id: 1,
    title: 'Care Assistant',
    type: 'Full-time / Part-time',
    location: 'Bromley, BR1',
    desc: 'Join our compassionate team providing personal care and support to clients in their own homes. No experience necessary — full training provided.',
    requirements: ['Caring and compassionate nature', 'Reliable and punctual', 'Full UK driving licence preferred', 'Enhanced DBS check required'],
    color: '#E85D75',
  },
  {
    id: 2,
    title: 'Senior Care Worker',
    type: 'Full-time',
    location: 'Bromley, BR1',
    desc: 'Lead and support a team of care assistants while delivering high-quality care to our clients. Minimum 2 years care experience required.',
    requirements: ['NVQ Level 3 in Health & Social Care', 'Minimum 2 years care experience', 'Strong leadership skills', 'Full UK driving licence'],
    color: '#7BA38C',
  },
  {
    id: 3,
    title: 'Care Coordinator',
    type: 'Full-time',
    location: 'Bromley, BR1 (Office-based)',
    desc: 'Coordinate care schedules, liaise with clients and families, and support the management team in delivering excellent care services.',
    requirements: ['Experience in care coordination or scheduling', 'Excellent communication skills', 'Proficient in Microsoft Office', 'Organised and detail-oriented'],
    color: '#7B5EA7',
  },
]

const perks = [
  { title: 'Competitive Pay', desc: 'Above-average rates with mileage reimbursement and paid holidays.' },
  { title: 'Full Training', desc: 'Comprehensive induction and ongoing development — no experience needed.' },
  { title: 'Flexible Hours', desc: 'Shifts designed around your lifestyle, from mornings to evenings.' },
  { title: 'Career Growth', desc: 'Clear progression pathways from care assistant to senior roles.' },
]

type AppForm = {
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  message: string
  cvFile: File | null
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [form, setForm] = useState<AppForm>({ firstName: '', lastName: '', email: '', phone: '', position: '', message: '', cvFile: null })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof AppForm, string>>>({})

  const validate = () => {
    const e: Partial<Record<keyof AppForm, string>> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.position) e.position = 'Please select a position'
    return e
  }

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <main className="bg-[#F0EDE6]">

      {/* Hero — photo background */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.93) 0%, rgba(58,48,40,0.84) 55%, rgba(94,138,114,0.70) 100%)' }}
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
              <IconBriefcase className="w-3.5 h-3.5 text-[#A8C4B4]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Join Our Team</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Make a difference<br /><span className="text-[#7BA38C]">every day</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg">
              Join the InitialCare family and build a rewarding career in care. We invest in our people with training, support, and real opportunities to grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why join us — photo split */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BA38C]" />
                <span className="text-xs font-semibold text-[#7BA38C] uppercase tracking-wider">Why InitialCare</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3028] mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                A career you'll be<br /><span className="text-[#7BA38C]">proud of</span>
              </h2>
              <p className="text-[#7A6E62] text-sm leading-relaxed mb-7">
                At InitialCare, our people are our greatest asset. We provide the training, tools, and support you need to thrive — and we celebrate the difference you make every single day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perks.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#F7F5F1] rounded-2xl p-4"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#EBF2EE] flex items-center justify-center mb-2">
                      <IconCheck className="w-4 h-4 text-[#7BA38C]" />
                    </div>
                    <div className="font-bold text-[#3A3028] text-sm mb-0.5">{p.title}</div>
                    <div className="text-xs text-[#7A6E62] leading-relaxed">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImg} alt="InitialCare team at work" className="w-full h-[420px] object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/60 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center">
                    <IconHeart className="w-5 h-5 text-[#7BA38C]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#3A3028]">50+ Team Members</div>
                    <div className="text-[10px] text-[#7A6E62]">And growing across Bromley</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-[#7BA38C]/15 blur-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-[#F7F5F1] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[#3A3028]" style={{ fontFamily: 'Nunito, sans-serif' }}>Current Vacancies</h2>
            <p className="text-sm text-[#7A6E62] mt-1">Find the role that's right for you and apply below.</p>
          </motion.div>
          <div className="space-y-4 mb-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                        style={{ background: job.color }}
                      >
                        {job.type}
                      </span>
                      <span className="text-xs font-semibold bg-[#F7F5F1] text-[#7A6E62] px-3 py-1 rounded-full flex items-center gap-1">
                        <IconMapPin className="w-3 h-3" />{job.location}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#3A3028] text-lg mb-2">{job.title}</h3>
                    <p className="text-sm text-[#7A6E62] leading-relaxed mb-3">{job.desc}</p>
                    {selectedJob === job.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-1.5 mt-3"
                      >
                        {job.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs text-[#5C4F3D]">
                            <span style={{ color: job.color }}><IconCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /></span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="px-4 py-2 rounded-full border border-[#D8D2C8] text-xs font-semibold text-[#3A3028] hover:border-[#7BA38C] hover:text-[#7BA38C] transition-colors"
                    >
                      {selectedJob === job.id ? 'Less info' : 'More info'}
                    </button>
                    <button
                      onClick={() => { setForm({ ...form, position: job.title }); document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' }) }}
                      className="px-4 py-2 rounded-full text-white text-xs font-bold transition-colors hover:opacity-90"
                      style={{ background: job.color }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply-form">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center shadow-sm max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#EBF2EE] flex items-center justify-center mx-auto mb-5">
                  <IconCheck className="w-8 h-8 text-[#7BA38C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Application Received!</h2>
                <p className="text-[#7A6E62] text-sm leading-relaxed">Thank you for applying to InitialCare. We'll review your application and be in touch within 5 working days.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm max-w-3xl mx-auto overflow-hidden"
              >
                {/* Form header photo */}
                <div className="relative h-32 overflow-hidden">
                  <img src={heroImg} alt="" className="w-full h-full object-cover object-[center_40%]" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(45,37,32,0.88) 0%, rgba(94,138,114,0.65) 100%)' }} />
                  <div className="absolute inset-0 flex items-center px-8">
                    <div>
                      <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>Apply Now</h2>
                      <p className="text-white/65 text-xs mt-0.5">Take the first step toward a rewarding care career</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-6 lg:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {(['firstName', 'lastName'] as const).map((name) => (
                      <div key={name}>
                        <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">{name === 'firstName' ? 'First Name' : 'Last Name'}</label>
                        <input type="text" value={form[name]} onChange={(e) => { setForm({ ...form, [name]: e.target.value }); setErrors({ ...errors, [name]: undefined }) }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${errors[name] ? 'border-red-400' : 'border-[#D8D2C8]'}`} />
                        {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]}</p>}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Email Address</label>
                      <input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }) }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${errors.email ? 'border-red-400' : 'border-[#D8D2C8]'}`} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: undefined }) }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${errors.phone ? 'border-red-400' : 'border-[#D8D2C8]'}`} />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Position Applying For</label>
                    <select value={form.position} onChange={(e) => { setForm({ ...form, position: e.target.value }); setErrors({ ...errors, position: undefined }) }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${errors.position ? 'border-red-400' : 'border-[#D8D2C8]'}`}>
                      <option value="">Select a position...</option>
                      {jobs.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
                    </select>
                    {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Cover Letter / Message (optional)</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                      placeholder="Tell us why you'd like to join InitialCare..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all resize-none" />
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Upload CV (optional)</label>
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-[#D8D2C8] rounded-xl cursor-pointer hover:border-[#7BA38C] hover:bg-[#EBF2EE]/50 transition-all">
                      <IconUpload className="w-6 h-6 text-[#7BA38C] mb-2" />
                      <span className="text-xs text-[#7A6E62]">{form.cvFile ? form.cvFile.name : 'Click to upload your CV (PDF, DOC, DOCX)'}</span>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setForm({ ...form, cvFile: e.target.files?.[0] ?? null })} />
                    </label>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-3 bg-[#7BA38C] text-white py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-lg hover:shadow-[#7BA38C]/30">
                    <IconBriefcase className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
