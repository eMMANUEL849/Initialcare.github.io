import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImg from '@/assets/hero.png'
import {
  IconHeart, IconMail, IconLock, IconEye, IconEyeOff, IconArrowRight, IconCheck
} from '@/icons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }
  })
}

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
]

const benefits = [
  'Personalised care in your own home',
  'Fully vetted & trained professionals',
  'Flexible scheduling to suit your life',
]

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    if (email === 'user@initialcare.co.uk' && password === 'care123') {
      setSuccess(true)
      setTimeout(() => navigate('/'), 1400)
    } else {
      setError('Invalid credentials. Try user@initialcare.co.uk / care123')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* ── Left panel ── */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex lg:w-[52%] relative overflow-hidden"
      >
        <img
          src={heroImg}
          alt="InitialCare — compassionate home care"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2520]/90 via-[#3A3028]/70 to-[#5E8A72]/60" />

        {/* decorative rings */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full border border-white/10" />

        {/* leaf decoration */}
        <div className="absolute bottom-0 right-0 w-56 h-56 opacity-15 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M180 20C100 40 60 120 20 190L40 200l10-25a50 50 0 0 0 20 5C170 180 200 20 200 20c-10 20-80 20-80 20 0-20 20-40 20-40S60 10 60 70c0 20 20 40 20 40s-20 0-20 20c0 10 10 20 10 20s-10 10-10 20c0 10 10 20 10 20"
              stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute top-1/4 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
        >
          <div className="text-white/80 text-[10px] font-semibold uppercase tracking-wide mb-2">Trusted across the UK</div>
          <div className="flex gap-5">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-white font-bold text-xl leading-tight">{s.value}</div>
                <div className="text-white/60 text-[10px] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 flex flex-col justify-between h-full p-12">
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

          {/* quote + benefits */}
          <div className="max-w-xs">
            <blockquote
              className="text-white text-2xl font-bold leading-snug mb-5"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              "Every moment of care is a moment of love shared."
            </blockquote>
            <div className="space-y-2.5">
              {benefits.map(b => (
                <div key={b} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#7BA38C]/70 flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/75 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Right panel ── */}
      <div className="flex-1 bg-[#F0EDE6] flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-sm">
          {/* mobile logo */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-2.5 mb-8 lg:hidden"
          >
            <div className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center">
              <IconHeart className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-[#3A3028] text-lg leading-tight">InitialCare</div>
              <div className="text-[10px] text-[#7A6E62]">Care with heart, every day</div>
            </div>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1
              className="text-3xl font-bold text-[#3A3028] mb-1"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Welcome back
            </h1>
            <p className="text-sm text-[#7A6E62] mb-8">Sign in to your InitialCare account</p>
          </motion.div>

          <form onSubmit={handleSubmit} noValidate>
            {/* email */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mb-4">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Email Address</label>
              <div className="relative">
                <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] focus:border-transparent transition-all"
                />
              </div>
            </motion.div>

            {/* password */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mb-2">
              <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Password</label>
              <div className="relative">
                <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E]" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3.5 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#C0BAB2] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* remember / forgot */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center justify-between mb-6"
            >
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#7BA38C]"
                />
                <span className="text-xs text-[#7A6E62]">Remember me</span>
              </label>
              <Link to="#" className="text-xs text-[#7BA38C] hover:text-[#5E8A72] font-semibold transition-colors">
                Forgot password?
              </Link>
            </motion.div>

            {/* error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4"
              >
                <p className="text-xs text-red-600">{error}</p>
              </motion.div>
            )}

            {/* success */}
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#EBF2EE] border border-[#A8C4B4] rounded-xl px-4 py-3 mb-4"
              >
                <p className="text-xs text-[#5E8A72] font-semibold">Signed in! Redirecting you now...</p>
              </motion.div>
            )}

            {/* submit */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible">
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
                <span>{loading ? 'Signing in...' : 'Sign In'}</span>
                {!loading && !success && <IconArrowRight className="w-4 h-4 ml-auto" />}
              </motion.button>
            </motion.div>
          </form>

          {/* divider */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-3 my-6"
          >
            <div className="flex-1 h-px bg-[#D8D2C8]" />
            <span className="text-xs text-[#B0A89E]">or continue with</span>
            <div className="flex-1 h-px bg-[#D8D2C8]" />
          </motion.div>

          {/* Google SSO (visual) */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-[#D8D2C8] text-[#3A3028] py-3.5 rounded-full font-semibold text-sm hover:bg-[#F7F5F1] hover:border-[#B0A89E] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </motion.div>

          {/* register link */}
          <motion.p
            custom={8} variants={fadeUp} initial="hidden" animate="visible"
            className="text-center text-sm text-[#7A6E62] mt-8"
          >
            Don't have an account?{' '}
            <Link to="/register" className="text-[#7BA38C] font-bold hover:text-[#5E8A72] transition-colors">
              Create one free
            </Link>
          </motion.p>

          <motion.div
            custom={9} variants={fadeUp} initial="hidden" animate="visible"
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
