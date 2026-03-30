import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppToggle from '../common/WhatsAppToggle'

function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-brand-50/30 text-slate-900">
      <Navbar />
      <main id="main-content" className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppToggle />
    </div>
  )
}

export default MainLayout
