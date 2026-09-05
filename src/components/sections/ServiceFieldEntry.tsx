import { LucideIcon } from "lucide-react";

type ServiceFieldEntryProps = {
  icon: LucideIcon;
  name: string;
  definition: string;
  triggers: string[];
  outcome: string;
  tier?: "flagship" | "standard";
};

export default function ServiceFieldEntry({
  icon: Icon,
  name,
  definition,
  triggers,
  outcome,
  tier = "standard",
}: ServiceFieldEntryProps) {
  return (
    <div className="border-b border-brand-line last:border-0 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
      {tier === "flagship" && (
        <div className="absolute -top-3 left-0">
          <span className="bg-brand-cyan text-brand-navy font-body font-bold text-xs px-3 py-1 rounded-full tracking-wide uppercase">
            High-Impact
          </span>
        </div>
      )}
      <div className={tier === "flagship" ? "pt-4" : ""}>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
          tier === "flagship" ? "gradient-cyan-navy" : "bg-brand-blue/10"
        }`}>
          <Icon
            className={`w-8 h-8 ${tier === "flagship" ? "text-white" : "text-brand-blue"}`}
            strokeWidth={1.5}
          />
        </div>
        <h2 className="font-display font-bold text-brand-navy text-3xl sm:text-4xl mb-4">{name}</h2>
        <p className="font-body leading-relaxed text-brand-ink text-lg">{definition}</p>
      </div>
      <div className={`rounded-card border p-6 shadow-brand ${
        tier === "flagship"
          ? "bg-brand-navy/5 border-brand-cyan/30 pt-8"
          : "bg-brand-sunken border-brand-line"
      }`}>
        <p className="eyebrow mb-3">You need this if...</p>
        <ul className="space-y-3 mb-5">
          {triggers.map((trigger, i) => (
            <li key={i} className="flex items-start gap-2.5 text-brand-ink font-body">
              <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue text-[10px] font-bold">✓</span>
              </span>
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
