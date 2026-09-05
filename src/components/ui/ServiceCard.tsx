import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-brand-surface rounded-lg p-6 hover:shadow-md transition-shadow group">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-display font-bold text-brand-dark text-lg mb-2">
        {title}
      </h3>
      <p className="text-brand-slate text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link
        href="/services"
        className="font-display text-sm font-semibold text-brand-indigo group-hover:text-brand-gold transition-colors inline-flex items-center gap-1"
      >
        Learn more <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
