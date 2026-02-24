import Link from "next/link";
import { company } from "@/config/company";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  "AI & ML Solutions",
  "Automation",
  "Software Development",
  "Data Engineering",
  "Cloud & DevOps",
  "AI Consulting",
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-navy-dark border-t border-gray-border"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:opacity-90 transition-opacity"
            >
              {company.name}
            </Link>
            <p className="mt-3 text-sm text-gray-soft max-w-xs">
              {company.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-soft hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <Link
                    href="#services"
                    className="text-sm text-gray-soft hover:text-white transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-gray-soft hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="text-sm text-gray-soft">{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-border pt-8 text-center">
          <p className="text-sm text-gray-soft">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
