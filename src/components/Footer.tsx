import { Link } from 'react-router-dom'
import { IconHeart, IconPhone, IconMail, IconMapPin, IconFacebook, IconInstagram, IconLinkedin } from '@/icons'

export default function Footer() {
  return (
    <footer className="bg-[#3A3028] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#7BA38C] flex items-center justify-center flex-shrink-0">
                <IconHeart className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">InitialCare</div>
                <div className="text-[10px] text-[#A8C4B4] leading-tight">Care with heart, every day</div>
              </div>
            </div>
            <p className="text-sm text-[#C4B8AC] leading-relaxed mb-5">
              Providing compassionate, personalised care and support in the comfort of your own home.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7BA38C] transition-colors">
                <IconFacebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7BA38C] transition-colors">
                <IconInstagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7BA38C] transition-colors">
                <IconLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#C4B8AC]">
                <IconPhone className="w-4 h-4 text-[#7BA38C] mt-0.5 flex-shrink-0" />
                <span>07729 418001<br />02082 900966</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#C4B8AC]">
                <IconMail className="w-4 h-4 text-[#7BA38C] mt-0.5 flex-shrink-0" />
                <span>Initialcarehomes@outlook.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#C4B8AC]">
                <IconMapPin className="w-4 h-4 text-[#7BA38C] mt-0.5 flex-shrink-0" />
                <span>One, Elmfield Park,<br />Bromley, England,<br />BR1 1LU</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Our Services', href: '/services' },
                { label: 'Who We Are', href: '/about' },
                { label: 'Get in Touch', href: '/contact' },
                { label: 'Join Our Team', href: '/careers' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-[#C4B8AC] hover:text-[#7BA38C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="bg-[#7BA38C]/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <IconLeafSmall />
                <span className="text-xs font-semibold text-[#A8C4B4] uppercase tracking-wider">Care starts</span>
              </div>
              <p className="text-white font-bold text-lg leading-snug mb-4">
                Care starts with a conversation
              </p>
              <p className="text-sm text-[#C4B8AC] mb-4">
                We're here to listen and help you find the right support.
              </p>
              <Link
                to="/request-care"
                className="flex items-center justify-between px-4 py-3 bg-[#7BA38C] rounded-full text-white text-sm font-bold hover:bg-[#5E8A72] transition-colors group"
              >
                <span>Request Care</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#7A6E62]">© 2024 InitialCare. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-[#7A6E62]">
            <IconHeart className="w-3 h-3 text-[#7BA38C]" />
            <span>Proud to care in our local communities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function IconLeafSmall() {
  return (
    <svg className="w-3.5 h-3.5 text-[#7BA38C]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-2 2-4 2-4S8 2 8 8c0 2 2 4 2 4s-2 0-2 2c0 1 1 2 1 2" />
    </svg>
  )
}
