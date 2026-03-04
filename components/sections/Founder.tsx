"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { company } from "@/config/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const founder = company.founder;

  if (!founder) return null;

  return (
    <section
      id="founder"
      className="bg-gray-50 py-24 sm:py-32"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="founder-heading"
          title="Meet the Founder"
          subtitle={`The vision behind ${company.name}.`}
        />
        <motion.div
          className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-2xl bg-navy-light sm:h-64 sm:w-64">
            {/* Placeholder when no image; use gradient */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy to-accent-blue/20">
              <span className="text-6xl font-bold text-white/30">
                {founder.name.charAt(0)}
              </span>
            </div>
            {/* Uncomment when founder.jpg exists in public:
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="256px"
            />
            */}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-bold tracking-tight text-navy">
              {founder.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent-blue">
              {founder.title}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-muted">
              {founder.bio}
            </p>
            <div className="mt-8 flex gap-4">
              {founder.github && (
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-navy transition-all hover:border-accent-blue/50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  aria-label="GitHub profile"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-navy transition-all hover:border-accent-blue/50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  aria-label="LinkedIn profile"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
