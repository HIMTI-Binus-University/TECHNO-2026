import { useState } from 'react'
import { faqItems } from '../data/faq'

function FAQPage() {
  const [activeId, setActiveId] = useState(faqItems[0].id)
  const active = faqItems.find((item) => item.id === activeId) ?? faqItems[0]

  return (
    <main className="flex-1 px-5 pb-16 pt-6 md:px-16">
      <div className="mx-auto max-w-[1000px]">
        <h1 className="mb-8 whitespace-nowrap font-display text-[clamp(18px,5.5vw,64px)] font-normal leading-tight text-white">
          What&apos;s Your Questions? FAQS
        </h1>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[340px_1fr]">
          <nav
            className="flex flex-col gap-[22px] rounded-[10px] border border-white px-5 py-2.5"
            aria-label="Kategori pertanyaan"
          >
            <span className="rounded-[10px] border border-[#C8B03E] bg-transparent px-[30px] py-[10px] text-center font-display text-[15px] font-bold tracking-[0.08em] text-[#C8B03E] md:text-lg">
              Kategori
            </span>
            <ul className="flex flex-col gap-[22px]">
              {faqItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`w-full rounded-[10px] border px-[30px] py-[10px] text-center font-display text-sm font-bold tracking-wide text-white transition-colors active:scale-[0.98] md:text-base ${
                      item.id === activeId
                        ? 'border-[#C8B03E] bg-[#C8B03E]/10 text-[#C8B03E]'
                        : 'border-white bg-[#04244A] hover:border-gold-dim hover:text-gold'
                    }`}
                    aria-pressed={item.id === activeId}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <section
            key={active.id}
            className="h-full animate-[faq-fade_0.25s_ease] rounded-[10px] border border-white bg-[#A9BBCF] px-6 py-7 md:px-8"
            aria-live="polite"
          >
            <p className="mb-2 font-mono text-lg font-bold leading-none tracking-normal text-[#000000] md:text-[36px]">
              {active.question}
            </p>
            <p className="font-mono text-lg font-bold leading-none tracking-normal text-[#000000] md:text-[36px]">
              {active.answer}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default FAQPage
