type Step = {
  number: string;
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: Step[];
};

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Horizontal connector line (desktop) */}
      <div
        className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-brand-gold/30"
        aria-hidden
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-start md:items-center md:text-center">
            {/* Vertical connector (mobile) */}
            {i < steps.length - 1 && (
              <div
                className="md:hidden absolute left-4 top-10 bottom-0 w-0.5 bg-brand-gold/30 -mb-8"
                aria-hidden
              />
            )}
            <div className="relative z-10 w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center mb-4 shrink-0">
              <span className="font-display font-bold text-brand-dark text-xl">
                {step.number}
              </span>
            </div>
            <h3 className="font-display font-bold text-brand-dark text-lg mb-2">
              {step.title}
            </h3>
            <p className="text-brand-slate text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
