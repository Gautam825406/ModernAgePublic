import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import {
  academicCalendar,
  academicPathway,
  classesOffered,
  curriculumDetails,
  examinationSystem,
  teachingMethodology,
} from '../data/siteData'

function Academics() {
  const blocks = [
    { title: 'Classes Offered', items: classesOffered },
    { title: 'Curriculum Details', items: curriculumDetails },
    { title: 'Teaching Methodology', items: teachingMethodology },
    { title: 'Examination System', items: examinationSystem },
  ]

  return (
    <>
      <PageHero
        title="Academics"
        subtitle="A structured and engaging academic framework designed to build strong concepts and future-ready skills."
        ctaText="Learn About Admissions"
        ctaTo="/admissions"
      />

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Academic Excellence"
            title="Comprehensive curriculum and student-centered learning"
            description="Our academic program combines conceptual clarity, practical exposure, and regular progress tracking."
          />
        </RevealSection>

        <div className="grid gap-6 lg:grid-cols-2">
          {blocks.map((block, index) => (
            <RevealSection key={block.title} delay={index * 80}>
              <article className="h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
                <h3 className="font-heading text-2xl font-bold text-brand-950">{block.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Academic Calendar"
            title="Session roadmap"
            description="The calendar helps students and parents plan assessments, activities, and key academic milestones."
          />
        </RevealSection>

        <div className="grid gap-4 md:grid-cols-2">
          {academicCalendar.map((item, index) => (
            <RevealSection key={item.term} delay={index * 80}>
              <article className="rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{item.term}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Nursery to Class X"
            title="Academic pathway for every milestone"
            description="Families in Mayurhand and Chatra can rely on a single campus for the entire schooling journey. Each stage receives a curated blend of methodology, labs, and assessments."
          />
        </RevealSection>
        <div className="grid gap-5 md:grid-cols-2">
          {academicPathway.map((item, index) => (
            <RevealSection key={item.stage} delay={index * 90}>
              <article className="card-3d h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{item.stage}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.detail}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default Academics
