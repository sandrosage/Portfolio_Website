import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight" style={{ color: "var(--text)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: "var(--sub)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
