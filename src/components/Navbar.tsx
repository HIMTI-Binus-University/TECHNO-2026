import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import technoLogo from '../assets/techno-logo.png'

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/events', label: 'EVENTS' },
  { to: '/faq', label: 'FAQ' },
]

const linkBase =
  'relative py-1.5 text-sm font-bold tracking-[0.12em] text-text/85 no-underline transition-opacity hover:opacity-100 ' +
  "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-full after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:right-0"

const linkActive = 'text-gold opacity-100 after:right-0'

const registerClasses =
  'rounded-md border-[1.5px] border-gold bg-gold px-5 py-2 text-center text-[13px] font-bold tracking-[0.1em] text-bg-deep no-underline transition-all hover:bg-gold hover:text-bg-deep hover:shadow-[0_0_18px_rgba(224,185,63,0.45)]'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-bg to-transparent px-5 pt-5 pb-2 md:px-16">
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <NavLink to="/" className="flex shrink-0 items-center no-underline md:justify-self-start" onClick={() => setOpen(false)}>
          <img src={technoLogo} alt="Techno 2026" className="h-[46px] w-auto" />
        </NavLink>

        {/* Desktop nav: centered via the 1fr/auto/1fr grid */}
        <nav className="hidden items-center gap-8 md:flex md:justify-self-center lg:gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:justify-self-end">
          <a 
            href="https://link.himtibinus.or.id/EarlyBirdTECHNO2026" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`hidden md:inline-block ${registerClasses}`}
          >
            REGISTER
          </a>

          <button
            type="button"
            className="flex flex-col gap-[5px] border-none bg-transparent p-2 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 rounded bg-text" />
            <span className="h-0.5 w-6 rounded bg-text" />
            <span className="h-0.5 w-6 rounded bg-text" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-line-soft/50 bg-bg-deep px-5 pb-5 pt-2 md:hidden">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ''} border-b border-line-soft/50 py-3`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a 
              href="https://link.himtibinus.or.id/EarlyBirdTECHNO2026" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`mt-3 ${registerClasses}`} 
              onClick={() => setOpen(false)}
            >
              REGISTER
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar