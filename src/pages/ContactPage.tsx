import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconPhone, IconMail, IconMapPin, IconCheck, IconHeart } from '@/icons'
import heroImg from '@/assets/Care4.png'

type ContactForm = { name: string; email: string; phone: string; subject: string; message: string }

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const validate = () => {
    const e: Partial<ContactForm> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Required'
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
              <IconMail className="w-3.5 h-3.5 text-[#A8C4B4]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Get in Touch</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              We'd love to<br /><span className="text-[#7BA38C]">hear from you</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-lg">
              Whether you have a question about our services, want to discuss care options, or just need some guidance — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo trust banner */}
      <div className="relative overflow-hidden bg-white border-b border-[#E8E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-6">
            <div className="relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
              <img src={heroImg} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#3A3028]/30" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#3A3028] mb-0.5">Speak to our friendly team</p>
              <p className="text-xs text-[#7A6E62]">We respond to all enquiries within 24 hours — usually much sooner.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <IconPhone className="w-3.5 h-3.5" />, text: '07729 418001' },
                { icon: <IconMail className="w-3.5 h-3.5" />, text: 'Initialcarehomes@outlook.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#7BA38C]">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: <IconPhone className="w-5 h-5" />, label: 'Phone', value: '07729 418001', sub: '02082 900966 · Mon–Fri 8am–6pm' },
                { icon: <IconMail className="w-5 h-5" />, label: 'Email', value: 'Initialcarehomes@outlook.com', sub: 'We respond within 24 hours' },
                { icon: <IconMapPin className="w-5 h-5" />, label: 'Address', value: 'One, Elmfield Park', sub: 'Bromley, England, BR1 1LU' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center text-[#7BA38C] flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs font-semibold text-[#7A6E62] uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="font-bold text-[#3A3028] text-sm">{item.value}</div>
                    <div className="text-xs text-[#7A6E62]">{item.sub}</div>
                  </div>
                </div>
              ))}

              {/* Care photo card replacing map placeholder */}
              <div className="relative rounded-2xl overflow-hidden h-52 shadow-md">
                <img src={heroImg} alt="InitialCare team" className="w-full h-full object-cover object-top" />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,37,32,0.85) 0%, rgba(45,37,32,0.2) 60%, transparent 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconHeart className="w-3.5 h-3.5 text-[#7BA38C]" />
                    <span className="text-white text-xs font-bold">Visit Us</span>
                  </div>
                  <p className="text-white/70 text-xs">One, Elmfield Park, Bromley, BR1 1LU</p>
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow"
                >
                  <div className="flex items-center gap-1.5">
                    <IconMapPin className="w-3 h-3 text-[#7BA38C]" />
                    <span className="text-[10px] font-bold text-[#3A3028]">BR1 1LU</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 text-center shadow-sm h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#EBF2EE] flex items-center justify-center mx-auto mb-5">
                    <IconCheck className="w-8 h-8 text-[#7BA38C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Message Sent!</h2>
                  <p className="text-[#7A6E62] text-sm leading-relaxed max-w-sm">Thank you for getting in touch. We'll respond to your enquiry within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-[#3A3028] mb-6">Send us a message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Full Name</label>
                      <input type="text" value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }) }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${errors.name ? 'border-red-400' : 'border-[#D8D2C8]'}`} />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Email Address</label>
                      <input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }) }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${errors.email ? 'border-red-400' : 'border-[#D8D2C8]'}`} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Phone (optional)</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Subject (optional)</label>
                      <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="e.g. Care enquiry"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Message</label>
                    <textarea value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }) }} rows={5}
                      placeholder="How can we help you?"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all resize-none ${errors.message ? 'border-red-400' : 'border-[#D8D2C8]'}`} />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-3 bg-[#7BA38C] text-white py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-lg hover:shadow-[#7BA38C]/30">
                    <IconMail className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
