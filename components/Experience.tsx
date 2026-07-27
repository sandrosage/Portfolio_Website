import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

type Entry = {
  title: string;
  company: string;
  companyUrl: string;
  date: string;
  location: string;
  description: string;
};

function EntryList({ items }: { items: Entry[] }) {
  return (
    <div className="border-t" style={{ borderColor: "var(--line)" }}>
      {items.map((item, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-2 sm:gap-8 py-7 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="font-mono text-xs pt-1 leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>{item.date}</p>
            <p>{item.location}</p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold" style={{ color: "var(--text)" }}>
              {item.title}
              <span style={{ color: "var(--muted)" }}> · </span>
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-[var(--amber-light)]"
                style={{ color: "var(--amber)" }}
              >
                {item.company}
              </a>
            </h3>
            <p className="text-sm leading-relaxed mt-2 max-w-2xl" style={{ color: "var(--sub)" }}>
              {item.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Career" title="Experience" />
        <EntryList items={experience} />

        <div className="mt-20">
          <SectionHeader eyebrow="Academia" title="Education" />
          <EntryList items={education} />
        </div>
      </div>
    </section>
  );
}
