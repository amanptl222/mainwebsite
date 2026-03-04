"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "@/config/company";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      className="relative bg-navy py-24 sm:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,99,235,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Tell us about your project or challenge. We'll respond within one
            business day.
          </motion.p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <motion.a
              href={company.calendlyUrl ?? "#contact"}
              className="group inline-flex items-center justify-center rounded-xl bg-accent-blue px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-accent-blue/25 transition-all duration-300 hover:bg-accent-blue-light hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
              <span className="ml-2 transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </motion.a>
            <motion.a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl border border-gray-border bg-white/5 px-6 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.a>
          </div>

          <div className="mt-10 space-y-2 text-sm text-gray-soft">
            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white transition-colors underline focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
              >
                {company.email}
              </a>
            </p>
            <p>
              <strong className="text-white">Location:</strong>{" "}
              {company.location}
            </p>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="mt-1 block w-full rounded-xl border border-gray-border bg-navy-light/50 px-4 py-3 text-white placeholder-gray-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="mt-1 block w-full rounded-xl border border-gray-border bg-navy-light/50 px-4 py-3 text-white placeholder-gray-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-xl border border-gray-border bg-navy-light/50 px-4 py-3 text-white placeholder-gray-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue focus:outline-none resize-y min-h-[120px] transition-colors"
                placeholder="Describe your project or question..."
              />
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="rounded-xl bg-accent-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-blue-light focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent"
                    : "Send Message"}
              </motion.button>
              {status === "sent" && (
                <p className="mt-2 text-sm text-gray-soft" role="status">
                  Thank you. We'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-400" role="alert">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
