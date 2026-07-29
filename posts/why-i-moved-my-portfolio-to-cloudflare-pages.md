---
title: "Why I Moved My Portfolio to Cloudflare Pages"
date: "2026-07-29"
excerpt: "Static hosting with edge functions, zero cold starts, and a free tier that actually covers a portfolio — here's what the migration looked like."
tags: ["Cloudflare", "Next.js", "Deployment", "Web"]
---

Deploying a personal portfolio should be boring. You push code, it goes live, nobody thinks about it again. For a while Vercel handled that for me perfectly — until I started caring more about where my traffic was being processed and what the bill might look like if a blog post ever got picked up somewhere.

Cloudflare Pages solved both concerns at once. Here's what the move looked like and what I learned along the way.

## Why Cloudflare Pages

The pitch is simple: your static assets are cached at Cloudflare's edge (300+ locations), dynamic routes run as edge functions with no cold-start penalty, and the free tier is generous enough that a portfolio site will never leave it.

The catch is that edge functions are not Node.js. They run in V8 isolates — the same runtime as a browser's JavaScript engine, without `fs`, without `process`, without most of the Node.js standard library. That matters the moment you write an API route.

## The Adapter Layer

Next.js by default builds for a Node.js server. To run on Cloudflare you need an adapter that transforms the build output into edge-compatible Workers. `@cloudflare/next-on-pages` did that job for a while; the ecosystem is now moving toward `@opennextjs/cloudflare` (OpenNext), which Cloudflare's own tooling now recommends when you run `wrangler deploy` in a Next.js project.

The adapter imposes one constraint worth knowing upfront: every API route must opt into the edge runtime explicitly.

```ts
export const runtime = 'edge';
```

Without that export the build fails — not at runtime, but at the Cloudflare packaging step, which is a nice property. You find out immediately rather than after a deploy.

## Dependency Conflicts Are a Moving Target

The Cloudflare toolchain moves fast. `wrangler`, `@cloudflare/workers-types`, and `@cloudflare/next-on-pages` each version independently, and the peer dependency graph between them can break without any of your own code changing.

The pragmatic fix: commit a `.npmrc` with `legacy-peer-deps=true`. It tells npm to resolve dependencies the way npm 6 did — ignoring peer conflicts rather than failing on them. It is not elegant, but for a portfolio site it is the right trade-off between stability and time spent debugging a build pipeline.

## What Stayed the Same

Everything the user sees. Pages Router, Tailwind, Framer Motion, the blog rendered from local markdown files — none of that changed. The adapter works below the framework, not inside it.

The only visible difference is latency: the site is measurably faster from locations far from a single-region server, which is exactly the promise Cloudflare makes.

## Worth It?

Yes, for a static-first site with a small number of dynamic routes. If you have heavy server-side logic, streaming responses, or need full Node.js APIs, the edge runtime constraints will frustrate you. For a portfolio — a few pages, one contact endpoint, a blog — it is a good fit.
