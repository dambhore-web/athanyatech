import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    icon: "💬",
    heading: "Plain language, always",
    body: "We explain what we&apos;re building and why, in terms that make sense to you — not tech speak. You&apos;ll always know what&apos;s happening with your project.",
  },
  {
    icon: "🔑",
    heading: "You own everything we build",
    body: "Every website, app, and tool we create belongs to you completely. No lock-ins, no monthly fees to keep what you paid for.",
  },
  {
    icon: "💰",
    heading: "Fixed-price quotes, no surprises",
    body: "Before we start, you get a clear quote with the full cost. We don&apos;t add fees halfway through — what we quote is what you pay.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-brand-surface" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Why Athanya</SectionLabel>
          <h2
            id="why-heading"
            className="font-display font-bold text-brand-dark text-3xl sm:text-4xl"
          >
            A technology partner you can actually trust
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.heading}>
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-display font-bold text-brand-dark text-xl mb-3">
                {reason.heading}
              </h3>
              <p
                className="text-brand-slate leading-relaxed"
                dangerouslySetInnerHTML={{ __html: reason.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
