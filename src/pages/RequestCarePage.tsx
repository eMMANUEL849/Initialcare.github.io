import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconHeart, IconCheck } from '@/icons'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  postcode: string
  serviceType: string
  startDate: string
  message: string
  relationship: string
}

const serviceOptions = [
  'Personal Care',
  'Meal Preparation',
  'Companionship',
  'Household Support',
  'Specialist Care',
  'Live-In Care',
  'Not sure — please advise',
]

export default function RequestCarePage() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    postcode: '', serviceType: '', startDate: '', message: '', relationship: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.postcode.trim()) e.postcode = 'Required'
    if (!form.serviceType) e.serviceType = 'Please select a service'
    return e
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const field = (name: keyof FormData, label: string, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => { setForm({ ...form, [name]: e.target.value }); setErrors({ ...errors, [name]: undefined }) }}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${
          errors[name] ? 'border-red-400' : 'border-[#D8D2C8]'
        }`}
      />
      {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]}</p>}
    </div>
  )

  if (submitted) {
    return (
      <main className="bg-[#F0EDE6] min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-[#EBF2EE] flex items-center justify-center mx-auto mb-5">
            <IconCheck className="w-8 h-8 text-[#7BA38C]" />
          </div>
          <h2 className="text-2xl font-bold text-[#3A3028] mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Thank you, {form.firstName}!
          </h2>
          <p className="text-[#7A6E62] text-sm leading-relaxed mb-6">
            We've received your care request and a member of our team will be in touch within 24 hours to discuss your needs.
          </p>
          <p className="text-xs text-[#B0A89E]">
            If you need urgent assistance, please call us on <strong className="text-[#3A3028]">07729 418001</strong>
          </p>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="bg-[#F0EDE6]">
      {/* Hero */}
      <section className="bg-[#3A3028] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <IconHeart className="w-3.5 h-3.5 text-[#7BA38C]" />
              <span className="text-xs font-semibold text-[#A8C4B4]">Request Care</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Let's find the right care for you
            </h1>
            <p className="text-[#C4B8AC] leading-relaxed">
              Fill in the form below and one of our friendly care coordinators will be in touch within 24 hours to discuss your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm"
            noValidate
          >
            <h2 className="text-xl font-bold text-[#3A3028] mb-6">Your Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {field('firstName', 'First Name', 'text', 'e.g. Sarah')}
              {field('lastName', 'Last Name', 'text', 'e.g. Johnson')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {field('email', 'Email Address', 'email', 'your@email.com')}
              {field('phone', 'Phone Number', 'tel', '07700 000000')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {field('postcode', 'Postcode', 'text', 'NN4 7HD')}
              <div>
                <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Your Relationship to the Client</label>
                <input
                  type="text"
                  value={form.relationship}
                  onChange={(e) => setForm({ ...form, relationship: e.target.value })}
                  placeholder="e.g. Self, Son, Daughter"
                  className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#3A3028] mb-6">Care Requirements</h2>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Type of Care Required</label>
              <select
                value={form.serviceType}
                onChange={(e) => { setForm({ ...form, serviceType: e.target.value }); setErrors({ ...errors, serviceType: undefined }) }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all ${
                  errors.serviceType ? 'border-red-400' : 'border-[#D8D2C8]'
                }`}
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              {errors.serviceType && <p className="text-xs text-red-500 mt-1">{errors.serviceType}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Preferred Start Date (optional)</label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all"
              />
            </div>

            <div className="mb-8">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Additional Information (optional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell us a bit more about the care needs, any medical conditions, or anything else that would help us understand how to support you..."
                className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#7BA38C] text-white py-4 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all hover:shadow-lg hover:shadow-[#7BA38C]/30"
            >
              <IconHeart className="w-4.5 h-4.5" />
              <span>Submit Care Request</span>
            </button>

            <p className="text-center text-xs text-[#B0A89E] mt-4">
              We'll respond within 24 hours. For urgent enquiries call <strong className="text-[#3A3028]">07729 418001</strong>
            </p>
          </motion.form>
        </div>
      </section>
    </main>
  )
}
