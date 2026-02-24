"use client";

import { company } from "@/config/company";

const points = [
  {
    title: "Strategic AI Implementation",
    description:
      "We align AI initiatives with your business goals, ensuring every solution drives measurable outcomes.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems built to grow with you—from proof-of-concept to production at scale.",
  },
  {
    title: "Engineering Excellence",
    description:
      "Clean code, robust testing, and maintainable systems delivered by senior engineers.",
  },
  {
    title: "Long-term Partnerships",
    description:
      "We invest in lasting relationships, providing ongoing support and evolution of your systems.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            About {company.name}
          </h2>
          <p className="mt-4 text-lg text-gray-muted">
            {company.description} We combine deep technical expertise with
            strategic thinking to deliver enterprise-grade AI and software
            solutions that transform how you operate.
          </p>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {points.map((item, i) => (
            <li
              key={item.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-accent-blue/30 hover:shadow-md"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                animationDelay: `${i * 0.05}s`,
                animationFillMode: "forwards",
              }}
            >
              <h3 className="text-lg font-semibold text-navy group-hover:text-accent-blue transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
