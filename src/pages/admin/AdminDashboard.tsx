import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  IconHeart, IconGrid, IconClipboard, IconBriefcase, IconMessageSquare,
  IconStar, IconSettings, IconLogOut, IconTrash, IconEdit, IconCheck, IconX
} from '@/icons'

type Tab = 'overview' | 'services' | 'care-requests' | 'applications' | 'enquiries' | 'testimonials'

const mockCareRequests = [
  { id: 1, name: 'John Smith', service: 'Personal Care', date: '2024-06-20', status: 'New', postcode: 'NN4 7HD' },
  { id: 2, name: 'Mary Brown', service: 'Meal Preparation', date: '2024-06-19', status: 'In Progress', postcode: 'NN1 2AB' },
  { id: 3, name: 'Robert Jones', service: 'Companionship', date: '2024-06-18', status: 'Completed', postcode: 'NN3 5CD' },
  { id: 4, name: 'Patricia Davis', service: 'Specialist Care', date: '2024-06-17', status: 'New', postcode: 'NN5 6EF' },
]

const mockApplications = [
  { id: 1, name: 'Emma Wilson', position: 'Care Assistant', date: '2024-06-20', status: 'New' },
  { id: 2, name: 'James Taylor', position: 'Senior Care Worker', date: '2024-06-19', status: 'Reviewed' },
  { id: 3, name: 'Sophie Anderson', position: 'Care Coordinator', date: '2024-06-18', status: 'Shortlisted' },
]

const mockEnquiries = [
  { id: 1, name: 'Helen Clarke', email: 'helen@email.com', subject: 'Care enquiry', date: '2024-06-20', status: 'Unread' },
  { id: 2, name: 'Peter White', email: 'peter@email.com', subject: 'Pricing question', date: '2024-06-19', status: 'Read' },
  { id: 3, name: 'Susan Martin', email: 'susan@email.com', subject: 'Live-in care', date: '2024-06-18', status: 'Replied' },
]

const mockTestimonials = [
  { id: 1, name: 'Sarah J.', role: 'Daughter of Client', quote: 'InitialCare has been a lifeline for our family...', status: 'Approved' },
  { id: 2, name: 'Michael T.', role: 'Son of Client', quote: 'From the very first call, the team made us feel heard...', status: 'Pending' },
  { id: 3, name: 'Margaret W.', role: 'Client', quote: 'I was nervous about accepting help at home...', status: 'Approved' },
]

