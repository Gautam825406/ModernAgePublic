import { Link } from 'react-router-dom'
import CTAButton from '../components/common/CTAButton'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import FAQAccordion from '../components/sections/FAQAccordion'
import HeroCarousel from '../components/sections/HeroCarousel'
import TestimonialCard from '../components/cards/TestimonialCard'
import {
  communityHighlights,
  faqs,
  galleryItems,
  learningPillars,
  quickHighlights,
  testimonials,
} from '../data/siteData'

/* ── per-section metadata ── */
const quickHighlightIcons  = ['📚', '👩‍🏫', '🛡️', '🎭']
const quickHighlightColors = ['card-blue', 'card-green', 'card-purple', 'card-orange']

const communityIcons  = ['📍', '📖', '🤝']
const communityColors = ['card-blue', 'card-yellow', 'card-green']

const affordabilityIcons  = ['💳', '🏫', '🏆']
const affordabilityColors = ['card-teal', 'card-orange', 'card-yellow']

const pillarColors = ['pillar-1', 'pillar-2', 'pillar-3', 'pillar-4']
const pillarEmojis = ['🌱', '🔬', '💡', '🎯']

const statsData = [
  { label: 'Founded',       value: '2008',       icon: '🏛️', color: 'card-blue'   },
  { label: 'Board Results', value: '90%+',        icon: '🏆', color: 'card-yellow' },
  { label: 'Classes',       value: 'Nursery–X',   icon: '📚', color: 'card-green'  },
  { label: 'Hostel',        value: 'Available',   icon: '🏠', color: 'card-purple' },
]

const whyPoints = [
  'Guidance for Hindi medium learners shifting to CBSE pattern.',
  'Weekend bridge programs for students from Itkhori, Bagra, and Pathalgadda.',
  'Life-skills curriculum covering yoga, spoken English, and digital literacy.',
  'Structured parent connects with performance dashboards for every class.',
]

const hostelPoints = [
  'Daily supervised study hours for Class 8-10 students.',
  "Strict discipline with mentorship from Pradeep Sir's leadership team.",
  'Medical support tie-up with local clinics in Mayurhand and Chatra.',
  'Weekend activities promoting teamwork, debate, and cultural pride.',
]

const resultsPoints = [
  '90%+ average in Class 10th boards for the last three years.',
  'Special remedial groups for Hindi medium learners transitioning to English-heavy papers.',
  'Career sessions guiding students towards science, commerce, and vocational choices.',
  'Mentorship for proud students (उन्नत / उभरते छात्र) aiming for scholarship exams.',
]

function BulletList({ items, accentClass = 'text-accent-500' }) {
  return (
    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-700">
      {items.map((point, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className={`mt-0.5 shrink-0 font-bold ${accentClass}`}>✦</span>
          {point}
        </li>
      ))}
    </ul>
  )
}

