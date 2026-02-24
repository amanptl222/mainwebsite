"use client";

const testimonials = [
  {
    quote:
      "Professional from day one. They delivered a scalable AI solution that integrated seamlessly with our existing systems.",
    author: "CTO, Fintech Company",
  },
  {
    quote:
      "Clear communication and deep technical expertise. Our automation project was delivered on time and exceeded expectations.",
    author: "VP Engineering, SaaS",
  },
  {
    quote:
      "A true partner. They understood our domain and helped us think through strategy as well as implementation.",
    author: "Head of Product, Healthcare",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-muted">
            Feedback from leaders we’ve worked with across industries.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-gray-200 bg-gray-50/50 p-6"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                animationDelay: `${i * 0.06}s`,
                animationFillMode: "forwards",
              }}
            >
              <p className="text-navy">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-gray-muted">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
