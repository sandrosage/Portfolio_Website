import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Open to new opportunities, collaborations, or just a chat."
        />

        <div className="max-w-xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              { name: "name", type: "text", placeholder: "Your name" },
              { name: "email", type: "email", placeholder: "Your email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.name as "name" | "email"]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full px-4 py-3 rounded-md text-sm border outline-none focus:border-[var(--amber)] transition-colors placeholder-[var(--muted)]"
                style={{ background: "var(--glass)", borderColor: "var(--line)", color: "var(--text)" }}
              />
            ))}
            <textarea
              placeholder="Your message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md text-sm border outline-none focus:border-[var(--amber)] transition-colors resize-none placeholder-[var(--muted)]"
              style={{ background: "var(--glass)", borderColor: "var(--line)", color: "var(--text)" }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start py-3 px-7 rounded-md font-semibold text-sm transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
              style={{ background: "var(--amber)", color: "var(--bg)" }}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm" style={{ color: "#4ade80" }}>
                Message sent — I&apos;ll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm" style={{ color: "#f87171" }}>
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </motion.form>

          {/* Social links */}
          <div className="flex gap-5 mt-10">
            {[
              { icon: <FaGithub size={20} />, href: personalInfo.github, label: "GitHub" },
              { icon: <FaLinkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <HiOutlineMail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors duration-200 hover:text-[var(--amber)]"
                style={{ color: "var(--muted)" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
