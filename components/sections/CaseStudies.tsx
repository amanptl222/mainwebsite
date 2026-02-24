"use client";

const caseStudies = [
  {
    title: "AI-Powered Document Processing for a Global Bank",
    outcome: "60% reduction in manual document review time; compliance-ready audit trail.",
    sector: "Fintech",
  },
  {
    title: "Predictive Maintenance Platform for Logistics Fleet",
    outcome: "25% drop in unplanned downtime; real-time dashboards for operations.",
    sector: "Logistics",
  },
  {
    title: "Personalized Learning Engine for an EdTech Scale-up",
    outcome: "Higher engagement and completion rates; scalable content delivery.",
    sector: "EdTech",
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-gray-50 py-20 sm:py-28"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="case-studies-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-muted">
            Representative engagements across industries. Outcomes are
            illustrative; results depend on context and implementation.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <article
              key={study.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-accent-blue/30 hover:shadow-md"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                animationDelay: `${i * 0.08}s`,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-xs font-medium uppercase tracking-wider text-accent-blue">
                {study.sector}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {study.title}
              </h3>
              <p className="mt-3 text-sm text-gray-muted">{study.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
