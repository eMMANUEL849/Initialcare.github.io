import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import RequestCarePage from '@/pages/RequestCarePage'
import CareersPage from '@/pages/CareersPage'
import TestimonialsPage from '@/pages/TestimonialsPage'
import ContactPage from '@/pages/ContactPage'
import AdminLogin from '@/pages/admin/AdminLogin'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

function AdminRoute() {
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('adminAuth') === 'true')
  if (!loggedIn) return (
    <AdminLogin onLogin={() => {
      sessionStorage.setItem('adminAuth', 'true')
      setLoggedIn(true)
    }} />
  )
  return (
    <AdminDashboard onLogout={() => {
      sessionStorage.removeItem('adminAuth')
      setLoggedIn(false)
    }} />
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
        <Route path="/request-care" element={<PublicLayout><RequestCarePage /></PublicLayout>} />
        <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
        <Route path="/testimonials" element={<PublicLayout><TestimonialsPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
