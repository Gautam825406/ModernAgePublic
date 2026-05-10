import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../../data/siteData'
import schoolLogo from '../../assets/logo.png'

const navEmojis = { Home: '🏠', 'About Us': '📖', Academics: '📚', Faculty: '👩‍🏫', Facilities: '🏫', 'Student Life': '🎭', Gallery: '🖼️', Notices: '📢', Handbook: '📋' }

function Navbar() {
  const [open, setOpen] = useState(false)

  const desktopLinkClass = ({ isActive }) =>
    `relative rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-soft'
        : 'text-slate-700 hover:-translate-y-0.5 hover:bg-white hover:text-brand-900 hover:shadow-card'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/40 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20">

        {/* ── Logo ── */}
        <Link to="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="Go to homepage">
          <div className="relative">
            <img
              src={schoolLogo}
              alt="Modern Age Public School logo"
              className="h-10 w-10 rounded-full border-2 border-brand-200 bg-white p-1 shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-11 sm:w-11"
            />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-green-400 badge-glow" title="Admissions Open" />
          </div>
          <div className="leading-tight">
            <p className="font-heading text-sm font-bold text-brand-950 sm:text-base lg:text-lg">MAPS</p>
            <p className="font-heading text-base font-extrabold text-brand-700 sm:text-lg lg:text-xl">Mayurhand</p>
            <p className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-500 sm:block">Excellence in Learning</p>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav id="primary-navigation" className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={desktopLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <div className="pulse-cta rounded-full">
            <Link
              to="/admissions"
              className="btn-3d inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-accent-300 to-accent-500 px-5 py-2.5 text-sm font-bold text-brand-950 transition hover:from-accent-200 hover:to-accent-400"
            >
              <span className="star-twinkle">✦</span> Apply Now
            </Link>
          </div>
          <Link
            to="/contact"
            className="btn-3d rounded-full border border-brand-100 bg-white/85 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-white"
          >
            Contact Us
          </Link>
        </div>

        {/* ── Mobile: quick Apply + hamburger ── */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/admissions"
            className="rounded-full bg-gradient-to-br from-accent-300 to-accent-500 px-3.5 py-1.5 text-xs font-bold text-brand-950 shadow-card active:scale-95"
            onClick={() => setOpen(false)}
          >
            Apply
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-100 bg-white/70 text-brand-900 shadow-card transition hover:bg-brand-50 active:scale-95"
            onClick={() => setOpen((p) => !p)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="block text-lg leading-none transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'none' }}>
              {open ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <nav
          id="mobile-nav"
          className="glass-panel border-t border-white/25 bg-white/80 px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
          style={{ animation: 'csIn 0.22s ease-out both' }}
        >
          <div className="container space-y-1.5">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-soft'
                      : 'bg-white text-brand-900 shadow-card hover:bg-brand-50'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <span className="text-base">{navEmojis[item.label] ?? '•'}</span>
                {item.label}
              </NavLink>
            ))}

            {/* Admission & Contact row */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                to="/admissions"
                className="btn-3d flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-accent-300 to-accent-500 px-4 py-3 text-sm font-bold text-brand-950 active:scale-95"
                onClick={() => setOpen(false)}
              >
                <span className="star-twinkle text-xs">✦</span> Apply Now
              </Link>
              <Link
                to="/contact"
                className="btn-3d flex items-center justify-center rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm font-semibold text-brand-900 active:scale-95"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Admissions open badge */}
            <div className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 py-2 text-xs font-semibold text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-500 badge-glow" />
              Admissions Open — Session 2026-27
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