function Home() {
  const affordabilityHighlights = [
    {
      title: 'Transparent fee structure',
      description: 'Clear term-wise fee plans with installment support so families can plan without hidden surprises.',
    },
    {
      title: 'Value-packed facilities',
      description: 'Digital classrooms, labs, hostel care, and transport bundled at community rates to keep quality accessible.',
    },
    {
      title: 'Scholarships & aid',
      description: 'Merit and need-based concessions guided by Pradeep Sir ensure deserving students keep learning.',
    },
  ]

  return (
    <>
      {/* ════════════════════════════════════════════
          Hero — Full-screen auto-sliding carousel
          ════════════════════════════════════════════ */}
      <HeroCarousel />

      {/* ════════════════════════════════════════════
          Animated Stats Strip
          ════════════════════════════════════════════ */}
      <section className="container mt-6 sm:mt-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statsData.map((stat, i) => (
            <RevealSection key={stat.label} delay={i * 70}>
              <div className={`stat-card ribbon-shimmer rounded-2xl border p-4 text-center shadow-card ${stat.color}`}>
                <div className="mb-1 text-2xl wiggle-icon" style={{ animationDelay: `${i * 0.4}s` }}>
                  {stat.icon}
                </div>
                <p className="stat-slide-up font-heading text-xl font-extrabold text-brand-950"
                  style={{ animationDelay: `${i * 0.12}s` }}>
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {stat.label}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Mobile-only: Google Map
          ════════════════════════════════════════════ */}
      <section className="container mt-6 sm:hidden">
        <RevealSection>
          <div className="rounded-3xl border border-brand-100 bg-white p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Find Us</p>
            <h2 className="mt-2 font-heading text-xl font-bold text-brand-950">
              Modern Age Public School Location
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Tap the live Google Map to get directions to our Mayurhand campus.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-200">
              <iframe
                title="Modern Age Public School Mayurhand Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.2633979532307!2d85.24836247535312!3d24.302445878297796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f342f4afe56021%3A0x5f185a031550c1ad!2sMorden%20Age%20Public%20School%20Mayurhand!5e0!3m2!1sen!2sin!4v1774865782744!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ════════════════════════════════════════════
          Mobile-only: Gallery scroll strip
          ════════════════════════════════════════════ */}
      <section className="container mt-5 sm:hidden">
        <RevealSection>
          <div className="rounded-3xl border border-brand-100 bg-white p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Campus Glimpses</p>
            <h2 className="mt-1 font-heading text-xl font-bold text-brand-950">Gallery Highlights</h2>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory' }}>
              {galleryItems.slice(0, 5).map((item) => (
                <figure
                  key={item.title}
                  className="min-w-[200px] shrink-0 rounded-2xl border border-brand-100 bg-white shadow-card"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img src={item.image} alt={item.title} className="h-36 w-full rounded-t-2xl object-cover" />
                  <figcaption className="p-2.5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-600">{item.category}</p>
                    <p className="mt-0.5 text-xs font-semibold text-brand-950">{item.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ════════════════════════════════════════════
          Quick Highlights — colorful cards
          ════════════════════════════════════════════ */}
      <section className="container mt-10 sm:mt-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickHighlights.map((item, index) => (
            <RevealSection key={item.title} delay={index * 80}>
              <article className={`card-3d ribbon-shimmer h-full rounded-2xl border p-5 shadow-card ${quickHighlightColors[index]}`}>
                <div
                  className="icon-circle mb-3 float-icon"
                  style={{ animationDelay: `${index * 0.3}s`, background: 'rgba(255,255,255,0.6)' }}
                >
                  {quickHighlightIcons[index]}
                </div>
                <h2 className="font-heading text-base font-bold text-brand-950 sm:text-lg">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Location / Community
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealSection>
            <SectionHeading
              eyebrow="Serving Chatra District"
              title="Modern Age Public School in Mayurhand, Chatra 825408"
              description="Situated near the Block campus, we remain the trusted neighborhood school for families from Mayurhand, Bagra, Simariya, and connecting Chatra villages. Students can begin in Nursery and continue up to Class X without changing campuses."
            />
            <div className="rounded-3xl border border-brand-100 bg-white p-5 shadow-card sm:p-6">
              <p className="text-sm leading-relaxed text-slate-700">
                Our location keeps classrooms close to home while still exposing learners to digital labs, English reading studios, and expert mentors. Daily buses and walking routes connect the campus to the market road, ensuring punctuality and safety for every child.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <div className="grid gap-4">
              {communityHighlights.map((item, i) => (
                <article
                  key={item.title}
                  className={`card-3d flex items-start gap-4 rounded-2xl border p-4 shadow-card sm:p-5 ${communityColors[i]}`}
                >
                  <div
                    className="icon-circle shrink-0 float-icon"
                    style={{ animationDelay: `${i * 0.5}s`, background: 'rgba(255,255,255,0.65)' }}
                  >
                    {communityIcons[i]}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-brand-900 sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Faculty / Teachers
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealSection>
            <SectionHeading
              eyebrow="About Modern Age Public School"
              title="Experienced teachers led by Pradeep Sir"
              description="MAPS is widely regarded as the best school for Class 10th in Mayurhand thanks to experienced faculty, Hindi medium support, and CBSE-aligned lesson plans that keep students ahead for board exams."
            />
            <div className="rounded-3xl border border-brand-100 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-card sm:p-6">
              Under the mentorship of Pradeep Sir and a dedicated team of subject experts, students receive personal attention, doubt-clearing sessions, and mentorship focused on character, communication, and discipline. The campus nurtures proud students (उन्नत / उभरते छात्र) who participate in Olympiads, NCC programs, and cultural showcases while remaining rooted in local values.
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <article className="card-3d card-border-animate rounded-3xl border bg-white p-5 shadow-card sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl wiggle-icon">🌟</span>
                <h3 className="font-heading text-lg font-bold text-brand-950 sm:text-xl">Why parents prefer us</h3>
              </div>
              <BulletList items={whyPoints} accentClass="text-brand-500" />
            </article>
          </RevealSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Affordable Excellence
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <RevealSection>
          <SectionHeading
            eyebrow="Affordable Excellence"
            title="Why MAPS outperforms other budget-friendly schools"
            description="Families choose Modern Age Public School because we balance reasonable fees with premium learning standards that rival city campuses."
            align="center"
          />
          <div className="section-accent-bar mx-auto" />
        </RevealSection>

        <div className="mt-8 grid gap-5 sm:gap-6 sm:grid-cols-3">
          {affordabilityHighlights.map((item, index) => (
            <RevealSection key={item.title} delay={index * 80}>
              <article className={`card-3d ribbon-shimmer h-full rounded-2xl border p-5 shadow-card sm:p-6 ${affordabilityColors[index]}`}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl float-icon" style={{ animationDelay: `${index * 0.4}s` }}>
                    {affordabilityIcons[index]}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Reason {index + 1}</p>
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-950 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Testimonials
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <RevealSection>
          <SectionHeading
            eyebrow="Why Parents Choose Us"
            title="A learning environment built for excellence, values, and confidence"
            description="Our approach combines strong academics with life skills, co-curricular programs, and personalized mentoring so every child grows with purpose."
            align="center"
          />
          <div className="section-accent-bar mx-auto" />
        </RevealSection>

        {/* Mobile: horizontal scroll; md+: 3-column grid */}
        <div className="mt-8 hidden gap-6 sm:grid lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <RevealSection key={item.name} delay={index * 90}>
              <TestimonialCard item={item} index={index} />
            </RevealSection>
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="mt-6 flex gap-4 overflow-x-auto pb-3 sm:hidden" style={{ scrollSnapType: 'x mandatory' }}>
          {testimonials.map((item, index) => (
            <div key={item.name} className="min-w-[82vw] shrink-0" style={{ scrollSnapAlign: 'start' }}>
              <TestimonialCard item={item} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Learning Pillars (Nursery → Class X)
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <RevealSection>
          <SectionHeading
            eyebrow="Nursery to Class X Path"
            title="Learning pillars for every stage"
            description="Each phase of schooling at MAPS Mayurhand is curated with age-appropriate labs, clubs, and assessments so that students grow with confidence."
            align="center"
          />
          <div className="section-accent-bar mx-auto" />
        </RevealSection>

        <div className="mt-8 grid gap-5 sm:gap-6 sm:grid-cols-2">
          {learningPillars.map((pillar, index) => (
            <RevealSection key={pillar.stage} delay={index * 90}>
              <article className={`card-3d ribbon-shimmer h-full rounded-2xl border p-5 shadow-card sm:p-6 ${pillarColors[index]}`}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl float-icon" style={{ animationDelay: `${index * 0.35}s` }}>
                    {pillarEmojis[index]}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{pillar.stage}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{pillar.focus}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Hostel Facility
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealSection>
            <SectionHeading
              eyebrow="Hostel Facility"
              title="Safe hostel for nearby villages"
              description="Our hostel facility school in Mayurhand offers disciplined routines and study-focused environments for students from remote Chatra blocks and Itkhori."
            />
            <div className="rounded-3xl border border-brand-100 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-card sm:p-6">
              Separate hostels for boys and girls include 24/7 wardens, biometric attendance, and supervised evening study halls. Healthy meals, sports time, and weekend mentoring circles ensure hostel students stay motivated while living away from families. Parents can{' '}
              <Link to="/facilities" className="text-brand-700 underline">explore hostel and campus facilities</Link>{' '}
              or{' '}
              <Link to="/contact" className="text-brand-700 underline">contact us</Link>{' '}
              for room availability.
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <article className="card-3d card-blue rounded-2xl border p-5 shadow-card sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-3xl wiggle-icon">🏠</span>
                <h3 className="font-heading text-lg font-bold text-brand-950">Hostel Highlights</h3>
              </div>
              <BulletList items={hostelPoints} accentClass="text-brand-500" />
            </article>
          </RevealSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Class 10 Preparation
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <RevealSection>
            <SectionHeading
              eyebrow="Academic Excellence"
              title="Focused Class 10th preparation"
              description="Our best school for Class 10th tag comes from consistent board toppers, smart revision modules, and personalised counseling."
            />
            <div className="rounded-3xl border border-brand-100 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-card sm:p-6">
              Pradeep Sir personally oversees board preparation bootcamps, weekly mock tests, and performance reviews. Subject specialists collaborate to provide solution banks, doubt stations, and early morning practice clubs for maths and science. Families from Itkhori often shift to MAPS to leverage this proven support system.
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <article className="card-3d card-yellow rounded-3xl border p-5 shadow-card sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl wiggle-icon">🎯</span>
                <h3 className="font-heading text-lg font-bold text-brand-950">Results Snapshot</h3>
              </div>
              <BulletList items={resultsPoints} accentClass="text-accent-500" />
            </article>
          </RevealSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Hindi content block
          ════════════════════════════════════════════ */}
      <section className="container mt-10 sm:mt-14">
        <RevealSection>
          <article className="rounded-3xl border border-brand-100 bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-card sm:p-6">
            <p>
              Modern Age Public School Mayurhand एक अग्रणी विद्यालय है जो छात्रों को उच्च गुणवत्ता की शिक्षा प्रदान करता है। यह विद्यालय विशेष रूप से कक्षा 10वीं के छात्रों के लिए बेहतरीन परिणाम देता है। अनुशासन, आधुनिक प्रयोगशालाएँ और अनुभवी शिक्षक मिलकर छात्रों को आत्मविश्वास से भरपूर बनाते हैं।
            </p>
            <p className="mt-4">
              MAPS Mayurhand छात्रों को मूल्य आधारित शिक्षा, खेल-कूद, और कला की गतिविधियों के साथ-साथ होस्टल सुविधा भी उपलब्ध कराता है। हमारे proud students (उन्नत / उभरते छात्र) राष्ट्रीय और जिला स्तरीय प्रतियोगिताओं में निरंतर उत्कृष्ट प्रदर्शन कर रहे हैं।
            </p>
          </article>
        </RevealSection>
      </section>

      {/* ════════════════════════════════════════════
          CTA Banner
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <RevealSection>
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(54,166,188,0.45),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(250,189,47,0.35),transparent_45%),linear-gradient(135deg,#0b2032_0%,#0a4f6a_50%,#0f3047_100%)]" />
            <div className="floating-orb left-6 top-6 h-16 w-16 bg-cyan-200/30" />
            <div className="floating-orb right-10 bottom-5 h-12 w-12 bg-amber-200/35" />
            <span className="hero-emoji" style={{ top: '15%', right: '22%', fontSize: '1.8rem', animationDelay: '0.5s' }}>🎓</span>
            <span className="hero-emoji" style={{ bottom: '18%', left: '14%', fontSize: '1.5rem', animationDelay: '1.4s' }}>⭐</span>

            <div className="relative z-10 px-5 py-10 text-white sm:px-10 sm:py-14">
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-300/40 bg-accent-400/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-200">
                <span className="star-twinkle">✦</span> Join Our School
              </p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl">
                Ready to join the{' '}
                <span className="text-gradient-gold">top school in Chatra district?</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-100 sm:text-base">
                Visit our campus in Mayurhand, explore the hostel, and speak with Pradeep Sir's team about admissions for Nursery to Class X. Choose the best school in Mayurhand for your child's future.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="pulse-cta rounded-full">
                  <CTAButton to="/admissions" variant="accent">Enroll Now</CTAButton>
                </div>
                <CTAButton to="/contact"   variant="secondary">Contact for Admission</CTAButton>
                <CTAButton to="/facilities" variant="primary">Visit Our Campus</CTAButton>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════ */}
      <section className="container mt-14 sm:mt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <RevealSection>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Everything you need to know"
              description="Here are answers to the most common parent queries around admissions, academics, and school facilities."
            />
            <Link
              to="/contact"
              className="btn-3d inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
            >
              <span>💬</span> Ask a Question
            </Link>
          </RevealSection>

          <RevealSection delay={100}>
            <FAQAccordion items={faqs} />
          </RevealSection>
        </div>
      </section>
    </>
  )
}

export default Home
