type TestimonialCardProps = {
  quote: string;
  name: string;
  business: string;
};

export default function TestimonialCard({ quote, name, business }: TestimonialCardProps) {
  return (
    <div className="bg-brand-surface rounded-lg p-6 border-l-4 border-brand-gold">
      <p className="text-brand-dark leading-relaxed mb-4 italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-display font-semibold text-brand-dark text-sm">{name}</p>
        <p className="text-brand-slate text-xs">{business}</p>
      </div>
    </div>
  );
}
