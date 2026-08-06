import { useState } from 'react'
import { expoSlides } from '../data/events'

interface PbpScheduleGroup {
  id: string
  title: string
  date: string
  formats: { label: string; icon: string; regions: string }[]
  language: string
}

const pbpSchedule: PbpScheduleGroup[] = [
  {
    id: 'general',
    title: 'Kemanggisan, Alam Sutera, Semarang, Bandung, Malang, Medan & Bekasi',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [
      { label: 'Hybrid', icon: '🔁', regions: 'Kemanggisan, Alam Sutera, Semarang' },
      { label: 'Onsite', icon: '🏫', regions: 'Bandung' },
      { label: 'Online', icon: '💻', regions: 'Malang, Medan & Bekasi' },
    ],
    language: 'Basic C',
  },
  {
    id: 'senayan',
    title: 'Senayan',
    date: '31 Agustus & 2 September 2026',
    formats: [{ label: 'Online', icon: '💻', regions: 'Senayan' }],
    language: 'Python',
  },
]

const pbpTopics = [
  'Introduction to C',
  'Structure in C',
  'Data Types & Variables',
  'Input & Output',
  'Arithmetic, Relational, Logical & Bitwise Operators',
  'Selection & Repetition',
  'Introduction to Pointers & Arrays',
  'Additional Libraries in C',
]

