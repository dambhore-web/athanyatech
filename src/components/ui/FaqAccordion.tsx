"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-brand-surface rounded-card border border-brand-line overflow-hidden shadow-brand">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-display font-semibold text-brand-navy pr-4">{item.question}</span>
            <span
              className={`text-brand-blue font-bold text-xl shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-brand-ink-soft font-body leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
