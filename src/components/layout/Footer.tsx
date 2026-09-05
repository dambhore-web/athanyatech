import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-bold text-xl text-white mb-2">
              Athanya<span className="text-brand-gold">.</span>
            </p>
            <p className="text-brand-slate text-sm leading-relaxed">
              IT solutions for growing businesses — explained in plain English,
              built to last.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-widest text-brand-slate mb-4">
              Pages
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-surface hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-widest text-brand-slate mb-4">
              Get in touch
            </p>
            <a
              href="mailto:hello@athanyatechnologies.com"
              className="text-brand-surface hover:text-brand-gold transition-colors text-sm block"
            >
              hello@athanyatechnologies.com
            </a>
          </div>
        </div>

        <div className="border-t border-brand-indigo mt-10 pt-6 text-brand-slate text-xs">
          &copy; {new Date().getFullYear()} Athanya Technologies. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
