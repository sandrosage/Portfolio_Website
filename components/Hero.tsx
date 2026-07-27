import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";
import SignalWave from "./SignalWave";

export default function Hero() {
  return (
    <section id="about" className="pt-36 md:pt-44">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-6">AI &amp; Machine Learning Engineer</p>

            <h1
              className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-[1.06] mb-7"
              style={{ color: "var(--text)" }}
            >
              Building <em style={{ color: "var(--amber)" }}>agentic AI systems</em> that
              make it to production.
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--sub)" }}
            >
              {personalInfo.bio}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md font-semibold text-sm transition-opacity duration-200 hover:opacity-85"
                style={{ background: "var(--amber)", color: "var(--bg)" }}
              >
                View CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-md font-medium text-sm border transition-colors duration-200 hover:border-[var(--amber)]"
                style={{ borderColor: "var(--line-strong)", color: "var(--text)" }}
              >
                Get in touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-5">
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
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="w-44 md:w-56 aspect-[4/5] rounded-[10px] overflow-hidden border"
              style={{
                borderColor: "rgba(232, 161, 60, 0.55)",
                boxShadow: "0 0 50px rgba(232, 161, 60, 0.14)",
              }}
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <SignalWave className="mt-12" />
    </section>
  );
}
