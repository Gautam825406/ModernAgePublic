import { Link } from 'react-router-dom'
import { footerQuickLinks, schoolProfile } from '../../data/siteData'

const socialIcons = { FB: '📘', IG: '📸', YT: '▶️', IN: '💼' }

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 relative overflow-hidden bg-brand-950 text-brand-100">
      {/* Decorative orbs inside footer */}
      <div className="floating-orb left-8 top-10 h-24 w-24 bg-cyan-400/10" />
      <div className="floating-orb right-12 top-20 h-20 w-20 bg-amber-300/10" />
      <div className="floating-orb left-[45%] bottom-6 h-14 w-14 bg-white/8" />

      {/* Top accent bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #36a6bc, #fabc2f, #f39b1f, #36a6bc)', backgroundSize: '200% auto', animation: 'shimmerSlide 4s linear infinite' }} />

      <div className="container relative z-10 grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <section>
          <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <span className="star-twinkle text-accent-300">✦</span>
            {schoolProfile.shortName}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-100/90">{schoolProfile.welcome}</p>
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-brand-700 bg-brand-900/50 px-3 py-2 w-fit">
            <span className="h-2 w-2 rounded-full bg-green-400 badge-glow shrink-0" />
            <span className="text-xs font-semibold text-brand-200">Admissions Open 2026-27</span>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h3 className="font-heading text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {footerQuickLinks.map((item) => (
              <li key={item.path}>
                <Link
                  className="flex items-center gap-2 transition-all hover:text-accent-300 hover:translate-x-1 duration-200"
                  to={item.path}
                >
                  <span className="text-brand-500 text-xs">›</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h3 className="font-heading text-lg font-bold text-white mb-4">Contact Details</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-brand-100/90">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0">📍</span>
              {schoolProfile.address}
            </li>
            <li className="flex items-center gap-2">
              <span className="shrink-0">📞</span>
              {schoolProfile.phone}
            </li>
            <li className="flex items-center gap-2">
              <span className="shrink-0">✉️</span>
              {schoolProfile.email}
            </li>
            <li className="flex items-center gap-2">
              <span className="shrink-0">🕐</span>
              {schoolProfile.officeHours}
            </li>
          </ul>
        </section>

        {/* Social */}
        <section>
          <h3 className="font-heading text-lg font-bold text-white mb-4">Social Media</h3>
          <div className="flex gap-3 flex-wrap">
            {Object.entries(socialIcons).map(([key, icon]) => (
              <a
                key={key}
                href="#"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-600 text-base transition-all duration-300 hover:border-accent-300 hover:text-accent-300 hover:-translate-y-1 hover:shadow-soft"
                aria-label={`${key} social link placeholder`}
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-brand-100/70">Social links are placeholders and can be updated later.</p>

          {/* Mini CTA */}
          <Link
            to="/admissions"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 px-4 py-2 text-xs font-bold text-brand-950 transition hover:from-accent-300 hover:to-accent-400 pulse-cta"
          >
            <span className="star-twinkle">✦</span> Apply Now
          </Link>
        </section>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-brand-800 py-5 text-center text-sm text-brand-100/70">
        <span className="star-twinkle mr-1 text-accent-400">✦</span>
        Copyright {year} {schoolProfile.name}. All rights reserved.
        <span className="star-twinkle ml-1 text-accent-400">✦</span>
      </div>
    </footer>
  )
}

export default Footer
