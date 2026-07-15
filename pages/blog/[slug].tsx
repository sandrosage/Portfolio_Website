import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPostSlugs, getPostData, Post } from "@/lib/posts";

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title} — Sandro Sage</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
            style={{ color: "var(--text-secondary)" }}
          >
            <FaArrowLeft size={12} /> Back to blog
          </Link>

          <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-10">
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

          <div
            className="max-w-none [&_a]:text-[var(--accent)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:text-white [&_code]:text-[var(--accent-light)] [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:bg-[var(--bg-card)] [&_pre]:border [&_pre]:border-[var(--border)]"
            style={{ color: "var(--text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </motion.article>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await getPostData(params!.slug as string);
  return { props: { post } };
};
