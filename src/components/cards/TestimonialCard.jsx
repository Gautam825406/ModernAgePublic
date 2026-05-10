const cardColors = ['card-blue', 'card-green', 'card-pink']

function TestimonialCard({ item, index = 0 }) {
  return (
    <article className={`card-3d ribbon-shimmer rounded-2xl border p-6 shadow-card h-full flex flex-col ${cardColors[index % cardColors.length]}`}>
      <div className="stars-row mb-3">
        {'★★★★★'.split('').map((star, i) => (
          <span key={i} className="star-twinkle" style={{ animationDelay: `${i * 0.2}s` }}>{star}</span>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-700 flex-1">"{item.quote}"</p>
      <div className="mt-5 border-t border-white/60 pt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 font-heading text-lg font-bold text-brand-700 shadow-card shrink-0">
          {item.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-base font-bold text-brand-950">{item.name}</p>
          <p className="text-xs font-medium text-brand-600">{item.role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
