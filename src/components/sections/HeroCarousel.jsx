import { useState, useEffect, useRef, useCallback } from 'react'
import CTAButton from '../common/CTAButton'

import campusImg    from '../../assets/image.png'
import classroomImg from '../../assets/classroom.jpg'
import annualDayImg from '../../assets/anualday.jpg'
import studentImg   from '../../assets/img.jpg'
import img01        from '../../assets/01.jpg'
import img02        from '../../assets/02.jpg'
import img03        from '../../assets/03.jpg'
import img04        from '../../assets/04.jpg'
import img05        from '../../assets/05.jpg'
import img06        from '../../assets/06.jpg'
import img07        from '../../assets/07.jpg'

const INTERVAL = 4500

const slides = [
  /* ── 1 ── */
  {
    image: img01,
    badge: '🎨 Campus Life',
    title: 'Art & Culture',
    highlight: 'at Its Best',
    desc: 'Creative expression is at the heart of MAPS. Our art & culture wall showcases the imagination and talent of every student.',
    cta1: { label: 'View Gallery',   to: '/gallery' },
    cta2: { label: 'Student Life',   to: '/student-life' },
    tag:  '🎨 Art & Culture Wall',
  },
  /* ── 3 ── */
  {
    image: img02,
    badge: '🏫 School Assembly',
    title: 'Unity &',
    highlight: 'Discipline Every Day',
    desc: 'Our morning assemblies build character, national pride, and a sense of community that students carry throughout their lives.',
    cta1: { label: 'About MAPS',  to: '/about' },
    cta2: { label: 'View Gallery', to: '/gallery' },
    tag:  '🌅 Daily School Assembly',
  },
  /* ── 4 ── */
  {
    image: img03,
    badge: '📚 Academics',
    title: 'Outdoor Learning',
    highlight: 'Beyond the Classroom',
    desc: 'From nature walks to field projects, we take learning outside so students explore, discover, and connect with the world around them.',
    cta1: { label: 'View Academics', to: '/academics' },
    cta2: { label: 'Student Life',   to: '/student-life' },
    tag:  '🌿 Experiential Learning',
  },
  /* ── 5 ── */
  {
    image: img04,
    badge: '🏃 Sports Program',
    title: 'Active, Healthy',
    highlight: 'Winning Students',
    desc: 'Sports Day at MAPS brings out the champion in every child — building teamwork, fitness, and a never-give-up spirit.',
    cta1: { label: 'Student Life',    to: '/student-life' },
    cta2: { label: 'View Gallery',    to: '/gallery' },
    tag:  '🏅 Sports Day Activities',
  },
  /* ── 6 ── */
  {
    image: img05,
    badge: '🔬 Science Excellence',
    title: 'Curiosity &',
    highlight: 'Discovery at MAPS',
    desc: 'Our science exhibitions let students design, build, and present real projects — sparking innovation from an early age.',
    cta1: { label: 'View Academics', to: '/academics' },
    cta2: { label: 'Explore Facilities', to: '/facilities' },
    tag:  '🔬 Science Exhibition',
  },
  /* ── 7 ── */
  {
    image: img06,
    badge: '🎉 Cultural Events',
    title: 'Vibrant Cultural',
    highlight: 'Celebrations',
    desc: 'Dance, drama, music, and folk arts — our cultural programs celebrate India\'s rich heritage and develop confidence in every performer.',
    cta1: { label: 'Student Life', to: '/student-life' },
    cta2: { label: 'View Gallery', to: '/gallery' },
    tag:  '🎭 Cultural Program',
  },
  /* ── 8 ── */
  {
    image: img07,
    badge: '🏫 Our Facilities',
    title: 'World-Class',
    highlight: 'Campus Facilities',
    desc: 'Modern infrastructure — digital classrooms, labs, library, hostel, and sports grounds — all under one roof for your child.',
    cta1: { label: 'Explore Facilities', to: '/facilities' },
    cta2: { label: 'Contact Us',         to: '/contact' },
    tag:  '📍 Near Block Campus, Mayurhand',
  },
  /* ── 9 ── */
  {
    image: campusImg,
    badge: '🏫 Our Campus',
    title: 'Safe & Modern',
    highlight: 'Learning Campus',
    desc: 'Digital classrooms, science labs, reading studio, and a disciplined environment — the ideal place for every child\'s holistic growth.',
    cta1: { label: 'Explore Facilities', to: '/facilities' },
    cta2: { label: 'Contact Us',         to: '/contact' },
    tag:  '📍 Near Block Campus, Mayurhand',
  },
  /* ── 10 ── */
  {
    image: classroomImg,
    badge: '📚 Academics',
    title: 'Excellence in',
    highlight: 'Every Classroom',
    desc: 'CBSE-aligned lessons, experienced faculty, individual attention, and doubt-clearing sessions that keep students ahead in board exams.',
    cta1: { label: 'View Academics', to: '/academics' },
    cta2: { label: 'Meet Faculty',   to: '/faculty' },
    tag:  '🏆 90%+ Board Results',
  },
  /* ── 11 ── */
  {
    image: annualDayImg,
    badge: '🎉 Annual Day',
    title: 'Vibrant Activities',
    highlight: 'Beyond the Classroom',
    desc: 'Sports, arts, NCC, Olympiads, and cultural events nurture creativity, leadership, and confidence in every learner at MAPS.',
    cta1: { label: 'Student Life', to: '/student-life' },
    cta2: { label: 'View Gallery', to: '/gallery' },
    tag:  '✨ Holistic Development',
  },
  /* ── 12 ── */
  {
    image: studentImg,
    badge: '🌟 Our Students',
    title: 'Proud Students',
    highlight: 'of Mayurhand',
    desc: 'Consistently excelling in district-level competitions, scholarship exams, and national Olympiads with dedicated mentorship from Pradeep Sir.',
    cta1: { label: '🎓 Enroll Now', to: '/admissions' },
    cta2: { label: 'About Us',      to: '/about' },
    tag:  '🏅 Top School in Chatra District',
  },
]

