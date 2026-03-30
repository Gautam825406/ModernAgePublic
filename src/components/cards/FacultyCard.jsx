function FacultyCard({ member }) {
  return (
    <article className="card-3d group rounded-2xl border border-brand-100 bg-white p-5 shadow-card transition duration-300 hover:shadow-soft">
      <img
        src={member.image}
        alt={`${member.name} profile placeholder`}
        className="h-44 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.03]"
      />
      <h3 className="mt-4 font-heading text-xl font-bold text-brand-950">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-600">{member.designation}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{member.description}</p>
    </article>
  )
}

export default FacultyCard
