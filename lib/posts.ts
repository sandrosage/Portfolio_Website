import postsData from "./posts-data.json";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Post = PostMeta & {
  contentHtml: string;
};

type PostEntry = PostMeta & { contentHtml: string };

const posts = postsData as PostEntry[];

export function getSortedPostsData(): PostMeta[] {
  return posts.map(({ slug, title, date, excerpt, tags }) => ({
    slug,
    title,
    date,
    excerpt,
    tags,
  }));
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export async function getPostData(slug: string): Promise<Post> {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}
