"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const stacks = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "AI",
    items: ["OpenAI", "LangChain", "PyTorch", "Computer Vision"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

export function TechnologyStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="tech-stack"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="tech-stack-heading"
          title="Technology Stack"
          subtitle="We build with modern, battle-tested technologies to deliver scalable and maintainable systems."
        />
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {stacks.map((stack) => (
            <motion.div
              key={stack.category}
              variants={itemReveal}
              className="group rounded-2xl border border-gray-200 bg-gray-50/50 p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
                {stack.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2" role="list">
                {stack.items.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-navy shadow-sm ring-1 ring-gray-200/80 transition-all duration-300 group-hover:ring-accent-blue/30">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
