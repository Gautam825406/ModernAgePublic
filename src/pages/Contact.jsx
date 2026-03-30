import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import ContactForm from '../components/forms/ContactForm'
import { schoolProfile } from '../data/siteData'

function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to us for admissions, academic information, or campus visit support."
      />

      <section className="container mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <RevealSection>
          <SectionHeading
            eyebrow="Get In Touch"
            title="We are here to help"
            description="Our team is available during school office hours to support your queries."
          />

          <article className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            <ul className="space-y-4 text-sm leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold text-brand-900">Address:</span> {schoolProfile.address}
              </li>
              <li>
                <span className="font-semibold text-brand-900">Phone:</span> {schoolProfile.phone}, {schoolProfile.altPhone}
              </li>
              <li>
                <span className="font-semibold text-brand-900">Email:</span> {schoolProfile.email}
              </li>
              <li>
                <span className="font-semibold text-brand-900">Office Hours:</span> {schoolProfile.officeHours}
              </li>
            </ul>
          </article>

          <article className="mt-6 rounded-2xl border border-dashed border-brand-300 bg-brand-50 p-6 text-sm leading-relaxed text-slate-700 shadow-card">
            <h3 className="font-heading text-xl font-bold text-brand-950">Find us on Google Maps</h3>
            <p className="mt-2">
              Quickly locate Modern Age Public School, Mayurhand and plan your campus visit using the live map below.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-brand-200 shadow-card-sm">
              <iframe
                title="Modern Age Public School Mayurhand Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.2633979532307!2d85.24836247535312!3d24.302445878297796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f342f4afe56021%3A0x5f185a031550c1ad!2sMorden%20Age%20Public%20School%20Mayurhand!5e0!3m2!1sen!2sin!4v1774865782744!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full"
                style={{ border: 0 }}
              />
            </div>
          </article>
        </RevealSection>

        <RevealSection delay={100}>
          <ContactForm title="Contact Form" subtitle="Fill in your details and we will contact you shortly." />
        </RevealSection>
      </section>
    </>
  )
}

export default Contact
