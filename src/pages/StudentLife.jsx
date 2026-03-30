import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import { studentLife } from '../data/siteData'

function StudentLife() {
  const blocks = [
    { title: 'Sports', value: studentLife.sports },
    { title: 'Cultural Activities', value: studentLife.cultural },
    { title: 'Events', value: studentLife.events },
    { title: 'Clubs', value: studentLife.clubs },
    { title: 'Achievements', value: studentLife.achievements },
  ]

  return (
    <>
      <PageHero
        title="Student Life"
        subtitle="Beyond classrooms, students grow through sports, culture, leadership, and collaborative experiences."
      />

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Beyond Academics"
            title="A vibrant and engaging school life"
            description="We encourage students to discover talents, build teamwork, and develop confidence through year-round activities."
          />
        </RevealSection>

        <div className="grid gap-5 md:grid-cols-2">
          {blocks.map((item, index) => (
            <RevealSection key={item.title} delay={index * 80}>
              <article className="h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                <h3 className="font-heading text-xl font-bold text-brand-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.value}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default StudentLife
