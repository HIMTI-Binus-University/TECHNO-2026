import { useState } from 'react'
import { faqItems } from '../data/faq'

function FAQPage() {
  const [activeId, setActiveId] = useState(faqItems[0].id)
  const active = faqItems.find((item) => item.id === activeId) ?? faqItems[0]

  return (
    <main className="flex-1 px-5 pb-16 pt-6 md:px-16">
      <div className="mx-auto max-w-250">
        <h1 className="whitespace-nowrap font-mono text-[clamp(18px,5.5vw,50px)] font-normal leading-none text-white">
           What&apos;s Your Questions? FAQS
        </h1>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-[340px_1fr]">
          <nav
            className="flex flex-col self-start gap-3.5 rounded-[10px] border border-white px-5 py-2.5"
            aria-label="Kategori pertanyaan"
          >
            <span className="pt-3.5 pb-3.5 w-full rounded-[7px] border-[3px] border-[#C8B03E] bg-transparent px-7.5 py-2.5 text-center font-mono text-base font-bold leading-none tracking-normal text-[#C8B03E] md:text-[22px]">
              Kategori
            </span>
            <ul className="flex flex-col gap-3.5">
              {faqItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`pt-3.5 pb-3.5 w-full rounded-[7px] border px-7.5 py-2.5 text-center font-mono text-sm font-bold leading-none tracking-normal text-white transition-colors active:scale-[0.98] md:text-[22px] ${
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
            className="h-full animate-[faq-fade_0.25s_ease] rounded-[10px] border border-white bg-paper px-6 py-7 md:px-8"
            aria-live="polite"
          >
            <p className="mb-4 text-justify font-mono text-lg font-bold leading-none tracking-normal text-[#000000] md:mb-6 md:text-[24px]">
              {active.question}
            </p>
            <br></br>
            <p className="mb-4 text-justify font-mono text-lg leading-snug tracking-normal text-[#000000] md:mb-6 md:text-[18px]">
              {active.answer}
            </p>
            <br></br>
            {active.question2 && (
              <>
                <p className="mb-4 text-justify font-mono text-lg font-bold leading-none tracking-normal text-[#000000] md:mb-6 md:text-[24px]">
                  {active.question2}
                </p>
                <br></br>
                <p className="mb-4 text-justify font-mono text-lg leading-snug tracking-normal text-[#000000] md:mb-6 md:text-[18px]">
                  {active.answer2}
                </p>
              </>
            )}
            <br></br>
            {active.question3 && (
              <>
                <p className="mb-4 text-justify font-mono text-lg font-bold leading-none tracking-normal text-[#000000] md:mb-6 md:text-[24px]">
                  {active.question3}
                </p>
                <br></br>
                <p className="mb-4 text-justify font-mono text-lg leading-snug tracking-normal text-[#000000] md:mb-6 md:text-[18px]">
                  {active.answer3}
                </p>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default FAQPage