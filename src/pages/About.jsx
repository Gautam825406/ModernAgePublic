import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import { blogHighlights, principalMessage, schoolHistory, visionMission } from '../data/siteData'

function About() {
  return (
    <>
      <PageHero
        title="About Modern Age Public School, Mayurhand"
        subtitle="A trusted educational institution dedicated to academic excellence, strong values, and all-round development."
      />

      <section className="container mt-16 grid gap-8 lg:grid-cols-2">
        <RevealSection>
          <SectionHeading
            eyebrow="School Introduction"
            title="Nurturing every child with care and purpose"
            description="Modern Age Public School, Mayurhand has built a learning culture where students are encouraged to think critically, communicate confidently, and grow into responsible citizens."
          />
        </RevealSection>

        <RevealSection delay={100} className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
          <h3 className="font-heading text-2xl font-bold text-brand-950">Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{visionMission.vision}</p>

          <h3 className="mt-8 font-heading text-2xl font-bold text-brand-950">Mission</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
            {visionMission.mission.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </RevealSection>
      </section>

      <section className="container mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <RevealSection>
          <article className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Principal's Message</p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-brand-950">{principalMessage.name}</h3>
            <p className="text-sm font-semibold text-brand-600">{principalMessage.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{principalMessage.message}</p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Director</p>
              <p className="mt-2 font-heading text-xl font-bold text-brand-950">{principalMessage.directorName}</p>
              <p className="text-sm font-semibold text-brand-600">{principalMessage.directorRole}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{principalMessage.directorNote}</p>
            </div>
          </article>
        </RevealSection>

        <RevealSection delay={100}>
          <img
            src="/images/principal-placeholder.svg"
            alt="Principal portrait placeholder"
            className="h-full w-full rounded-2xl border border-brand-100 object-cover shadow-card"
          />
        </RevealSection>
      </section>

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="From the MAPS Blog"
            title="Stories and insights from our leadership"
            description="Stay updated with reflections from Director Pradeep Sir and the academic team as they document life at Modern Age Public School."
          />
        </RevealSection>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {blogHighlights.map((post, index) => (
            <RevealSection key={post.title} delay={index * 90}>
              <article className="card-3d h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{post.date}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-brand-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{post.excerpt}</p>
                <Link
                  to={post.link}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 underline"
                >
                  Read Article
                </Link>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="History"
            title="Our journey so far"
            description="From humble beginnings to becoming a respected institution in the region, our milestones reflect our commitment to quality education."
          />
        </RevealSection>

        <div className="grid gap-5 md:grid-cols-2">
          {schoolHistory.map((item, index) => (
            <RevealSection key={item.year} delay={index * 80}>
              <article className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{item.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
