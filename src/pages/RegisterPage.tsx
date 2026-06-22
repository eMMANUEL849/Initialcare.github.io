import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import heroImg from '@/assets/hero.png'
import {
  IconHeart, IconMail, IconLock, IconEye, IconEyeOff,
  IconUser, IconPhone, IconCheck, IconShield
} from '@/icons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const }
  })
}

const benefits = [
  {
    icon: <IconHeart className="w-4 h-4 text-white" />,
    title: 'Personalised Care Plans',
    desc: 'Tailored to your unique needs and preferences',
  },
  {
    icon: <IconShield className="w-4 h-4 text-white" />,
    title: 'Vetted Professionals',
    desc: 'DBS-checked, trained care workers you can trust',
  },
  {
    icon: <IconCheck className="w-4 h-4 text-white" />,
    title: 'Round-the-Clock Support',
    desc: '24/7 helpline for you and your family',
  },
]

function PasswordStrength({ password }: { password: string }) {
  if (!password) return null

  const checks = [
    { label: '8+ characters', ok: password.length >= 8 },
    { label: 'Uppercase', ok: /[A-Z]/.test(password) },
    { label: 'Number', ok: /\d/.test(password) },
  ]
  const strength = checks.filter(c => c.ok).length
  const barColors = ['bg-red-400', 'bg-red-400', 'bg-yellow-400', 'bg-[#7BA38C]']

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2"
    >
      <div className="flex gap-1 mb-1.5">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full transition-all duration-300 ${
              i < strength ? barColors[strength] : 'bg-[#D8D2C8]'
            }`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-3">
        {checks.map(c => (
          <span
            key={c.label}
            className={`text-[10px] flex items-center gap-1 transition-colors ${
              c.ok ? 'text-[#5E8A72]' : 'text-[#B0A89E]'
            }`}
          >
            <IconCheck className={`w-3 h-3 ${c.ok ? 'opacity-100' : 'opacity-30'}`} />
            {c.label}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirm: ''
  })
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Please fill in all required fields.')
      return
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (!agreed) {
      setError('Please accept the terms and conditions to continue.')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => navigate('/login'), 1600)
  }

  const confirmMatch = form.confirm.length > 0 && form.confirm === form.password
  const confirmMismatch = form.confirm.length > 0 && form.confirm !== form.password

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* ── Left panel ── */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex lg:w-[44%] relative overflow-hidden flex-col"
      >
        <img
          src={heroImg}
          alt="InitialCare — join our family"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2520]/92 via-[#3A3028]/75 to-[#5E8A72]/65" />

        {/* decorative circles */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-white/10" />

        {/* floating avatar card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="absolute top-1/3 right-6 bg-white/12 backdrop-blur-md rounded-2xl p-4 border border-white/20"
        >
          <div className="text-white/80 text-[10px] font-semibold uppercase tracking-wide mb-2.5">
            Trusted by families
          </div>
          <div className="flex -space-x-2 mb-2">
            {['#7BA38C', '#A8C4B4', '#5C4F3D', '#3A3028', '#7BA38C'].map((bg, i) => (
              <div
                key={i}
                style={{ backgroundColor: bg }}
                className="w-7 h-7 rounded-full border-2 border-white/25 flex items-center justify-center"
              >
                <IconUser className="w-3 h-3 text-white" />
              </div>
            ))}
          </div>
          <div className="text-white font-bold text-sm">500+ families</div>
          <div className="text-white/60 text-[10px]">trust InitialCare</div>
        </motion.div>

        <div className="relative z-10 flex flex-col justify-between h-full p-10">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <IconHeart className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-xl leading-tight">InitialCare</div>
              <div className="text-white/55 text-xs">Care with heart, every day</div>
            </div>
          </div>

          {/* headline + benefit list */}
          <div>
            <h2
              className="text-white text-2xl font-bold leading-snug mb-6"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Join our family of care
            </h2>
            <div className="space-y-4">
              {benefits.map(b => (
                <div key={b.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#7BA38C]/60 flex items-center justify-center flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{b.title}</div>
                    <div className="text-white/60 text-xs mt-0.5">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Right panel ── */}
      <div className="flex-1 bg-[#F0EDE6] flex items-center justify-center px-6 py-10 overflow-y-auto">
        <div className="w-full max-w-sm">
          {/* mobile logo */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-2.5 mb-6 lg:hidden"
          >
            <div className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center">
              <IconHeart className="w-4 h-4 text-white" />
            </div>
            <div className="font-bold text-[#3A3028] text-lg leading-tight">InitialCare</div>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1
              className="text-3xl font-bold text-[#3A3028] mb-1"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Create your account
            </h1>
            <p className="text-sm text-[#7A6E62] mb-7">
              Start your care journey with InitialCare today
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} noValidate>
            {/* full name */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">
                Full Name <span className="text-[#7BA38C]">*</span>
              </label>
              <div className="relative">
                <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Jane Smith"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] focus:border-transparent transition-all"
                />
              </div>
            </motion.div>

            {/* email */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">
                Email Address <span className="text-[#7BA38C]">*</span>
              </label>
              <div className="relative">
                <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="jane@example.com"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] focus:border-transparent transition-all"
                />
              </div>
            </motion.div>

            {/* phone (optional) */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">
                Phone Number{' '}
                <span className="text-[#B0A89E] font-normal">(optional)</span>
              </label>
              <div className="relative">
                <IconPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+44 7700 000000"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] focus:border-transparent transition-all"
                />
              </div>
            </motion.div>

            {/* password */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">
                Password <span className="text-[#7BA38C]">*</span>
              </label>
              <div className="relative">
                <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={set('password')}
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-11 py-3.5 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
                </button>
              </div>
              <PasswordStrength password={form.password} />
            </motion.div>

            {/* confirm password */}
            <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">
                Confirm Password <span className="text-[#7BA38C]">*</span>
              </label>
              <div className="relative">
                <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={form.confirm}
                  onChange={set('confirm')}
                  placeholder="Re-enter your password"
                  className={`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 transition-all ${
                    confirmMismatch
                      ? 'border-red-300 focus:ring-red-300'
                      : confirmMatch
                      ? 'border-[#7BA38C] focus:ring-[#7BA38C]'
                      : 'border-[#D8D2C8] focus:ring-[#7BA38C] focus:border-transparent'
                  }`}
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  <AnimatePresence>
                    {confirmMatch && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                      >
                        <IconCheck className="w-4 h-4 text-[#7BA38C]" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    onClick={() => setShowConfirm(v => !v)}
                    className="text-[#7A6E62] hover:text-[#7BA38C] transition-colors"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* terms */}
            <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded accent-[#7BA38C] flex-shrink-0"
                />
                <span className="text-xs text-[#7A6E62] leading-relaxed">
                  I agree to InitialCare's{' '}
                  <Link to="#" className="text-[#7BA38C] font-semibold hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="#" className="text-[#7BA38C] font-semibold hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </motion.div>

            {/* error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4"
                >
                  <p className="text-xs text-red-600">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* success */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#EBF2EE] border border-[#A8C4B4] rounded-xl px-4 py-3 mb-4"
                >
                  <p className="text-xs text-[#5E8A72] font-semibold">
                    Account created! Taking you to sign in...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* submit */}
            <motion.div custom={8} variants={fadeUp} initial="hidden" animate="visible">
              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="w-full flex items-center justify-center gap-2 bg-[#7BA38C] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all disabled:opacity-60 shadow-sm hover:shadow-lg hover:shadow-[#7BA38C]/25"
              >
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <IconHeart className="w-4 h-4" />
                )}
                <span>{loading ? 'Creating account...' : 'Create Account'}</span>
              </motion.button>
            </motion.div>
          </form>

          {/* login link */}
          <motion.p
            custom={9} variants={fadeUp} initial="hidden" animate="visible"
            className="text-center text-sm text-[#7A6E62] mt-6"
          >
            Already have an account?{' '}
            <Link to="/login" className="text-[#7BA38C] font-bold hover:text-[#5E8A72] transition-colors">
              Sign in
            </Link>
          </motion.p>

          <motion.div
            custom={10} variants={fadeUp} initial="hidden" animate="visible"
            className="text-center mt-3"
          >
            <Link to="/" className="text-xs text-[#B0A89E] hover:text-[#7A6E62] transition-colors">
              ← Back to InitialCare
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
