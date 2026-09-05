type ProblemStripProps = {
  problems: string[];
};

export default function ProblemStrip({ problems }: ProblemStripProps) {
  return (
    <section className="bg-brand-sunken border-y border-brand-line py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {problems.map((problem, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-brand-blue text-lg mt-0.5 shrink-0 font-bold" aria-hidden>?</span>
              <p className="text-brand-ink-soft font-body leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
