"use client";

const steps = [
  { number: "01", title: "Discovery", description: "Understand your goals, constraints, and success criteria." },
  { number: "02", title: "Strategy", description: "Define architecture, roadmap, and delivery approach." },
  { number: "03", title: "Development", description: "Build with iterative cycles and regular demos." },
  { number: "04", title: "Testing", description: "Quality assurance, security, and performance validation." },
  { number: "05", title: "Deployment", description: "Production rollout with monitoring and documentation." },
  { number: "06", title: "Continuous Optimization", description: "Iterate based on usage, feedback, and new requirements." },
];

export function Process() {
  return (
    <section
      id="process"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-muted">
            A structured, transparent approach from first conversation to
            ongoing optimization.
          </p>
        </div>
        <div className="mt-16">
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {steps.map((step, i) => (
              <li
                key={step.number}
                className="relative rounded-xl border border-gray-200 p-6 transition-all hover:border-accent-blue/30 hover:shadow-md"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                  animationDelay: `${i * 0.05}s`,
                  animationFillMode: "forwards",
                }}
              >
                <span className="text-3xl font-bold text-accent-blue/30">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
