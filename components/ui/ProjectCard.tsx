"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
};

type ProjectCardProps = {
  project: Project;
  variants?: Variants;
};

export function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.article
      variants={variants}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy/5 to-accent-blue/5">
        {project.image ? (
          <div className="relative h-full w-full">
            {/* Next/Image when images are added */}
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-bold text-navy/10">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-muted line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              className="inline-flex rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-blue-light focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              View Demo
            </Link>
          )}
          {project.caseStudyUrl && (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              View Case Study
            </Link>
          )}
          {!project.demoUrl && !project.caseStudyUrl && (
            <>
              <span className="inline-flex rounded-lg bg-accent-blue/10 px-4 py-2 text-sm font-medium text-accent-blue">
                View Demo
              </span>
              <span className="inline-flex rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-muted">
                View Case Study
              </span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
