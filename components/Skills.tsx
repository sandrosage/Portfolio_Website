import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills"
          subtitle="Technologies and tools I work with across the AI/ML stack."
        />

        <div className="border-t" style={{ borderColor: "var(--line)" }}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: gi * 0.04 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-3 sm:gap-8 py-6 border-b"
              style={{ borderColor: "var(--line)" }}
            >
              <h3
                className="font-mono text-xs uppercase tracking-[0.18em] pt-1.5"
                style={{ color: "var(--muted)" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
