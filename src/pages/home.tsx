import instagramLogo from '../assets/instagram-logo.png'
import tiktokLogo from '../assets/tiktok-logo.png'
import emailLogo from '../assets/email-logo.png'
import boxIcon from '../assets/box-icon.png'

function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[600px] flex-col items-center justify-end px-0 py-0 md:min-h-[700px]">
        <div className="absolute inset-0 w-full h-full">
          <img 
          src="/src/assets/web-design-himti.png" alt="Background web himti"
          className="w-full h-full object-cover" 
          />
        </div>

        <div className="relative z-10 mb-6 max-w-md rounded-lg border border-line-soft/50 bg-bg-panel/50 px-6 py-4 text-center backdrop-blur-sm">
          <p className="font-display text-base text-text md:text-lg">Tag TECHNO 2026/Headline</p>
        </div>

        <button
          type="button"
          className="relative z-10 mb-6 rounded-md border-[1.5px] border-gold bg-gold px-8 py-3 font-display text-sm font-bold tracking-[0.1em] text-bg-deep transition-all hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(224,185,63,0.5)]"
          onClick={() => {
            document.getElementById('about-techno')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }}
        >
          Learn More →
        </button>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-2">
          <div id="about-techno" className="flex min-h-[280px] flex-col justify-between rounded-lg border border-line-soft/70 bg-bg-panel p-6 scroll-mt-24">
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">What is TECHNO?</h2>
              <p className="font-mono text-sm text-text-muted">TECHNO (Togetherness, Entertainment, and Chasing New Opportunity) is a joint event organized by HIMTI BINUS to welcome and inaugurate freshmen of the BINUS University School of Computer Science (SOCS). </p>
            </div>
            <button
              type="button"
              className="mt-4 self-start rounded-md border border-line-soft px-5 py-2 font-mono text-sm text-text transition-colors hover:border-gold hover:text-gold"
            >
              Guidebook →
            </button>
          </div>

          <div className="flex min-h-[280px] flex-col items-center justify-start rounded-lg border border-line-soft/70 bg-bg-panel p-6">
            <h2 className="mb-3 text-lg font-display text-lg font-bold text-white">
              Foto Panggung / Acara Tahun lalu
            </h2>
            <div className="flex h-64 w-full items-center justify-center rounded border border-line-soft/50 bg-bg-deep/50">
              <img 
                  src="/src/assets/panggung-tahun-lalu.jpg" alt="Dokumentasi panggung tahun lalu" 
                   className="h-full w-full rounded border border-line-soft/50 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 flex items-center justify-center gap-3">
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
            <h2 className="whitespace-nowrap font-display text-xl font-bold tracking-[0.2em] text-white md:text-3xl">
              Benefits
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

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: 'Starter Pack',
                description:
                  'Freshmen will receive PBP (Pengenalan Bahasa Pemrograman) training as a provision before entering the first semester lectures and to teach the basics of programming.',
              },
              {
                title: 'HIMTI Kit',
                description:
                  'After following the TECHNO Main Event, Freshmen will be provided with supplies in the form of a HIMTI KIT, which is a package containing a summary of courses and a collection of software that supports SoCS student lectures.',
              },
              {
                title: 'SOCS Inauguration',
                description:
                  "One of the series of TECHNO events is the inauguration of BINUS University's SoCS freshmen which is officially held under the SoCS faculty. Therefore, TECHNO is specifically for Binusian SoCS students.",
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 rounded-lg border border-line-soft/70 bg-bg-panel px-6 py-8"
              >
                <div className="flex h-24 w-24 items-center justify-center">
                  <img src={boxIcon} alt={title} className="h-24 w-24 object-contain" />
                </div>
                <p className="font-display text-base font-bold text-white">{title}</p>
                <p className="text-center text-sm text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 flex items-center justify-center gap-3">
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
            <h2 className="whitespace-nowrap font-display text-xl font-bold tracking-[0.2em] text-white md:text-3xl">
              Our Sponsors
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

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex aspect-square w-full items-center justify-center rounded-full border border-line-soft bg-bg-panel">
                  <p className="font-mono text-xs text-text-muted">Logo</p>
                </div>
                <p className="font-mono text-sm text-text">John Doe</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto max-w-[600px]">
          <div className="mb-10 flex items-center justify-center gap-3">
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
            <h2 className="whitespace-nowrap font-display text-xl font-bold tracking-[0.2em] text-white md:text-3xl">
              Contact Us
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

          <div className="flex flex-col gap-4">
            {[
              { icon: instagramLogo, label: 'Instagram', href: 'https://instagram.com/techno.himti' },
              { icon: tiktokLogo, label: 'TikTok', href: 'https://www.tiktok.com/@techno.himti' },
              { icon: emailLogo, label: 'E-Mail',  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=himtitechno2026@gmail.com' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-center gap-3 rounded-lg border border-line-soft bg-bg-panel px-6 py-4 font-display text-base text-white no-underline transition-colors hover:border-gold hover:text-gold"
              >
                 <img src={item.icon} alt={item.label} className="h-5 w-5 object-contain" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
