import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PostMeta } from "@/lib/posts";
import SectionHeader from "./SectionHeader";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPreview({ posts }: { posts: PostMeta[] }) {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Writing"
          title="From the blog"
          subtitle="Notes on AI agents, machine learning, and building things end to end."
        />

        <div className="border-t" style={{ borderColor: "var(--line)" }}>
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border-b"
              style={{ borderColor: "var(--line)" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-2 sm:gap-8 py-7"
              >
                <span className="font-mono text-xs pt-1" style={{ color: "var(--muted)" }}>
                  {formatDate(post.date)}
                </span>
                <div>
                  <h3
                    className="font-serif text-xl font-medium transition-colors group-hover:text-[var(--amber-light)]"
                    style={{ color: "var(--text)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed max-w-2xl" style={{ color: "var(--sub)" }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm mt-8 transition-colors hover:text-[var(--amber-light)]"
          style={{ color: "var(--amber)" }}
        >
          All posts <FaArrowRight size={11} />
        </Link>
      </div>
    </section>
  );
}
