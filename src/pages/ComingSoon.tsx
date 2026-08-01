function ComingSoon({ title }: { title: string }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-5 py-20 text-center">
      <p className="font-mono text-[13px] tracking-[0.2em] text-gold">Techno 2026</p>
      <h1 className="text-[28px] md:text-[44px]">{title}</h1>
      <p className="font-mono text-sm text-text-muted">Halaman ini sedang dalam proses pengerjaan.</p>
    </main>
  )
}

export default ComingSoon
