import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import { facilities } from '../data/siteData'

function Facilities() {
  return (
    <>
      <PageHero
        title="Facilities"
        subtitle="Our campus infrastructure is designed to support academic excellence, practical learning, and student safety."
      />

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Campus Infrastructure"
            title="Spaces that support holistic learning"
            description="From modern labs and classrooms to safe transport and sports grounds, our facilities create a complete school experience."
          />
        </RevealSection>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {facilities.map((item, index) => (
            <RevealSection key={item.name} delay={index * 80}>
              <article className="h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="font-heading text-xl font-bold text-brand-950">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default Facilities
