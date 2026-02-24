"use client";

const services = [
  {
    title: "AI & Machine Learning Solutions",
    items: [
      "Custom AI model development",
      "Computer vision",
      "NLP systems",
      "Predictive analytics",
      "Recommendation engines",
    ],
  },
  {
    title: "AI Automation & Workflow Optimization",
    items: [
      "Business process automation",
      "AI chatbots",
      "Document automation",
      "Intelligent CRM/ERP workflows",
    ],
  },
  {
    title: "Custom Software Development",
    items: [
      "Web applications",
      "SaaS platforms",
      "Enterprise dashboards",
      "API development",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    items: [
      "Data pipelines",
      "Data warehousing",
      "Real-time analytics",
      "BI dashboards",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Cloud architecture",
      "CI/CD",
      "Infrastructure scaling",
      "Performance optimization",
    ],
  },
  {
    title: "AI Consulting & Strategy",
    items: [
      "AI readiness assessment",
      "Digital transformation strategy",
      "Proof-of-concept development",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Services
          </h2>
          <p className="mt-4 text-lg text-gray-muted">
            End-to-end capabilities from strategy and design to development and
            deployment. We deliver enterprise-grade solutions tailored to your
            industry and scale.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-accent-blue/30 hover:shadow-md"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                animationDelay: `${i * 0.04}s`,
                animationFillMode: "forwards",
              }}
            >
              <h3 className="text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
