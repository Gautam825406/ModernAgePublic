import { Link } from 'react-router-dom'
import CTAButton from '../components/common/CTAButton'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import FAQAccordion from '../components/sections/FAQAccordion'
import TestimonialCard from '../components/cards/TestimonialCard'
import heroBanner from '../assets/bannar.jpg'
import {
  communityHighlights,
  faqs,
  galleryItems,
  learningPillars,
  quickHighlights,
  schoolProfile,
  testimonials,
} from '../data/siteData'

function Home() {
  const affordabilityHighlights = [
    {
      title: 'Transparent fee structure',
      description: 'Clear term-wise fee plans with installment support so families can plan without hidden surprises.',
    },
    {
      title: 'Value-packed facilities',
      description:
        'Digital classrooms, labs, hostel care, and transport bundled at community rates to keep quality accessible.',
    },
    {
      title: 'Scholarships & aid',
      description: 'Merit and need-based concessions guided by Pradeep Sir ensure deserving students keep learning.',
    },
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 pb-16 pt-28 text-white sm:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(54,166,188,0.45),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(250,189,47,0.3),transparent_40%),linear-gradient(120deg,#0b3048_20%,#0a4f6a_60%,#123452_100%)]" />
        <div className="floating-orb left-10 top-16 h-24 w-24 bg-cyan-200/35" />
        <div className="floating-orb right-[14%] top-[22%] h-20 w-20 bg-amber-200/35" />
        <div className="floating-orb bottom-14 left-[42%] h-14 w-14 bg-white/20" />
        <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealSection>
            <div className="glass-panel rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-200">Welcome to</p>
              <h1 className="mt-3 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Best CBSE School in Mayurhand – Modern Age Public School
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-brand-100 sm:text-lg">
                Modern Age Public School, Mayurhand is one of the best schools in the region, known for quality education, discipline, and excellent board results. Families searching for the best school in Mayurhand or a CBSE school near Itkhori trust MAPS for holistic growth from Nursery to Class X.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/admissions" variant="accent">
                  Apply Now
                </CTAButton>
                <CTAButton to="/about" variant="secondary">
                  Learn More
                </CTAButton>
                <CTAButton to="/contact" variant="secondary">
                  Contact Us
                </CTAButton>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={100} className="relative">
            <div className="hero-tilt relative rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <img
                src={heroBanner}
                alt="Modern Age Public School campus banner"
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 px-4 py-3 text-brand-950 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Admissions Open</p>
                <p className="mt-1 font-heading text-lg font-bold">Session 2026-27</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="container mt-8 sm:hidden">
        <RevealSection>
          <div className="rounded-3xl border border-brand-100 bg-white p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Find Us</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-brand-950">Modern Age Public School Location</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Tap the live Google Map to get directions to our Mayurhand campus. Perfect when you are viewing the site on your phone.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-200">
              <iframe
                title="Modern Age Public School Mayurhand Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.2633979532307!2d85.24836247535312!3d24.302445878297796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f342f4afe56021%3A0x5f185a031550c1ad!2sMorden%20Age%20Public%20School%20Mayurhand!5e0!3m2!1sen!2sin!4v1774865782744!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="container mt-6 sm:hidden">
        <RevealSection>
          <div className="rounded-3xl border border-brand-100 bg-white p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Campus Glimpses</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-brand-950">Gallery Highlights</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Swipe through photos from our classrooms, events, and hostel life—perfect for a quick look on mobile before visiting the full gallery.
            </p>
            <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
              {galleryItems.slice(0, 5).map((item) => (
                <figure key={item.title} className="min-w-[220px] shrink-0 rounded-2xl border border-brand-100 bg-white shadow-card">
                  <img src={item.image} alt={item.title} className="h-40 w-full rounded-t-2xl object-cover" />
                  <figcaption className="p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{item.category}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-950">{item.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="container -mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickHighlights.map((item, index) => (
          <RevealSection key={item.title} delay={index * 80}>
            <article className="card-3d h-full rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
              <h2 className="font-heading text-lg font-bold text-brand-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
            </article>
          </RevealSection>
        ))}
      </section>

      <section className="container mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <RevealSection>
          <SectionHeading
            eyebrow="Serving Chatra District"
            title="Modern Age Public School in Mayurhand, Chatra 825408"
            description="Situated near the Block campus, we remain the trusted neighborhood school for families from Mayurhand, Bagra, Simariya, and connecting Chatra villages. Students can begin in Nursery and continue up to Class X without changing campuses."
          />
          <div className="mt-6 rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
            <p className="text-sm leading-relaxed text-slate-700">
              Our location keeps classrooms close to home while still exposing learners to digital labs, English reading studios, and expert mentors. Daily buses and walking routes connect the campus to the market road, ensuring punctuality and safety for every child.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={120}>
          <div className="grid gap-4">
            {communityHighlights.map((item) => (
              <article key={item.title} className="card-3d rounded-2xl border border-brand-100 bg-white/90 p-5 shadow-card">
                <h3 className="font-heading text-lg font-bold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </RevealSection>
      </section>

      <section className="container mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <RevealSection>
          <SectionHeading
            eyebrow="About Modern Age Public School"
            title="Experienced teachers led by Pradeep Sir"
            description="MAPS is widely regarded as the best school for Class 10th in Mayurhand thanks to experienced faculty, Hindi medium support, and CBSE-aligned lesson plans that keep students ahead for board exams."
          />
          <p className="rounded-3xl border border-brand-100 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-card">
            Under the mentorship of Pradeep Sir and a dedicated team of subject experts, students receive personal attention, doubt-clearing sessions, and mentorship focused on character, communication, and discipline. The campus nurtures proud students (उन्नत / उभरते छात्र) who participate in Olympiads, NCC programs, and cultural showcases while remaining rooted in local values.
          </p>
        </RevealSection>
        <RevealSection delay={120}>
          <article className="card-3d rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
            <h3 className="font-heading text-xl font-bold text-brand-950">Why parents prefer us</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              <li>Guidance for Hindi medium school learners shifting to CBSE pattern.</li>
              <li>Weekend bridge programs for students from Itkhori, Bagra, and Pathalgadda.</li>
              <li>Life-skills curriculum covering yoga, spoken English, and digital literacy.</li>
              <li>Structured parent connects with performance dashboards for every class.</li>
            </ul>
          </article>
        </RevealSection>
      </section>

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Affordable Excellence"
            title="Why MAPS outperforms other budget-friendly schools"
            description="Families choose Modern Age Public School because we balance reasonable fees with premium learning standards that rival city campuses."
            align="center"
          />
        </RevealSection>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {affordabilityHighlights.map((item, index) => (
            <RevealSection key={item.title} delay={index * 80}>
              <article className="card-3d h-full rounded-2xl border border-brand-100 bg-white/95 p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Reason {index + 1}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-brand-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-20">
        <RevealSection>
          <SectionHeading
            eyebrow="Why Parents Choose Us"
            title="A learning environment built for excellence, values, and confidence"
            description="Our approach combines strong academics with life skills, co-curricular programs, and personalized mentoring so every child grows with purpose."
            align="center"
          />
        </RevealSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <RevealSection key={item.name} delay={index * 90}>
              <TestimonialCard item={item} />
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-20">
        <RevealSection>
          <SectionHeading
            eyebrow="Nursery to Class X Path"
            title="Learning pillars for every stage"
            description="Each phase of schooling at MAPS Mayurhand is curated with age-appropriate labs, clubs, and assessments so that students grow with confidence."
            align="center"
          />
        </RevealSection>
        <div className="grid gap-6 md:grid-cols-2">
          {learningPillars.map((pillar, index) => (
            <RevealSection key={pillar.stage} delay={index * 90}>
              <article className="card-3d h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{pillar.stage}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{pillar.focus}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="container mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <RevealSection>
          <SectionHeading
            eyebrow="Hostel Facility"
            title="Safe hostel for nearby villages"
            description="Our hostel facility school in Mayurhand offers disciplined routines and study-focused environments for students from remote Chatra blocks and Itkhori."
          />
          <p className="rounded-3xl border border-brand-100 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-card">
            Separate hostels for boys and girls include 24/7 wardens, biometric attendance, and supervised evening study halls. Healthy meals, sports time, and weekend mentoring circles ensure hostel students stay motivated while living away from families. Parents can <Link to="/facilities" className="text-brand-700 underline">explore hostel and campus facilities</Link> or <Link to="/contact" className="text-brand-700 underline">contact us</Link> for room availability.
          </p>
        </RevealSection>
        <RevealSection delay={120}>
          <div className="grid gap-4">
            <article className="card-3d rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
              <h3 className="font-heading text-lg font-bold text-brand-950">Hostel Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                <li>Daily supervised study hours for Class 8-10 students.</li>
                <li>Strict discipline with mentorship from Pradeep Sir’s leadership team.</li>
                <li>Medical support tie-up with local clinics in Mayurhand and Chatra.</li>
                <li>Weekend activities promoting teamwork, debate, and cultural pride.</li>
              </ul>
            </article>
          </div>
        </RevealSection>
      </section>

      <section className="container mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <RevealSection>
          <SectionHeading
            eyebrow="Academic Excellence"
            title="Focused Class 10th preparation"
            description="Our best school for Class 10th tag comes from consistent board toppers, smart revision modules, and personalised counseling."
          />
          <p className="rounded-3xl border border-brand-100 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-card">
            Pradeep Sir personally oversees board preparation bootcamps, weekly mock tests, and performance reviews. Subject specialists collaborate to provide solution banks, doubt stations, and early morning practice clubs for maths and science. Families from Itkhori often shift to MAPS to leverage this proven support system.
          </p>
        </RevealSection>
        <RevealSection delay={120}>
          <article className="card-3d rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-bold text-brand-950">Results Snapshot</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              <li>90%+ average in Class 10th boards for the last three years.</li>
              <li>Special remedial groups for Hindi medium learners transitioning to English-heavy papers.</li>
              <li>Career sessions guiding students towards science, commerce, and vocational choices.</li>
              <li>Mentorship for proud students (उन्नत / उभरते छात्र) aiming for scholarship exams.</li>
            </ul>
          </article>
        </RevealSection>
      </section>

      <section className="container mt-20">
        <RevealSection>
          <article className="rounded-3xl border border-brand-100 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-card">
            <p>
              Modern Age Public School Mayurhand एक अग्रणी विद्यालय है जो छात्रों को उच्च गुणवत्ता की शिक्षा प्रदान करता है। यह विद्यालय विशेष रूप से कक्षा 10वीं के छात्रों के लिए बेहतरीन परिणाम देता है। अनुशासन, आधुनिक प्रयोगशालाएँ और अनुभवी शिक्षक मिलकर छात्रों को आत्मविश्वास से भरपूर बनाते हैं।
            </p>
            <p className="mt-4">
              MAPS Mayurhand छात्रों को मूल्य आधारित शिक्षा, खेल-कूद, और कला की गतिविधियों के साथ-साथ होस्टल सुविधा भी उपलब्ध कराता है। हमारे proud students (उन्नत / उभरते छात्र) राष्ट्रीय और जिला स्तरीय प्रतियोगिताओं में निरंतर उत्कृष्ट प्रदर्शन कर रहे हैं।
            </p>
          </article>
        </RevealSection>
      </section>

      <section className="container mt-20">
        <RevealSection>
          <div className="rounded-3xl border border-brand-100 bg-brand-950 px-6 py-10 text-white shadow-card sm:px-10">
            <h2 className="font-heading text-3xl font-bold">Ready to join the top school in Chatra district?</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-100">
              Visit our campus in Mayurhand, explore the hostel, and speak with Pradeep Sir’s team about admissions for Nursery to Class X. Choose the best school in Mayurhand for your child’s future.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to="/admissions" variant="accent">
                Enroll Now
              </CTAButton>
              <CTAButton to="/contact" variant="secondary">
                Contact for Admission
              </CTAButton>
              <CTAButton to="/facilities" variant="primary">
                Visit Our Campus
              </CTAButton>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="container mt-20 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <RevealSection>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know"
            description="Here are answers to the most common parent queries around admissions, academics, and school facilities."
          />
          <Link
            to="/contact"
            className="btn-3d inline-flex rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
          >
            Ask a Question
          </Link>
        </RevealSection>

        <RevealSection delay={100}>
          <FAQAccordion items={faqs} />
        </RevealSection>
      </section>
    </>
  )
}

export default Home
