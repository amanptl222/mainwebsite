"use client";

const industries = [
  { name: "Fintech", description: "Compliance, risk, and intelligent automation for financial services." },
  { name: "Healthcare", description: "Clinical workflows, diagnostics support, and secure health data systems." },
  { name: "SaaS", description: "Scalable platforms, analytics, and AI-powered product features." },
  { name: "E-commerce", description: "Recommendations, demand forecasting, and customer experience automation." },
  { name: "Logistics", description: "Routing, inventory, and supply chain optimization." },
  { name: "EdTech", description: "Personalized learning, assessment, and content delivery at scale." },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="bg-navy py-20 sm:py-28"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="industries-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-soft">
            We bring domain-aware AI and software expertise to regulated and
            high-stakes verticals.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="rounded-xl border border-gray-border bg-navy-light/50 p-6 transition-all hover:border-accent-blue/50"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                animationDelay: `${i * 0.05}s`,
                animationFillMode: "forwards",
              }}
            >
              <h3 className="text-lg font-semibold text-white">{ind.name}</h3>
              <p className="mt-2 text-sm text-gray-soft">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
