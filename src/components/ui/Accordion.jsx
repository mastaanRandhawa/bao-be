import { useState } from 'react';

/** Accessible single-open accordion for FAQ content. */
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base uppercase tracking-wide text-ink">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-seal transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="max-w-2xl leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
