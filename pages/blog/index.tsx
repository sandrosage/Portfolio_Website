import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSortedPostsData, PostMeta } from "@/lib/posts";

type Props = {
  posts: PostMeta[];
};

export default function Blog({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog — Sandro Sage</title>
        <meta
          name="description"
          content="Writing on AI agents, machine learning, and full-stack engineering by Sandro Sage."
        />
      </Head>

      <Navbar />
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-[var(--text-secondary)] max-w-xl">
              Thoughts on AI agents, machine learning, and building things end to end.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl p-6 border transition-all duration-200 hover:border-[var(--accent)]"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p className="text-xs mb-2" style={{ color: "var(--text-secondary)" }}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{ background: "#854CE620", color: "var(--accent)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getSortedPostsData();
  return { props: { posts } };
};