const REGISTER_URL = 'https://link.himtibinus.or.id/EarlyBirdTECHNO2026'

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

  const [pbpSlide, setPbpSlide] = useState(0)
  const pbpTotal = pbpSchedule.length
  const currentPbp = pbpSchedule[pbpSlide]

  const prevPbpSlide = () => setPbpSlide((s) => (s - 1 + pbpTotal) % pbpTotal)
  const nextPbpSlide = () => setPbpSlide((s) => (s + 1) % pbpTotal)

  return (
    <main className="flex-1 px-5 pb-20 pt-6 md:px-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8">
        {/* EVENTS */}
        <section>
          <SectionHeading label="EVENTS" />

          <div className="min-h-[180px] rounded-[10px] border border-white/70 bg-bg-panel md:min-h-[220px]" />

          <div className="mt-5 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">🚀 Hello, SOCS Freshmen! ✨</p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              Welcome to PBP TECHNO 2026! 🎉 Get ready to take your first step into the world of programming through PBP
              (Pengenalan Bahasa Pemrograman)—an exciting learning experience designed to help you build a strong
              foundation before starting your journey as a School of Computer Science student.
            </p>
          </div>

          {/* PBP SCHEDULE */}
          <div className="mt-8">
            <p className="mb-4 text-center font-display text-sm font-bold tracking-[0.2em] text-gold md:text-base">
              📅 SCHEDULE
            </p>

            <div className="relative">
              <button
                type="button"
                onClick={prevPbpSlide}
                aria-label="Jadwal sebelumnya"
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#04244A] text-white transition-all hover:border-gold hover:text-gold sm:-left-8 sm:h-14 sm:w-14 md:-left-12 md:h-16 md:w-16"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div
                key={currentPbp.id}
                className="flex flex-col items-center gap-3 rounded-[10px] border border-gold/50 bg-bg-panel px-6 py-6 text-center animate-[faq-fade_0.25s_ease]"
              >
                <p className="font-display text-base font-bold text-gold md:text-lg">{currentPbp.title}</p>

                <div className="flex w-full max-w-md flex-col gap-2 rounded-[8px] border border-white/20 px-4 py-4 text-left">
                  <p className="flex items-start gap-2 font-mono text-xs text-text-muted md:text-sm">
                    <span>📅</span>
                    <span>{currentPbp.date}</span>
                  </p>
                  {currentPbp.formats.map((f) => (
                    <p key={f.label + f.regions} className="flex items-start gap-2 font-mono text-xs text-text-muted md:text-sm">
                      <span>{f.icon}</span>
                      <span>
                        <span className="text-text">{f.regions}:</span> {f.label}
                      </span>
                    </p>
                  ))}
                  <p className="flex items-start gap-2 font-mono text-xs text-text-muted md:text-sm">
                    <span>📝</span>
                    <span>{currentPbp.language}</span>
                  </p>
                </div>

                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full max-w-md rounded-md border-[1.5px] border-gold bg-gold px-4 py-2 text-center text-xs font-bold tracking-[0.08em] text-bg-deep no-underline transition-all hover:shadow-[0_0_18px_rgba(224,185,63,0.45)] md:text-sm"
                >
                  Register Now
                </a>
              </div>

              <button
                type="button"
                onClick={nextPbpSlide}
                aria-label="Jadwal berikutnya"
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/70 bg-[#04244A] text-white transition-all hover:border-gold hover:text-gold sm:-right-8 sm:h-14 sm:w-14 md:-right-12 md:h-16 md:w-16"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {pbpSchedule.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Ke jadwal ${i + 1}`}
                  onClick={() => setPbpSlide(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === pbpSlide ? 'w-4 bg-gold' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* VENUE INFO */}
          <div className="mt-6 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">📍 Venue Information</p>
            <ul className="flex flex-col gap-1.5 font-mono text-sm text-text-muted md:text-base">
              <li>🔁 <span className="text-text">Kemanggisan, Alam Sutera, and Semarang:</span> Hybrid</li>
              <li>💻 <span className="text-text">Senayan, Malang, Bekasi & Medan:</span> Online</li>
              <li>🏫 <span className="text-text">Bandung:</span> Onsite</li>
            </ul>
          </div>

          {/* ABOUT PBP */}
          <div className="mt-6 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">🌟 About PBP</p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              PBP (Pengenalan Bahasa Pemrograman) is one of the event series of TECHNO 2026, organized by HIMTI BINUS
              University to welcome School of Computer Science (SOCS) freshmen. Through this program, participants
              will be introduced to the fundamentals of programming to help them prepare for their academic journey
              at BINUS University.
            </p>
          </div>

          {/* LEARNING TOPICS */}
          <div className="mt-6 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-3 font-display text-base font-bold text-white md:text-lg">📚 Learning Topics</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pbpTopics.map((topic) => (
                <p key={topic} className="flex items-start gap-2 font-mono text-sm text-text-muted md:text-base">
                  <span className="text-gold">✅</span>
                  <span>{topic}</span>
                </p>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[8px] border border-gold/40 bg-bg px-4 py-3 font-mono text-sm text-text-muted md:text-base">
              <img 
                src="/src/assets/Python-logo.webp" 
                alt="python" 
                className="w-10 h-auto shrink-0" 
              /> 
              <p>
                <span className="text-gold">Special for Senayan Region:</span> The learning materials will be
                delivered using Python as an introduction to programming fundamentals.
              </p>
            </div>
          </div>

          {/* CLOSING NOTE */}
          <div className="mt-6 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">💡 Keep Learning Beyond the Session</p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              PBP is designed to introduce the fundamentals of programming. Participants are encouraged to continue
              exploring and practicing independently to further develop their coding skills. We look forward to
              seeing you at PBP TECHNO 2026. Let's start your programming journey together! 💻🚀
            </p>
          </div>
        </section>

        <hr className="border-t border-white w-full"/>

        {/* MAIN SHOW */}
        <section>
          <SectionHeading label="MAIN SHOW" />
          <div className="flex flex-col items-center justify-center min-h-[140px] rounded-[10px] border border-white/70 bg-bg-panel px-6 py-3  md:min-h-[170px] gap-3">
            <p className="font-display text-lg font-bold tracking-[0.15em] text-white md:text-2xl">
              GUEST STAR
            </p>
            <img 
              src="/src/assets/garamerica.jpg" 
              alt="garamerica" 
              className="h-auto max-w-full rounded-md" 
            />
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
          <SectionHeading label={`EXPO`} />
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