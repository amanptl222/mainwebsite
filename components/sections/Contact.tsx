"use client";

import { useState } from "react";
import { company } from "@/config/company";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission; replace with your API or form service
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      className="bg-navy py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-soft">
            Tell us about your project or challenge. We’ll respond within one
            business day.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="space-y-2 text-sm text-gray-soft">
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
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="mt-1 block w-full rounded-lg border border-gray-border bg-navy-light/50 px-4 py-3 text-white placeholder-gray-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="mt-1 block w-full rounded-lg border border-gray-border bg-navy-light/50 px-4 py-3 text-white placeholder-gray-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue focus:outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-lg border border-gray-border bg-navy-light/50 px-4 py-3 text-white placeholder-gray-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue focus:outline-none resize-y min-h-[120px]"
                placeholder="Describe your project or question..."
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto rounded-lg bg-accent-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-blue-light focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent"
                    : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="mt-2 text-sm text-gray-soft" role="status">
                  Thank you. We’ll be in touch soon.
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
