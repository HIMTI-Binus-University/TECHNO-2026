import technoLogo from '../assets/techno-logo.png'
import binusLogo from '../assets/binus-logo.png'
import himtiLogo from '../assets/himti-logo.png'

function Footer() {
  return (
    <footer className="mt-auto border-t border-line-soft/50 px-5 pb-10 pt-12 text-center md:px-16">
      <div className="mb-6 flex flex-wrap items-center justify-center gap-6 md:gap-14">
        <img src={technoLogo} alt="Techno 2026" className="h-16 w-auto object-contain opacity-95" />
        <img src={binusLogo} alt="Binus University" className="h-14 w-auto object-contain opacity-95" />
        <img src={himtiLogo} alt="HIMTI Binus University" className="h-14 w-auto object-contain opacity-95" />
      </div>
      <p className="text-[13px] tracking-[0.08em] text-text-muted">TradeMark HIMTI BINUS</p>
      <p className="mt-1 text-xs tracking-[0.08em] text-text-muted/70">All rights reserved</p>
    </footer>
  )
}

export default Footer
