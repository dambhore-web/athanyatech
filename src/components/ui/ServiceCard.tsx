import Link from "next/link";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-brand-surface rounded-card border border-brand-line p-6 hover:shadow-brand-md transition-all hover:-translate-y-0.5 group">
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-brand-blue" strokeWidth={1.75} />
      </div>
      <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{title}</h3>
      <p className="text-brand-ink-soft text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href="/services"
        className="font-body text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors inline-flex items-center gap-1"
      >
        Learn more <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
