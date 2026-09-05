import Link from "next/link";

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-bold text-xl text-white tracking-wide mb-1">
              ATHANYA<span className="text-brand-cyan">.</span>
            </p>
            <p className="font-body text-xs tracking-[3px] uppercase text-blue-200 mb-4">Technologies</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              IT solutions for growing businesses — explained in plain English, built to last.
            </p>
          </div>

          <div>
            <p className="eyebrow text-blue-300 mb-4">Pages</p>
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
                    className="text-blue-200 hover:text-brand-cyan transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-blue-300 mb-4">Get in touch</p>
            <a
              href="mailto:hello@athanyatechnologies.com"
              className="text-blue-200 hover:text-brand-cyan transition-colors text-sm font-body block"
            >
              hello@athanyatechnologies.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-blue-300 text-xs font-body">
          &copy; {new Date().getFullYear()} Athanya Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
