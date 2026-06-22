import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu, IconX, IconHeart, IconUser } from '@/icons'

const navLinks = [
  { label: 'Our Services', href: '/services' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Get in Touch', href: '/contact' },
  { label: 'Join Our Team', href: '/careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5E8A72] transition-colors">
              <IconHeart className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <div className="font-bold text-[#3A3028] text-lg leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                InitialCare
              </div>
              <div className="text-[10px] text-[#7A6E62] leading-tight hidden sm:block">
                Care with heart, every day
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-colors hover:text-[#7BA38C] ${
                  location.pathname === link.href
                    ? 'text-[#7BA38C]'
                    : 'text-[#3A3028]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
                location.pathname === '/login' || location.pathname === '/register'
                  ? 'border-[#7BA38C] text-[#7BA38C] bg-[#EBF2EE]'
                  : 'border-[#D8D2C8] text-[#3A3028] hover:border-[#7BA38C] hover:text-[#7BA38C]'
              }`}
              aria-label="Sign In"
            >
              <IconUser className="w-4.5 h-4.5" />
            </Link>
            <Link
              to="/request-care"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#7BA38C] text-white hover:bg-[#5E8A72] transition-colors"
              aria-label="Request Care"
            >
              <IconHeart className="w-4.5 h-4.5" />
            </Link>
            <button
              className="lg:hidden p-2 text-[#3A3028] hover:text-[#7BA38C] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-[#D8D2C8] overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === link.href
                      ? 'bg-[#EBF2EE] text-[#7BA38C]'
                      : 'text-[#3A3028] hover:bg-[#F7F5F1]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  to="/login"
                  className={`px-4 py-3 rounded-full border text-sm font-bold text-center transition-colors ${
                    location.pathname === '/login' || location.pathname === '/register'
                      ? 'border-[#7BA38C] text-[#7BA38C] bg-[#EBF2EE]'
                      : 'border-[#D8D2C8] text-[#3A3028] hover:border-[#7BA38C] hover:text-[#7BA38C]'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/request-care"
                  className="px-4 py-3 rounded-full bg-[#7BA38C] text-white text-sm font-bold text-center hover:bg-[#5E8A72] transition-colors"
                >
                  Request Care
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
