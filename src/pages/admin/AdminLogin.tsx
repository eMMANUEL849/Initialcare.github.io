import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconLock, IconEye, IconEyeOff, IconHeart } from '@/icons'

interface AdminLoginProps {
  onLogin: () => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) { setError('Please enter your email and password.'); return }
    setLoading(true)
    // Demo: accept admin@initialcare.co.uk / admin123
    await new Promise((r) => setTimeout(r, 800))
    if (email === 'admin@initialcare.co.uk' && password === 'admin123') {
      onLogin()
    } else {
      setError('Invalid email or password. Try admin@initialcare.co.uk / admin123')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#F0EDE6] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-sm"
      >
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center">
            <IconHeart className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <div className="font-bold text-[#3A3028] text-lg leading-tight">InitialCare</div>
            <div className="text-[10px] text-[#7A6E62]">Admin Portal</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <IconLock className="w-4 h-4 text-[#7BA38C]" />
          <h1 className="font-bold text-[#3A3028] text-lg">Sign In</h1>
        </div>
        <p className="text-xs text-[#7A6E62] mb-6">Secure administrator access</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@initialcare.co.uk"
              className="w-full px-4 py-3 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all"
            />
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold text-[#3A3028] mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-11 rounded-xl border border-[#D8D2C8] text-sm text-[#3A3028] bg-white placeholder-[#B0A89E] focus:outline-none focus:ring-2 focus:ring-[#7BA38C] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#7BA38C] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#5E8A72] transition-all disabled:opacity-60"
          >
            {loading ? (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <IconLock className="w-4 h-4" />
            )}
            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
          </button>
        </form>
      </motion.div>
    </div>
  )
}
