import Head from "next/head";
import { GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getSortedPostsData, PostMeta } from "@/lib/posts";

type Props = {
  latestPosts: PostMeta[];
};

export default function Home({ latestPosts }: Props) {
  return (
    <>
      <Head>
        <title>Sandro Sage — AI & ML Engineer</title>
        <meta
          name="description"
          content="Portfolio of Sandro Sage, an AI & ML Engineer specialising in agentic systems, LLM orchestration, and machine learning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <BlogPreview posts={latestPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      latestPosts: getSortedPostsData().slice(0, 3),
    },
  };
};
