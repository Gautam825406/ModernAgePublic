import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import RevealSection from '../components/common/RevealSection'
import { galleryItems } from '../data/siteData'

function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into school life, campus spaces, classroom engagement, and major events."
      />

      <section className="container mt-16">
        <RevealSection>
          <SectionHeading
            eyebrow="Photo Showcase"
            title="Campus moments and memories"
            description="Explore snapshots from classroom activities, celebrations, sports events, and school facilities."
          />
        </RevealSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item, index) => (
            <RevealSection key={item.title} delay={index * 60}>
              <figure className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover transition duration-500 hover:scale-105"
                />
                <figcaption className="p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{item.category}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-950">{item.title}</p>
                </figcaption>
              </figure>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery
