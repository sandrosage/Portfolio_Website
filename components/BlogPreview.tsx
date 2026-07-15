import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PostMeta } from "@/lib/posts";

type Props = {
  posts: PostMeta[];
};

export default function BlogPreview({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Blog</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Thoughts on AI agents, machine learning, and building things end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-xl p-6 border h-full transition-all duration-200 hover:border-[var(--accent)]"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <p className="text-xs mb-2" style={{ color: "var(--text-secondary)" }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
            style={{ color: "var(--accent)" }}
          >
            View all posts <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
