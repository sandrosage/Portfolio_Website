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
        <title>{`${post.title} — Sandro Sage`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />
      <main className="pt-36 pb-24 px-6 min-h-screen">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs mb-10 transition-colors hover:text-[var(--amber-light)]"
            style={{ color: "var(--muted)" }}
          >
            <FaArrowLeft size={10} /> Back to blog
          </Link>

          <p className="font-mono text-xs mb-3" style={{ color: "var(--muted)" }}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6"
            style={{ color: "var(--text)" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div
            className="max-w-none [&_a]:text-[var(--amber)] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-[var(--text)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-[var(--text)] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-[1.8] [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-2 [&_li]:leading-relaxed [&_strong]:text-[var(--text)] [&_strong]:font-semibold [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-[var(--amber-light)] [&_pre]:rounded-lg [&_pre]:p-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:bg-[rgba(255,255,255,0.035)] [&_pre]:border [&_pre]:border-[rgba(255,255,255,0.09)] [&_pre_code]:text-[var(--text)] [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--amber)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_hr]:border-[rgba(255,255,255,0.09)] [&_hr]:my-10"
            style={{ color: "var(--sub)" }}
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
