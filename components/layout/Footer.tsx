import Link from "next/link";
import Image from "next/image";
import { company } from "@/config/company";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block rounded-lg transition-opacity hover:opacity-90"
              aria-label={`${company.name} - Home`}
            >
              <span className="relative block h-10 w-[140px] overflow-hidden rounded-lg sm:h-11">
                <Image
                  src={company.logo ?? "/logo.png"}
                  alt={company.name}
                  width={280}
                  height={88}
                  className="h-full w-auto min-w-full object-contain object-left"
                  sizes="140px"
                />
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-soft max-w-xs leading-relaxed">
              {company.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3" role="list">
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
            <ul className="mt-4 space-y-3" role="list">
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
            <ul className="mt-4 space-y-3" role="list">
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

        <div className="mt-16 border-t border-gray-border pt-8 text-center">
          <p className="text-sm text-gray-soft">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
