import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import ContactForm from '../components/forms/ContactForm'
import { admissionsData } from '../data/siteData'

function Admissions() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join a school community focused on academic excellence, values, and all-round development."
        ctaText="Admission Enquiry"
        ctaTo="/contact"
      />

      <section className="container mt-12">
        <RevealSection>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="card-3d rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Campus & Location</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-brand-950">Modern Age Public School, Mayurhand</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                We are situated on the main road near the Block campus in Mayurhand, Chatra - 825408. Families from
                Bagra, Simariya, Pathalgadda, and neighboring villages choose us for the convenience of a single
                campus and reliable transport routes.
              </p>
            </article>
            <article className="card-3d rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Grade Coverage</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-brand-950">Nursery to Class X under one roof</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Parents can admit their child in Nursery and continue seamlessly through Class X with the same value
                system, teachers, and support services. Dedicated coordinators guide every transition (Nursery to
                Primary, Primary to Middle, Middle to Secondary) so new learners feel settled quickly.
              </p>
            </article>
          </div>
        </RevealSection>
      </section>

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Admission Process"
            title="Simple and transparent steps"
            description="Our admissions team is available to guide you through each stage and help you choose the right class for your child."
          />
        </RevealSection>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {admissionsData.process.map((step, index) => (
            <RevealSection key={step} delay={index * 90}>
              <article className="h-full rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{step}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-16 grid gap-6 lg:grid-cols-2">
        <RevealSection>
          <article className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-brand-950">Eligibility</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              {admissionsData.eligibility.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </RevealSection>

        <RevealSection delay={100}>
          <article className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-brand-950">Required Documents</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              {admissionsData.documents.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </RevealSection>
      </section>

      <section className="container mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <RevealSection>
          <article className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-brand-950">Fee Information</h3>
            <div className="mt-4 space-y-3">
              {admissionsData.feeInfo.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 rounded-xl bg-brand-50 px-4 py-3">
                  <p className="text-sm font-semibold text-brand-900">{item.label}</p>
                  <p className="text-right text-sm text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>
          </article>
        </RevealSection>

        <RevealSection delay={100}>
          <ContactForm
            title="Admission Enquiry Form"
            subtitle="Share your details and our admissions counselor will contact you shortly."
          />
        </RevealSection>
      </section>
    </>
  )
}

export default Admissions
