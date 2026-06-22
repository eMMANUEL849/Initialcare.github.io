import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconPhone, IconMail, IconMapPin, IconCheck } from '@/icons'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <main className="bg-[#F0EDE6]">
      <section className="bg-[#3A3028] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <IconMail className="w-3.5 h-3.5 text-[#7BA38C]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Get in Touch</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>We'd love to hear from you</h1>
            <p className="text-[#C4B8AC] leading-relaxed">Whether you have a question about our services, want to discuss care options, or just need some guidance — we're here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
              {[
                { icon: <IconPhone className="w-5 h-5" />, label: 'Phone', value: '0330 133 1919', sub: 'Mon–Fri 8am–6pm, Sat 9am–1pm' },
                { icon: <IconMail className="w-5 h-5" />, label: 'Email', value: 'hello@initialcare.co.uk', sub: 'We respond within 24 hours' },
                { icon: <IconMapPin className="w-5 h-5" />, label: 'Address', value: 'Unit 5, Greenway Court', sub: 'Bedford Road, Northampton, NN4 7HD' },
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

              {/* Map placeholder */}
              <div className="bg-[#EBF2EE] rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <IconMapPin className="w-8 h-8 text-[#7BA38C] mx-auto mb-2" />
                  <p className="text-xs text-[#7A6E62]">Northampton, NN4 7HD</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
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
                    <IconMail className="w-4.5 h-4.5" />
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
