import CTAButton from './CTAButton'

function PageHero({ title, subtitle, ctaText = 'Contact Us', ctaTo = '/contact' }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(54,166,188,0.35),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(250,189,47,0.25),transparent_38%)]" />
      <div className="floating-orb left-[6%] top-16 h-24 w-24 bg-cyan-200/30" />
      <div className="floating-orb right-[12%] top-10 h-28 w-28 bg-amber-200/25" />
      <div className="floating-orb bottom-10 right-[28%] h-20 w-20 bg-white/20" />
      <div className="container relative z-10">
        <div className="glass-panel max-w-4xl rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-brand-100 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8">
            <CTAButton to={ctaTo} variant="accent">
              {ctaText}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
