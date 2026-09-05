type ServiceFieldEntryProps = {
  icon: string;
  name: string;
  definition: string;
  triggers: string[];
  outcome: string;
  tier?: "flagship" | "standard";
};

export default function ServiceFieldEntry({
  icon,
  name,
  definition,
  triggers,
  outcome,
  tier = "standard",
}: ServiceFieldEntryProps) {
  return (
    <div className={`border-b border-brand-line last:border-0 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
      tier === "flagship" ? "relative" : ""
    }`}>
      {tier === "flagship" && (
        <div className="absolute -top-3 left-0">
          <span className="bg-brand-cyan text-brand-navy font-body font-bold text-xs px-3 py-1 rounded-full tracking-wide uppercase">
            High-Impact
          </span>
        </div>
      )}
      <div className={tier === "flagship" ? "pt-4" : ""}>
        <div className="text-5xl mb-4">{icon}</div>
        <h2 className="font-display font-bold text-brand-navy text-3xl sm:text-4xl mb-4">{name}</h2>
        <p className="font-body leading-relaxed text-brand-ink text-lg">{definition}</p>
      </div>
      <div className={`rounded-card border border-brand-line p-6 shadow-brand ${
        tier === "flagship" ? "bg-brand-navy/5 border-brand-cyan/30" : "bg-brand-sunken"
      } ${tier === "flagship" ? "pt-8" : ""}`}>
        <p className="eyebrow mb-3">You need this if...</p>
        <ul className="space-y-2 mb-5">
          {triggers.map((trigger, i) => (
            <li key={i} className="flex items-start gap-2 text-brand-ink font-body">
              <span className="text-brand-blue font-bold mt-0.5 shrink-0">✓</span>
              <span>{trigger}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-brand-line pt-4">
          <p className="eyebrow mb-1">Typical outcome</p>
          <p className="text-brand-navy font-display font-semibold">{outcome}</p>
        </div>
      </div>
    </div>
  );
}
