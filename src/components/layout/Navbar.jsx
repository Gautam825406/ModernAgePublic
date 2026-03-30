import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../../data/siteData'
import schoolLogo from '../../assets/logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-soft'
        : 'text-slate-700 hover:-translate-y-0.5 hover:bg-white hover:text-brand-900 hover:shadow-card'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/40 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <img
            src={schoolLogo}
            alt="Modern Age Public School logo"
            className="h-11 w-11 rounded-full border border-brand-100 bg-white p-1 shadow-card"
          />
          <div className="leading-tight">
            <p className="font-heading text-base font-bold text-brand-950 sm:text-lg">MAPS</p>
            <p className="font-heading text-lg font-extrabold text-brand-700 sm:text-xl">Mayurhand</p>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-brand-500">Excellence in Learning</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-100 bg-white/70 text-brand-900 shadow-card lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          <span className="text-xl">{open ? 'x' : '='}</span>
        </button>

        <nav id="primary-navigation" className="hidden flex-1 items-center justify-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/admissions"
            className="btn-3d rounded-full bg-gradient-to-br from-accent-300 to-accent-500 px-5 py-2.5 text-sm font-bold text-brand-950 transition hover:from-accent-200 hover:to-accent-400"
          >
            Apply Now
          </Link>
          <Link
            to="/contact"
            className="btn-3d rounded-full border border-brand-100 bg-white/85 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {open ? (
        <nav className="glass-panel border-t border-white/20 bg-white/65 px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="container grid gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-soft'
                      : 'bg-white text-brand-900 shadow-card'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Link
                to="/admissions"
                className="btn-3d rounded-lg bg-gradient-to-r from-accent-300 to-accent-500 px-4 py-3 text-center text-sm font-bold text-brand-950"
                onClick={() => setOpen(false)}
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="btn-3d rounded-lg border border-brand-100 bg-white px-4 py-3 text-center text-sm font-semibold text-brand-900"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
