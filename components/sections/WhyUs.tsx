"use client";

const reasons = [
  {
    title: "Strategic Thinking",
    description:
      "We align technology with business outcomes. Every recommendation is grounded in your goals and market context.",
  },
  {
    title: "Enterprise-Grade Systems",
    description:
      "Built for reliability, security, and scale. Our solutions meet the demands of regulated and high-growth environments.",
  },
  {
    title: "Secure Architecture",
    description:
      "Security by design—from data handling and access control to compliance-ready implementations.",
  },
  {
    title: "Transparent Collaboration",
    description:
      "Clear communication, defined milestones, and no surprises. You stay informed at every stage.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="why-us-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-muted">
            We combine technical depth with a partnership mindset. Here’s what
            sets us apart.
          </p>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {reasons.map((item, i) => (
            <li
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 transition-all hover:border-accent-blue/30 hover:shadow-md"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                animationDelay: `${i * 0.06}s`,
                animationFillMode: "forwards",
              }}
            >
              <h3 className="text-lg font-semibold text-navy">
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