export default function HeroCarousel() {
  const [active,  setActive]  = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const touchStartX = useRef(null)

  const goTo = useCallback((idx) => {
    setActive(((idx % slides.length) + slides.length) % slides.length)
    setAnimKey((k) => k + 1)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  /* Auto-advance */
  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next, paused])

  /* Touch swipe */
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const dx = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(dx) > 48) dx > 0 ? next() : prev()
    touchStartX.current = null
  }

  /* Keyboard */
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft')  prev()
  }

  return (
    <section
      className="relative overflow-hidden bg-brand-950 focus:outline-none"
      style={{ height: 'min(92vh, 880px)', minHeight: '540px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label="School highlights carousel"
      aria-roledescription="carousel"
    >
      {/* ── Background slides ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === active ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={i !== active}
        >
          <img
            key={i === active ? `img-${animKey}` : `img-idle-${i}`}
            src={slide.image}
            alt=""
            role="presentation"
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`h-full w-full object-cover select-none ${i === active ? 'carousel-ken-burns' : ''}`}
          />
          {/* Gradients for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/60 to-brand-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-brand-950/40" />
        </div>
      ))}

      {/* ── Decorative orbs ── */}
      <div className="floating-orb pointer-events-none left-[5%]  top-[18%]    h-20 w-20 bg-cyan-300/20"  />
      <div className="floating-orb pointer-events-none right-[8%] top-[25%]    h-16 w-16 bg-amber-200/20" />
      <div className="floating-orb pointer-events-none left-[40%] bottom-[20%] h-12 w-12 bg-white/10"     />

      {/* ── Slide counter (top-right) ── */}
      <div className="slide-counter hidden sm:flex" aria-live="polite" aria-atomic="true">
        {active + 1} / {slides.length}
      </div>

      {/* ── Thumbnail strip (bottom-right, desktop) ── */}
      <div className="absolute bottom-14 right-4 z-30 hidden lg:flex flex-col gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`block h-10 w-14 overflow-hidden rounded-md border-2 transition-all duration-300 ${
              i === active
                ? 'border-accent-400 scale-110 opacity-100 shadow-lg'
                : 'border-white/25 opacity-50 hover:opacity-80'
            }`}
          >
            <img src={slide.image} alt="" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {/* ── Content overlay ── */}
      <div className="relative z-20 flex h-full items-end pb-28 sm:items-center sm:pb-0 pt-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {slides.map((slide, i) =>
            i !== active ? null : (
              <div key={`content-${animKey}`} className="max-w-xl text-white lg:max-w-2xl">

                {/* Badge */}
                <p className="cs-badge inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-accent-200 backdrop-blur-sm sm:text-xs">
                  {slide.badge}
                </p>

                {/* Heading */}
                <h1 className="cs-title mt-3 font-heading text-3xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl">
                  {slide.title}{' '}
                  <span className="text-gradient-gold">{slide.highlight}</span>
                </h1>

                {/* Description */}
                <p className="cs-desc mt-3 max-w-lg text-sm leading-relaxed text-brand-100 sm:mt-4 sm:text-base">
                  {slide.desc}
                </p>

                {/* CTAs */}
                <div className="cs-cta mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
                  <div className="pulse-cta rounded-full">
                    <CTAButton to={slide.cta1.to} variant="accent">{slide.cta1.label}</CTAButton>
                  </div>
                  <CTAButton to={slide.cta2.to} variant="secondary">{slide.cta2.label}</CTAButton>
                </div>

                {/* Info tag */}
                <div className="cs-tag mt-5 inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 shadow-soft">
                  <span className="star-twinkle text-base text-accent-400">★</span>
                  <span className="text-xs font-bold text-brand-950 sm:text-sm">{slide.tag}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ── Arrow buttons ── */}
      <button onClick={prev} className="carousel-arrow z-30" style={{ left: '0.75rem' }} aria-label="Previous slide">‹</button>
      <button onClick={next} className="carousel-arrow z-30" style={{ right: '0.75rem' }} aria-label="Next slide">›</button>

      {/* ── Dot indicators (mobile & tablet) ── */}
      <div
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 lg:hidden"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={i === active ? {} : { width: '7px', height: '7px' }}
            className={`carousel-dot ${i === active ? 'carousel-dot-active' : 'w-[7px] h-[7px]'}`}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      {!paused && (
        <div key={`prog-${animKey}`} className="carousel-progress" />
      )}
    </section>
  )
}
