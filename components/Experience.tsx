import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "@/data/portfolio";

function TimelineIcon({ itemRef }: { itemRef: React.RefObject<HTMLLIElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 -translate-x-1/2">
      <svg width="48" height="48" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" className="fill-none stroke-[#854CE6] stroke-1" />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="50"
          cy="50"
          r="30"
          fill="#1c2333"
          stroke="white"
          strokeWidth="5"
        />
        <circle cx="50" cy="50" r="12" fill="#854CE6" />
      </svg>
    </figure>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-[var(--text-secondary)]">
            My journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <ul className="relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-4 bottom-4 w-px"
            style={{ background: "var(--border)" }}
          />

          {experience.map((item, i) => {
            const ref = useRef<HTMLLIElement>(null);
            return (
              <li key={i} ref={ref} className="relative mb-14 last:mb-0">
                <TimelineIcon itemRef={ref} />

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="ml-8 rounded-xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <a
                    href={item.companyUrl}
                    className="font-semibold"
                    style={{ color: "var(--accent)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </a>
                  <p className="text-xs mt-1 mb-3" style={{ color: "var(--text-secondary)" }}>
                    {item.date} · {item.location}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
