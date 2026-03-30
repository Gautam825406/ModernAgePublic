import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import { notices } from '../data/siteData'

function Notices() {
  return (
    <>
      <PageHero
        title="Notices & Announcements"
        subtitle="Stay updated with latest school notifications, important dates, and academic announcements."
      />

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Latest Updates"
            title="Important school notifications"
            description="Parents and students are advised to check this section regularly for updates related to admissions, academics, and events."
          />
        </RevealSection>

        <div className="grid gap-4">
          {notices.map((notice, index) => (
            <RevealSection key={notice.title} delay={index * 80}>
              <article className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
                    {notice.type}
                  </p>
                  <p className="text-sm font-semibold text-slate-600">{notice.date}</p>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-brand-950">{notice.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{notice.details}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default Notices
