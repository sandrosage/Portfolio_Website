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

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

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
      <main className="pt-36 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-14"
          >
            <p className="eyebrow mb-3">Writing</p>
            <h1
              className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4"
              style={{ color: "var(--text)" }}
            >
              Blog
            </h1>
            <p style={{ color: "var(--sub)" }}>
              Notes on AI agents, machine learning, and building things end to end.
            </p>
          </motion.div>

          <div className="border-t" style={{ borderColor: "var(--line)" }}>
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                className="border-b"
                style={{ borderColor: "var(--line)" }}
              >
                <Link href={`/blog/${post.slug}`} className="group block py-8">
                  <p className="font-mono text-xs mb-2" style={{ color: "var(--muted)" }}>
                    {formatDate(post.date)}
                  </p>
                  <h2
                    className="font-serif text-2xl font-medium transition-colors group-hover:text-[var(--amber-light)] mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--sub)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
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
  return {
    props: {
      posts: getSortedPostsData(),
    },
  };
};
