type TestimonialCardProps = {
  quote: string;
  name: string;
  business: string;
};

export default function TestimonialCard({ quote, name, business }: TestimonialCardProps) {
  return (
    <div className="bg-brand-surface rounded-card border border-brand-line p-6 border-l-4 border-l-brand-cyan shadow-brand">
      <p className="text-brand-ink leading-relaxed mb-4 italic font-body">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-display font-bold text-brand-navy text-sm">{name}</p>
        <p className="text-brand-ink-soft text-xs font-body">{business}</p>
      </div>
    </div>
  );
}
