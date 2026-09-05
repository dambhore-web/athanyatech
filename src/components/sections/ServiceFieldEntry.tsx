type ServiceFieldEntryProps = {
  icon: string;
  name: string;
  definition: string;
  triggers: string[];
  outcome: string;
};

export default function ServiceFieldEntry({
  icon,
  name,
  definition,
  triggers,
  outcome,
}: ServiceFieldEntryProps) {
  return (
    <div className="border-b border-brand-surface last:border-0 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <div className="text-5xl mb-4">{icon}</div>
        <h2 className="font-display font-bold text-brand-dark text-3xl sm:text-4xl mb-4">
          {name}
        </h2>
        <p className="leading-relaxed text-brand-dark text-lg">{definition}</p>
      </div>
      <div className="bg-brand-surface rounded-lg p-6">
        <p className="font-display font-semibold text-xs uppercase tracking-widest text-brand-slate mb-3">
          You need this if...
        </p>
        <ul className="space-y-2 mb-5">
          {triggers.map((trigger, i) => (
            <li key={i} className="flex items-start gap-2 text-brand-dark">
              <span className="text-brand-gold font-bold mt-0.5 shrink-0">✓</span>
              <span>{trigger}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-brand-indigo/20 pt-4">
          <p className="font-display text-xs uppercase tracking-widest text-brand-slate mb-1">
            Typical outcome
          </p>
          <p className="text-brand-indigo font-semibold">{outcome}</p>
        </div>
      </div>
    </div>
  );
}
