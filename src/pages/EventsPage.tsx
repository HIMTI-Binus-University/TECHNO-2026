import { useState } from 'react'
import { expoSlides } from '../data/events'

const stripeStyle = {
  background: 'repeating-linear-gradient(115deg, var(--color-gold) 0 3px, transparent 3px 9px)',
}

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3 md:gap-4">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-gold" />
      <span className="h-2.5 w-14 shrink-0 md:w-24" style={stripeStyle} />
      <h2 className="whitespace-nowrap font-display text-base font-normal tracking-[0.35em] text-gold md:text-2xl">
        {label}
      </h2>
      <span className="h-2.5 w-14 shrink-0 md:w-24" style={stripeStyle} />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-gold" />
    </div>
  )
}

function GamepadIcon() {
  return (
    <svg
      viewBox="0 0 48 32"
      className="h-10 w-14 md:h-12 md:w-16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 6h20a12 12 0 0 1 12 12v2a8 8 0 0 1-14.4 4.8L29 22h-10l-2.6 2.8A8 8 0 0 1 2 20v-2A12 12 0 0 1 14 6Z" />
      <path d="M11 15v6M8 18h6" />
      <circle cx="34" cy="14" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="38" cy="18" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg
      viewBox="0 0 32 40"
      className="h-10 w-8 md:h-12 md:w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="11" y="2" width="10" height="20" rx="5" />
      <path d="M6 18a10 10 0 0 0 20 0" />
      <path d="M16 28v6M11 34h10" />
    </svg>
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
      <div className="mx-auto flex max-w-[1000px] flex-col gap-14">
        {/* EVENTS */}
        <section>
          <SectionHeading label="EVENTS" />

          <div className="min-h-[180px] rounded-[10px] border border-white/70 bg-bg-panel md:min-h-[220px]" />

          <div className="mt-5 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">Jadi apa itu PBP?</p>
            <p className="font-mono text-sm text-text-muted md:text-base">Lorem Ipsum MBG...</p>
          </div>
        </section>

        {/* MAIN SHOW */}
        <section>
          <SectionHeading label="MAIN SHOW" />

          <div className="flex min-h-[140px] items-center justify-center rounded-[10px] border border-white/70 bg-bg-panel px-6 py-10 md:min-h-[170px]">
            <p className="font-display text-lg font-bold tracking-[0.15em] text-white md:text-2xl">GUEST STAR</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 md:gap-5">
            <div className="flex aspect-square flex-col items-center justify-center gap-4 rounded-[10px] border border-white/70 bg-bg-panel px-4 py-6">
              <p className="font-display text-sm font-bold tracking-[0.15em] text-white md:text-base">GAMES</p>
              <span className="text-text-muted">
                <GamepadIcon />
              </span>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-4 rounded-[10px] border border-white/70 bg-bg-panel px-4 py-6">
              <p className="font-display text-sm font-bold tracking-[0.15em] text-white md:text-base">TALK SHOW</p>
              <span className="text-gold">
                <MicIcon />
              </span>
            </div>
          </div>
        </section>

        {/* EXPO */}
        <section>
          <SectionHeading label={`EXPO (${total})`} />

          <div className="relative">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Slide sebelumnya"
              className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-bg-deep text-lg text-gold transition-colors hover:bg-gold hover:text-bg-deep md:h-10 md:w-10"
            >
              ‹
            </button>

            <div
              key={current.id}
              className="flex min-h-[160px] animate-[faq-fade_0.25s_ease] flex-col items-center justify-center gap-2 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-10 text-center md:min-h-[200px]"
            >
              <p className="font-display text-base font-bold text-white md:text-lg">{current.title}</p>
              <p className="max-w-md font-mono text-sm text-text-muted">{current.description}</p>
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Slide berikutnya"
              className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gold bg-bg-deep text-lg text-gold transition-colors hover:bg-gold hover:text-bg-deep md:h-10 md:w-10"
            >
              ›
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {expoSlides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ke slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === slide ? 'bg-gold' : 'bg-line-soft'}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="mt-5 w-full rounded-[10px] border border-white/70 bg-bg-panel py-3 text-center font-display text-sm font-bold tracking-[0.1em] text-white transition-colors hover:border-gold hover:text-gold md:text-base"
          >
            Keterangan EXPO 123
          </button>
        </section>
      </div>
    </main>
  )
}

export default EventsPage
