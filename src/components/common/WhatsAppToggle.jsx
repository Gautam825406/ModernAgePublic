import { useState } from 'react'

function WhatsAppToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const rawNumber = '7250156202'
  const formattedNumber = '72501 56202'
  const presetMessage = encodeURIComponent(
    'Namaste Modern Age Public School team, I would like to inquire about admissions. Kindly guide me with the next steps.'
  )
  const chatLink = `https://wa.me/91${rawNumber}?text=${presetMessage}`

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 right-4 z-40 flex flex-col items-stretch gap-3 sm:bottom-6 sm:left-auto sm:right-6 sm:items-end">
      {isOpen && (
        <div className="pointer-events-auto w-full rounded-2xl border border-brand-100 bg-white/95 p-4 text-sm leading-relaxed text-slate-700 shadow-2xl sm:w-72">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">WhatsApp Support</p>
          <p className="mt-2 text-sm text-slate-800">
            Message us on WhatsApp for quick admission or hostel queries. We usually reply during school hours.
          </p>
          <p className="mt-3 text-xs font-semibold text-slate-500">Number: {formattedNumber}</p>
          <a
            href={chatLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-600"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle WhatsApp contact"
        onClick={() => setIsOpen((prev) => !prev)}
        className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30 transition hover:bg-emerald-600 sm:w-auto"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-bold">WA</span>
        <span>WhatsApp</span>
      </button>
    </div>
  )
}

export default WhatsAppToggle
