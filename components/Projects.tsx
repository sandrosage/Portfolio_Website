import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects"
          subtitle="Research and engineering work I'm proud of."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (i % 2) * 0.06 }}
              viewport={{ once: true }}
              className="rounded-xl p-7 border flex flex-col h-full transition-colors duration-200 hover:border-[rgba(232,161,60,0.4)]"
              style={{ background: "var(--glass)", borderColor: "var(--line)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="font-serif text-xl font-medium leading-snug pr-4"
                  style={{ color: "var(--text)" }}
                >
                  {project.title}
                </h3>
                <div className="flex gap-3 flex-shrink-0 pt-1.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="transition-colors hover:text-[var(--amber)]"
                      style={{ color: "var(--muted)" }}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="transition-colors hover:text-[var(--amber)]"
                      style={{ color: "var(--muted)" }}
                    >
                      <FaExternalLinkAlt size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--sub)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
