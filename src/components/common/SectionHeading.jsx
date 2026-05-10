function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  const alignClass = isCenter ? 'text-center mx-auto' : ''

  return (
    <header className={`mb-8 max-w-3xl sm:mb-10 ${alignClass}`.trim()}>
      {eyebrow ? (
        <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.24em] text-brand-600">
          <span className="star-twinkle text-accent-400 text-[0.6rem]">✦</span>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-heading text-2xl font-bold text-brand-950 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base sm:mt-4">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export default SectionHeading
