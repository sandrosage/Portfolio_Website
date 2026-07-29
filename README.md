# Portfolio — Sandro Sage

Personal website of an AI & Machine Learning engineer: projects, experience, CV, and a markdown-based blog. Built with Next.js (Pages Router), Tailwind CSS v4, and Framer Motion.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also validates all pages/posts) / npx wrangler pages deploy .vercel/output/static
```

## Content editing

All content lives in two places — no component code needs to change:

| What | Where |
| --- | --- |
| Bio, roles, links, email | `data/portfolio.ts` → `personalInfo` |
| Skills | `data/portfolio.ts` → `skills` |
| Experience & education | `data/portfolio.ts` → `experience`, `education` |
| Projects | `data/portfolio.ts` → `projects` |
| Blog posts | `posts/*.md` |
| CV | S3 URL in `data/portfolio.ts` → `personalInfo.resumeUrl` |
| Profile photo | `public/profile.jpg` |

### Adding a blog post

Create a new markdown file in `posts/` — the filename becomes the URL slug (`posts/my-post.md` → `/blog/my-post`):

```markdown
---
title: "My Post Title"
date: "2026-08-01"
excerpt: "One or two sentences shown in the post list and on the homepage."
tags: ["AI Agents", "PyTorch"]
---

Your content in **markdown** — headings, lists, links, and code blocks all work.
```

Posts are sorted by `date` (newest first). The three most recent appear on the homepage; all posts appear on `/blog`. Pages are statically generated, so after adding a post, commit and redeploy:

```bash
git add posts/my-post.md
git commit -m "Add post: My Post Title"
git push   # Vercel redeploys automatically
```

### Adding a project

Append an entry to the `projects` array in `data/portfolio.ts`:

```ts
{
  title: "Project Name",
  description: "What it is, what you built, and what the result was.",
  tags: ["PyTorch", "Python"],
  github: "https://github.com/sandrosage/repo",
  demo: "", // optional live-demo URL, shown only if non-empty
},
```

Commit and push to redeploy, same as above.

### Updating the CV

The CV is hosted on S3. Upload the new PDF to the bucket, then update `personalInfo.resumeUrl` in `data/portfolio.ts` if the object key changed. It is linked from the navbar ("CV") and the hero ("View CV"). (`public/resume.pdf` is no longer referenced and can be kept as a backup or deleted.)

## Deploy

The site is a standard Next.js app — deploy on [Vercel](https://vercel.com/new): import the repository once, and every push to `main` triggers a redeploy.

## Notes

- The contact form posts to `pages/api/contact.ts`, which currently only logs submissions. Wire it to nodemailer + SMTP env vars to receive real emails.
