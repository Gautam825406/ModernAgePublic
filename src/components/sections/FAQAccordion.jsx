import { useState } from 'react'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        return (
          <article key={item.question} className="overflow-hidden rounded-xl border border-brand-100 bg-white shadow-card">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-brand-950">{item.question}</span>
                <span className="text-brand-600">{isOpen ? '-' : '+'}</span>
              </button>
            </h3>
            {isOpen ? <p className="px-5 pb-5 text-sm leading-relaxed text-slate-700">{item.answer}</p> : null}
          </article>
        )
      })}
    </div>
  )
}

export default FAQAccordion
