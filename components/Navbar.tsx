import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1220]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.09)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/#about"
          className="font-serif italic text-lg"
          style={{ color: "var(--text)" }}
        >
          Sandro Sage
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-[var(--amber-light)]"
                  style={{ color: "var(--sub)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold px-4 py-2 rounded-md transition-opacity duration-200 hover:opacity-85"
            style={{ background: "var(--amber)", color: "var(--bg)" }}
          >
            CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          style={{ color: "var(--text)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b"
            style={{ background: "#111828", borderColor: "var(--line)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[var(--amber-light)]"
                    style={{ color: "var(--sub)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm"
                  style={{ color: "var(--amber)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  CV ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
