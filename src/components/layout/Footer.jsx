import { Link } from 'react-router-dom'
import { footerQuickLinks, schoolProfile } from '../../data/siteData'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-brand-950 text-brand-100">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <section>
          <h3 className="font-heading text-xl font-bold text-white">{schoolProfile.shortName}</h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-100/90">{schoolProfile.welcome}</p>
        </section>

        <section>
          <h3 className="font-heading text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerQuickLinks.map((item) => (
              <li key={item.path}>
                <Link className="transition hover:text-accent-300" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-lg font-bold text-white">Contact Details</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-100/90">
            <li>{schoolProfile.address}</li>
            <li>{schoolProfile.phone}</li>
            <li>{schoolProfile.email}</li>
            <li>{schoolProfile.officeHours}</li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-lg font-bold text-white">Social Media</h3>
          <div className="mt-4 flex gap-3">
            {['FB', 'IG', 'YT', 'IN'].map((item) => (
              <a
                key={item}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-600 text-xs font-bold tracking-wide transition hover:border-accent-300 hover:text-accent-300"
                aria-label={`${item} social link placeholder`}
              >
                {item}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-brand-100/80">Social links are placeholders and can be updated later.</p>
        </section>
      </div>
      <div className="border-t border-brand-800 py-5 text-center text-sm text-brand-100/80">
        Copyright {year} {schoolProfile.name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
