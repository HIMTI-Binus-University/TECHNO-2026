function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[600px] flex-col items-center justify-center px-5 py-20 md:min-h-[700px]">
        <div className="mb-8 flex min-h-[300px] w-full max-w-4xl items-center justify-center rounded-lg border border-line-soft/30 bg-bg-panel/30 md:min-h-[400px]">
          <p className="font-mono text-sm text-text-muted">Hero Image Placeholder</p>
        </div>

        <div className="mb-6 max-w-md rounded-lg border border-line-soft/50 bg-bg-panel/50 px-6 py-4 text-center backdrop-blur-sm">
          <p className="font-display text-base text-text md:text-lg">Tag TECHNO 2026/Headline</p>
        </div>

        <button
          type="button"
          className="rounded-md border-[1.5px] border-gold bg-gold px-8 py-3 font-display text-sm font-bold tracking-[0.1em] text-bg-deep transition-all hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(224,185,63,0.5)]"
        >
          Learn More →
        </button>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex min-h-[280px] flex-col justify-between rounded-lg border border-line-soft/70 bg-bg-panel p-6">
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">What is TECHNO?</h2>
              <p className="font-mono text-sm text-text-muted">Techno is lorem ipsum..</p>
            </div>
            <button
              type="button"
              className="mt-4 self-start rounded-md border border-line-soft px-5 py-2 font-mono text-sm text-text transition-colors hover:border-gold hover:text-gold"
            >
              Guidebook →
            </button>
          </div>

          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-line-soft/70 bg-bg-panel p-6">
            <h2 className="mb-4 text-center font-display text-lg font-bold text-white">
              Foto Panggung / Acara Tahun lalu
            </h2>
            <div className="flex h-40 w-full items-center justify-center rounded border border-line-soft/50 bg-bg-deep/50">
              <p className="font-mono text-xs text-text-muted">Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-gold md:w-24" />
            <h2 className="whitespace-nowrap font-display text-xl font-bold tracking-[0.2em] text-white md:text-3xl">
              Benefits
            </h2>
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-gold md:w-24" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {['Starter Pack', 'HIMTI Kit', 'SOOS Inauguration'].map((title) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 rounded-lg border border-line-soft/70 bg-bg-panel px-6 py-8"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-lg border border-line-soft bg-bg-deep/50">
                  <div className="h-16 w-16 rounded border-2 border-text/30" />
                </div>
                <p className="font-display text-base font-bold text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-gold md:w-24" />
            <h2 className="whitespace-nowrap font-display text-xl font-bold tracking-[0.2em] text-white md:text-3xl">
              Our Sponsors
            </h2>
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-gold md:w-24" />
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
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-gold md:w-24" />
            <h2 className="whitespace-nowrap font-display text-xl font-bold tracking-[0.2em] text-white md:text-3xl">
              Contact Us
            </h2>
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-gold md:w-24" />
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: 'IG', label: 'Instagram' },
              { icon: 'TT', label: 'TikTok' },
              { icon: '@', label: 'E-Mail' },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                className="flex items-center justify-center gap-3 rounded-lg border border-line-soft bg-bg-panel px-6 py-4 font-display text-base text-white transition-colors hover:border-gold hover:text-gold"
              >
                <span className="font-bold">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
