"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      className="bg-gray-50 py-24 sm:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="testimonials-heading"
          title="What Clients Say"
          subtitle="Feedback from leaders we've worked with across industries."
        />
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={itemReveal}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-card-hover"
            >
              <p className="text-navy leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-medium text-gray-muted">
                — {t.author}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
