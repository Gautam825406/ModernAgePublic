function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <header className={`mb-10 max-w-3xl ${alignClass}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance font-heading text-3xl font-bold text-brand-950 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">{description}</p>
      ) : null}
    </header>
  )
}

export default SectionHeading
