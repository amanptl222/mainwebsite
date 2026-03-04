"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { company } from "@/config/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="about-heading"
          title={`About ${company.name}`}
          subtitle={`${company.description} We combine deep technical expertise with strategic thinking to deliver enterprise-grade AI and software solutions that transform how you operate.`}
        />
        <motion.ul
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {points.map((item) => (
            <motion.li
              key={item.title}
              variants={itemReveal}
              className="group rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-soft transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
            >
              <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-accent-blue">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
