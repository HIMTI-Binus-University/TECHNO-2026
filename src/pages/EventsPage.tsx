import { useState } from 'react'
import { expoSlides } from '../data/events'
import stripe from "../assets/stripe.svg"
import diamond from "../assets/diamond-shape.svg"
import python from "../assets/Python-logo.webp"
import game from "../assets/game-icon.svg"
import mic from "../assets/mic-icon.svg"

interface PbpScheduleGroup {
  id: string
  title: string
  date: string
  formats: { label: string; icon: string; regions: string }[]
  language: string
}

const pbpSchedule: PbpScheduleGroup[] = [
  {
    id: 'kemanggisan',
    title: 'Kemanggisan',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Hybrid', icon: '🔁', regions: 'Kemanggisan' }],
    language: 'Basic C',
  },
  {
    id: 'alam-sutera',
    title: 'Alam Sutera',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Hybrid', icon: '🔁', regions: 'Alam Sutera' }],
    language: 'Basic C',
  },
  {
    id: 'semarang',
    title: 'Semarang',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Hybrid', icon: '🔁', regions: 'Semarang' }],
    language: 'Basic C',
  },
  {
    id: 'bandung',
    title: 'Bandung',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Onsite', icon: '🏫', regions: 'Bandung' }],
    language: 'Basic C',
  },
  {
    id: 'malang',
    title: 'Malang',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Online', icon: '💻', regions: 'Malang' }],
    language: 'Basic C',
  },
  {
    id: 'medan',
    title: 'Medan',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Online', icon: '💻', regions: 'Medan' }],
    language: 'Basic C',
  },
  {
    id: 'bekasi',
    title: 'Bekasi',
    date: '31 Agustus 2026 – 2 September 2026',
    formats: [{ label: 'Online', icon: '💻', regions: 'Bekasi' }],
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
        src={diamond} alt="Diamond" 
        className="h-2 w-3 shrink-0 object-contain"
      />
      <img 
        src={stripe} alt="Stripe-Left"
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
        src={stripe} alt="Stripe-Right" 
        className="w-14 h-[39.5px]"
        style={{
            opacity: 1,
        }}
      />
      <img 
        src={diamond} alt="Diamond" 
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
        <section>
          <SectionHeading label="EVENTS" />

          <div className="rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">🌟 About PBP</p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              PBP (Pengenalan Bahasa Pemrograman) is one of the event series of{' '}
              <span className="text-text">TECHNO NOVA 2026: Opportunities, Vision &amp; Advancement</span>{' '}
              organized by HIMTI BINUS University to welcome School of Computer Science (SOCS) freshmen. Through
              this program, participants will be introduced to the fundamentals of programming to help them prepare
              for their academic journey at BINUS University.
            </p>
            <br />
            <p className="mt-4 mb-2 font-display text-sm font-bold text-white md:text-base">📚 Learning Topics</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pbpTopics.map((topic) => (
                <p key={topic} className="flex items-start gap-2 font-mono text-sm text-text-muted md:text-base">
                  <span className="text-gold">✅</span>
                  <span>{topic}</span>
                </p>
              ))}
            </div>
            <br />
            <div className="mt-4 flex items-center gap-3 rounded-[8px] border border-gold/40 bg-bg px-4 py-3 font-mono text-sm text-text-muted md:text-base">
              <img
                src={python}
                alt="python"
                className="w-10 h-auto shrink-0"
              />

              <p>
                <span className="text-gold">Special for Senayan Region:</span> The learning materials will be
                delivered using Python as an introduction to programming fundamentals. 🐍
              </p>
            </div>
            <br />
            <p className="mt-4 mb-2 font-display text-sm font-bold text-white md:text-base">
              💡 Keep Learning Beyond the Session
            </p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              PBP is designed to introduce the fundamentals of programming. Participants are encouraged to continue
              exploring and practicing independently to further develop their coding skills.
            </p>
          </div>

          <div className="mt-5 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">🚀 Hello, SOCS Freshmen! ✨</p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              Welcome to PBP TECHNO 2026! 🎉 Get ready to take your first step into the world of programming through PBP
              (Pengenalan Bahasa Pemrograman)—an exciting learning experience designed to help you build a strong
              foundation before starting your journey as a School of Computer Science student.
            </p>
          </div>

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

          <div className="mt-6 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">📍 Venue Information</p>
            <ul className="flex flex-col gap-1.5 font-mono text-sm text-text-muted md:text-base">
              <li>🔁 <span className="text-text">Kemanggisan, Alam Sutera, and Semarang:</span> Hybrid</li>
              <li>💻 <span className="text-text">Senayan, Malang, Bekasi & Medan:</span> Online</li>
              <li>🏫 <span className="text-text">Bandung:</span> Onsite</li>
            </ul>
          </div>

          <div className="mt-6 rounded-[10px] border border-white/70 bg-bg-panel px-6 py-5">
            <p className="mb-2 font-display text-base font-bold text-white md:text-lg">🌟 About PBP</p>
            <p className="font-mono text-sm text-text-muted md:text-base">
              PBP (Pengenalan Bahasa Pemrograman) is one of the event series of TECHNO 2026, organized by HIMTI BINUS
              University to welcome School of Computer Science (SOCS) freshmen. Through this program, participants
              will be introduced to the fundamentals of programming to help them prepare for their academic journey
              at BINUS University.
            </p>
          </div>

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
                src={python} 
                alt="python" 
                className="w-10 h-auto shrink-0" 
              /> 
              <p>
                <span className="text-gold">Special for Senayan Region:</span> The learning materials will be
                delivered using Python as an introduction to programming fundamentals.
              </p>
            </div>
          </div>

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

        <section>
          <SectionHeading label="MAIN SHOW" />
          <div className="flex flex-col items-center justify-center min-h-[140px] rounded-[10px] border border-white/70 bg-bg-panel px-6 py-6 md:min-h-[170px] gap-4">
            <p className="font-display text-lg font-bold tracking-[0.15em] text-white md:text-2xl">
              GUEST STAR
            </p>
            {/* <img 
              src={garamerica}
              alt="garamerica" 
              className="h-auto max-w-full rounded-md" 
            /> */}

            <div className="relative flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-gold/40"
                style={{ animation: 'spin-slow 12s linear infinite' }}
              />

              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/70 bg-bg md:h-28 md:w-28"
                style={{ animation: 'guest-glow 2.6s ease-in-out infinite' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-14 w-14 text-white/10 md:h-16 md:w-16"
                >
                  <path d="M12 12c2.76 0 5-2.46 5-5.5S14.76 1 12 1 7 3.46 7 6.5 9.24 12 12 12Zm0 2c-4.42 0-9 2.24-9 5v3h18v-3c0-2.76-4.58-5-9-5Z" />
                </svg>
                <span
                  className="absolute font-display text-3xl font-bold text-gold md:text-4xl"
                  style={{ animation: 'guest-flicker 3.5s ease-in-out infinite' }}
                >
                  ?
                </span>
              </div>
            </div>

            <span className="rounded-full border border-gold/50 bg-bg px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-gold md:text-xs">
              TO BE ANNOUNCED
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:gap-5">
            <div className="group flex h-full flex-col items-center rounded-[10px] border border-white/70 bg-bg-panel px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_10px_30px_-8px_rgba(224,185,63,0.35)]">
              <div className="flex h-20 items-center justify-center md:h-24">
                <img
                  src={game}
                  alt="Game"
                  className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 md:max-h-20"
                />
              </div>
              <p className="mt-4 font-display text-lg font-bold tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-gold md:text-2xl">
                GAMES
              </p>
              <p className="mt-2 font-mono text-xs text-text-muted md:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, doloremque?
              </p>
            </div>

            <div className="group flex h-full flex-col items-center rounded-[10px] border border-white/70 bg-bg-panel px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_10px_30px_-8px_rgba(224,185,63,0.35)]">
              <div className="flex h-20 items-center justify-center md:h-24">
                <img
                  src={mic}
                  alt="Mic"
                  className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 md:max-h-20"
                />
              </div>
              <p className="mt-4 font-display text-lg font-bold tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-gold md:text-2xl">
                TALK SHOW
              </p>
              <p className="mt-2 font-mono text-xs text-text-muted md:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, doloremque.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-white w-full"/>

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