import { useState } from 'react'
import { expoSlides } from '../data/events'

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 md:gap-4">
      <img 
        src="/src/assets/diamond-shape.svg" alt="Diamond" 
        className="h-2 w-3 shrink-0 object-contain"
      />
      <img 
        src="/src/assets/stripe.svg" alt="Stripe-Left"
        className="w-14 h-[39.5px]"
        style={{
            transform: "scaleX(-1)",
            opacity: 1,
        }}
      />
      <h2 className="whitespace-nowrap font-display text-base font-normal tracking-[0.35em] text-gold md:text-2xl">
        {label}
      </h2>
      <img 
        src="/src/assets/stripe.svg" alt="Stripe-Right" 
        className="w-14 h-[39.5px]"
        style={{
            opacity: 1,
        }}
      />
      <img 
        src="/src/assets/diamond-shape.svg" alt="Diamond" 
        className="h-2 w-3 shrink-0 object-contain"
      />
    </div>
  )
}

function EventsPage() {
  const [slide, setSlide] = useState(0)
  const total = expoSlides.length
  const current = expoSlides[slide]

  const prevSlide = () => setSlide((s) => (s - 1 + total) % total)
  const nextSlide = () => setSlide((s) => (s + 1) % total)

  return (
    <main className="flex-1 px-5 pb-20 pt-6 md:px-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8">
        {/* EVENTS */}
        <section>
          <SectionHeading label="EVENTS" />

          <div className="min-h-[180px] rounded-[10px] border border-white/70 bg-bg-panel md:min-h-[220px]" />

          <div className="mt-5 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">Jadi apa itu PBP?</p>
            <p className="font-mono text-sm text-text-muted md:text-base">Lorem Ipsum MBG...</p>
          </div>
        </section>

        <hr className="border-t border-white w-full"/>

        {/* MAIN SHOW */}
        <section>
          <SectionHeading label="MAIN SHOW" />
          <div className="flex min-h-[140px] items-top justify-center rounded-[10px] border border-white/70 bg-bg-panel px-6 py-3 md:min-h-[170px]">
            <p className="font-display text-lg font-bold tracking-[0.15em] text-white md:text-2xl">GUEST STAR</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 md:gap-5">
            <div className="flex aspect-square flex-col items-center justify-between rounded-[10px] border border-white/70 bg-bg-panel px-4 py-3">
              <p className="font-display text-lg font-bold tracking-[0.15em] text-white md:text-2xl">GAMES</p>
              <span className="my-auto">
                <img 
                  src="/src/assets/game-icon.svg" alt="Game" 
                  className="w-20 h-auto object-contain md:w-70"
                />
              </span>
            </div>
            <div className="flex aspect-square flex-col items-center justify-between rounded-[10px] border border-white/70 bg-bg-panel px-4 py-3">
              <p className="font-display text-lg font-bold tracking-[0.15em] text-white md:text-2xl">TALK SHOW</p>
              <span className="my-auto">
                <img 
                  src="/src/assets/mic-icon.svg" alt="Mic" 
                  className="w-20 h-auto object-contain md:w-70"
                />
              </span>
            </div>
          </div>
        </section>

        <hr className="border-t border-white w-full"/>

        {/* EXPO */}
        <section>
          <SectionHeading label={`EXPO (${total})`} />
          <div className="relative">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Slide sebelumnya"
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#04244A] text-white transition-all hover:border-gold hover:text-gold sm:-left-8 sm:h-14 sm:w-14 md:-left-12 md:h-16 md:w-16 lg:-left-16 lg:h-20 lg:w-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div
              key={current.id}
              className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[10px] border border-white/70 bg-bg-panel animate-[faq-fade_0.25s_ease]"
            >
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover"
              />
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Slide berikutnya"
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/70 bg-[#04244A] text-white transition-all hover:border-gold hover:text-gold sm:-right-8 sm:h-14 sm:w-14 md:-right-12 md:h-16 md:w-16 lg:-right-16 lg:h-20 lg:w-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="mt-3 flex flex-col items-center justify-center gap-1 rounded-[10px] border border-white/70 bg-bg-panel px-4 py-3 text-center">
            <p className="font-display text-sm font-bold tracking-[0.1em] text-white md:text-base">
              {current?.title || "Keterangan EXPO"}
            </p>
            {current.description && (
              <p className="max-w-md font-mono text-xs text-text-muted md:text-sm">
                {current.description}
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {expoSlides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ke slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === slide ? 'w-4 bg-[#05EEF6]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default EventsPage