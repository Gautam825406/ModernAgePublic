function TestimonialCard({ item }) {
  return (
    <article className="card-3d rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
      <p className="text-sm leading-relaxed text-slate-700">"{item.quote}"</p>
      <div className="mt-5 border-t border-brand-100 pt-4">
        <p className="font-heading text-lg font-bold text-brand-950">{item.name}</p>
        <p className="text-sm font-medium text-brand-600">{item.role}</p>
      </div>
    </article>
  )
}

export default TestimonialCard
