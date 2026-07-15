import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-[var(--text-secondary)]">
            Open to new opportunities, collaborations, or just a chat.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
              className="w-full px-4 py-3 rounded-lg text-white placeholder-[var(--text-secondary)] border outline-none focus:border-[var(--accent)] transition-colors"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            />
          ))}
          <textarea
            placeholder="Your message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-[var(--text-secondary)] border outline-none focus:border-[var(--accent)] transition-colors resize-none"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="py-3 px-8 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50"
            style={{ background: "var(--accent)" }}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-sm text-center">Message sent — I'll get back to you soon!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Try emailing me directly.</p>
          )}
        </motion.form>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-10">
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
              className="transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
