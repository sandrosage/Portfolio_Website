import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";
import HeroBgAnimation from "./HeroBgAnimation";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <HeroBgAnimation />

      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[var(--accent)] font-semibold mb-2 tracking-widest text-sm uppercase">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {personalInfo.name}
            </h1>

            <div className="flex items-center gap-2 text-xl md:text-2xl text-[var(--text-secondary)] mb-6 font-medium min-h-[2rem]">
              <span>I am a</span>
              <span style={{ color: "var(--accent)" }}>
                <Typewriter
                  options={{
                    strings: personalInfo.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>

            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-xl mb-8">
              {personalInfo.bio}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--accent)" }}
              >
                Check My CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold border transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-5">
              {[
                { icon: <FaGithub size={22} />, href: personalInfo.github, label: "GitHub" },
                { icon: <FaLinkedin size={22} />, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: <HiOutlineMail size={22} />, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4"
              style={{ borderColor: "var(--accent)" }}
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Sandro+Sage&background=854CE6&color=fff&size=300";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