const statusColors: Record<string, string> = {
  New: 'bg-blue-50 text-blue-700',
  'In Progress': 'bg-yellow-50 text-yellow-700',
  Completed: 'bg-green-50 text-green-700',
  Reviewed: 'bg-purple-50 text-purple-700',
  Shortlisted: 'bg-[#EBF2EE] text-[#5E8A72]',
  Unread: 'bg-red-50 text-red-700',
  Read: 'bg-gray-50 text-gray-600',
  Replied: 'bg-green-50 text-green-700',
  Approved: 'bg-green-50 text-green-700',
  Pending: 'bg-yellow-50 text-yellow-700',
}

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems: { id: Tab; label: string; icon: React.ReactNode; count?: number }[] = [
    { id: 'overview', label: 'Overview', icon: <IconGrid className="w-4.5 h-4.5" /> },
    { id: 'services', label: 'Services', icon: <IconSettings className="w-4.5 h-4.5" /> },
    { id: 'care-requests', label: 'Care Requests', icon: <IconClipboard className="w-4.5 h-4.5" />, count: 2 },
    { id: 'applications', label: 'Applications', icon: <IconBriefcase className="w-4.5 h-4.5" />, count: 1 },
    { id: 'enquiries', label: 'Enquiries', icon: <IconMessageSquare className="w-4.5 h-4.5" />, count: 1 },
    { id: 'testimonials', label: 'Testimonials', icon: <IconStar className="w-4.5 h-4.5" />, count: 1 },
  ]

  const stats = [
    { label: 'Care Requests', value: '4', sub: '2 new', color: 'bg-blue-50 text-blue-700' },
    { label: 'Applications', value: '3', sub: '1 new', color: 'bg-purple-50 text-purple-700' },
    { label: 'Enquiries', value: '3', sub: '1 unread', color: 'bg-red-50 text-red-700' },
    { label: 'Testimonials', value: '3', sub: '1 pending', color: 'bg-yellow-50 text-yellow-700' },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5F1] flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-60 bg-[#3A3028] flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex`}>
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-white/10">
          <div className="w-8 h-8 rounded-full bg-[#7BA38C] flex items-center justify-center flex-shrink-0">
            <IconHeart className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-bold text-white text-sm leading-tight">InitialCare</div>
            <div className="text-[10px] text-[#A8C4B4]">Admin Portal</div>
          </div>
          <button className="ml-auto lg:hidden text-white/60 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <IconX className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-[#7BA38C] text-white'
                  : 'text-[#C4B8AC] hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === item.id ? 'bg-white/20 text-white' : 'bg-[#7BA38C] text-white'}`}>
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#C4B8AC] hover:bg-white/10 hover:text-white transition-colors"
          >
            <IconLogOut className="w-4.5 h-4.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-[#D8D2C8] px-4 sm:px-6 py-4 flex items-center gap-4">
          <button className="lg:hidden text-[#3A3028] hover:text-[#7BA38C] transition-colors" onClick={() => setSidebarOpen(true)}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="font-bold text-[#3A3028] text-lg capitalize">{activeTab.replace('-', ' ')}</h1>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7BA38C] flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="text-sm text-[#3A3028] font-medium hidden sm:block">Admin</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

            {/* Overview */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                      <div className="text-3xl font-bold text-[#3A3028] mb-1">{s.value}</div>
                      <div className="text-sm font-semibold text-[#3A3028] mb-0.5">{s.label}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.color}`}>{s.sub}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-[#3A3028] mb-4 flex items-center gap-2"><IconClipboard className="w-4 h-4 text-[#7BA38C]" /> Recent Care Requests</h3>
                    <div className="space-y-3">
                      {mockCareRequests.slice(0, 3).map((r) => (
                        <div key={r.id} className="flex items-center justify-between py-2 border-b border-[#F0EDE6] last:border-0">
                          <div>
                            <div className="text-sm font-semibold text-[#3A3028]">{r.name}</div>
                            <div className="text-xs text-[#7A6E62]">{r.service} · {r.date}</div>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[r.status]}`}>{r.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-[#3A3028] mb-4 flex items-center gap-2"><IconBriefcase className="w-4 h-4 text-[#7BA38C]" /> Recent Applications</h3>
                    <div className="space-y-3">
                      {mockApplications.map((a) => (
                        <div key={a.id} className="flex items-center justify-between py-2 border-b border-[#F0EDE6] last:border-0">
                          <div>
                            <div className="text-sm font-semibold text-[#3A3028]">{a.name}</div>
                            <div className="text-xs text-[#7A6E62]">{a.position} · {a.date}</div>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[a.status]}`}>{a.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Services */}
            {activeTab === 'services' && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-[#3A3028]">Manage Services</h2>
                  <button className="px-4 py-2 bg-[#7BA38C] text-white text-xs font-bold rounded-full hover:bg-[#5E8A72] transition-colors">+ Add Service</button>
                </div>
                <div className="space-y-3">
                  {['Personal Care', 'Meal Preparation', 'Companionship', 'Household Support', 'Specialist Care', 'Live-In Care'].map((s) => (
                    <div key={s} className="flex items-center justify-between p-4 bg-[#F7F5F1] rounded-xl">
                      <span className="text-sm font-semibold text-[#3A3028]">{s}</span>
                      <div className="flex gap-2">
                        <button className="p-2 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"><IconEdit className="w-4 h-4" /></button>
                        <button className="p-2 text-[#7A6E62] hover:text-red-500 transition-colors"><IconTrash className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Care Requests */}
            {activeTab === 'care-requests' && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-[#F0EDE6] flex items-center justify-between">
                  <h2 className="font-bold text-[#3A3028]">Care Requests</h2>
                  <span className="text-xs text-[#7A6E62]">{mockCareRequests.length} total</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F7F5F1]">
                      <tr>
                        {['Name', 'Service', 'Postcode', 'Date', 'Status', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#7A6E62] uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0EDE6]">
                      {mockCareRequests.map((r) => (
                        <tr key={r.id} className="hover:bg-[#F7F5F1] transition-colors">
                          <td className="px-4 py-3 font-semibold text-[#3A3028]">{r.name}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{r.service}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{r.postcode}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{r.date}</td>
                          <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[r.status]}`}>{r.status}</span></td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <button className="p-1.5 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"><IconEdit className="w-3.5 h-3.5" /></button>
                              <button className="p-1.5 text-[#7A6E62] hover:text-red-500 transition-colors"><IconTrash className="w-3.5 h-3.5" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Applications */}
            {activeTab === 'applications' && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-[#F0EDE6] flex items-center justify-between">
                  <h2 className="font-bold text-[#3A3028]">Job Applications</h2>
                  <span className="text-xs text-[#7A6E62]">{mockApplications.length} total</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F7F5F1]">
                      <tr>
                        {['Applicant', 'Position', 'Date', 'Status', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#7A6E62] uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0EDE6]">
                      {mockApplications.map((a) => (
                        <tr key={a.id} className="hover:bg-[#F7F5F1] transition-colors">
                          <td className="px-4 py-3 font-semibold text-[#3A3028]">{a.name}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{a.position}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{a.date}</td>
                          <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[a.status]}`}>{a.status}</span></td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <button className="p-1.5 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"><IconEdit className="w-3.5 h-3.5" /></button>
                              <button className="p-1.5 text-[#7A6E62] hover:text-red-500 transition-colors"><IconTrash className="w-3.5 h-3.5" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Enquiries */}
            {activeTab === 'enquiries' && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-[#F0EDE6] flex items-center justify-between">
                  <h2 className="font-bold text-[#3A3028]">Contact Enquiries</h2>
                  <span className="text-xs text-[#7A6E62]">{mockEnquiries.length} total</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F7F5F1]">
                      <tr>
                        {['Name', 'Email', 'Subject', 'Date', 'Status', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#7A6E62] uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0EDE6]">
                      {mockEnquiries.map((e) => (
                        <tr key={e.id} className="hover:bg-[#F7F5F1] transition-colors">
                          <td className="px-4 py-3 font-semibold text-[#3A3028]">{e.name}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{e.email}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{e.subject}</td>
                          <td className="px-4 py-3 text-[#7A6E62]">{e.date}</td>
                          <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[e.status]}`}>{e.status}</span></td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <button className="p-1.5 text-[#7A6E62] hover:text-[#7BA38C] transition-colors"><IconEdit className="w-3.5 h-3.5" /></button>
                              <button className="p-1.5 text-[#7A6E62] hover:text-red-500 transition-colors"><IconTrash className="w-3.5 h-3.5" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Testimonials */}
            {activeTab === 'testimonials' && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-[#F0EDE6] flex items-center justify-between">
                  <h2 className="font-bold text-[#3A3028]">Testimonials</h2>
                  <span className="text-xs text-[#7A6E62]">{mockTestimonials.length} total</span>
                </div>
                <div className="divide-y divide-[#F0EDE6]">
                  {mockTestimonials.map((t) => (
                    <div key={t.id} className="p-5 hover:bg-[#F7F5F1] transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-[#3A3028] text-sm">{t.name}</span>
                            <span className="text-xs text-[#7A6E62]">· {t.role}</span>
                          </div>
                          <p className="text-xs text-[#7A6E62] leading-relaxed">"{t.quote}"</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[t.status]}`}>{t.status}</span>
                          {t.status === 'Pending' && (
                            <button className="p-1.5 text-[#7BA38C] hover:bg-[#EBF2EE] rounded-lg transition-colors"><IconCheck className="w-3.5 h-3.5" /></button>
                          )}
                          <button className="p-1.5 text-[#7A6E62] hover:text-red-500 transition-colors"><IconTrash className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </main>
      </div>
    </div>
  )
}


