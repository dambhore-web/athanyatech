import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-brand-surface rounded-card border border-brand-line p-6 hover:shadow-brand-md transition-shadow group">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{title}</h3>
      <p className="text-brand-ink-soft text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href="/services"
        className="font-body text-sm font-bold text-brand-blue group-hover:text-brand-cyan transition-colors inline-flex items-center gap-1"
      >
        Learn more <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
