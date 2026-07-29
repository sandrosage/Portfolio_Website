import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDirectory = path.join(__dirname, "..", "posts");
const outputPath = path.join(__dirname, "..", "lib", "posts-data.json");

const fileNames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));

const posts = await Promise.all(
  fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: String(data.date),
      excerpt: data.excerpt,
      tags: data.tags ?? [],
      contentHtml,
    };
  })
);

posts.sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
console.log(`Generated posts-data.json with ${posts.length} posts`);
