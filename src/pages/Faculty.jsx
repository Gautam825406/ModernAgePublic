import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import FacultyCard from '../components/cards/FacultyCard'
import { facultyMembers } from '../data/siteData'

function Faculty() {
  return (
    <>
      <PageHero
        title="Faculty & Staff"
        subtitle="Meet the experienced educators and support team dedicated to guiding every learner with care and professionalism."
      />

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Our Team"
            title="Mentors who inspire, guide, and support"
            description="Our faculty blends subject expertise with compassionate mentoring to ensure students grow academically and personally."
          />
        </RevealSection>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {facultyMembers.map((member, index) => (
            <RevealSection key={member.name} delay={index * 80}>
              <FacultyCard member={member} />
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faculty
