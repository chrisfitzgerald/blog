![cfitz.dev social banner](/public/static/images/twitter-card.png)

# Chris Fitzgerald's Blog

Personal website and technical blog for posts on software, data, AI, and projects.

- Live site: [https://www.cfitz.dev](https://www.cfitz.dev)
- Repo: [https://github.com/chrisfitzgerald/blog](https://github.com/chrisfitzgerald/blog)

## Attribution

This site is built from (and still heavily based on) **Tailwind Nextjs Starter Blog** by **Timothy Lin**.

- Original project: [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
- Original author: [Timothy Lin](https://www.timlrx.com)
- License: [MIT](LICENSE)

Many core components, layout patterns, and content architecture in this repo come from that starter. Big thanks to Timothy for publishing and maintaining it.

## What's in this repo

- Next.js + Tailwind CSS blog
- MDX-powered posts in [blog](blog)
- Tag pages, RSS, sitemap, SEO metadata
- Commenting via Giscus
- Newsletter integration via Buttondown
- Project and about pages

## Local development

### Install

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content workflow

### Create a new post

```bash
node ./scripts/compose.js
```

Or add `.mdx` files directly under [blog](blog).

### Frontmatter fields

```txt
title (required)
date (required)
tags (required)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional)
layout (optional)
canonicalUrl (optional)
```

## Key customization files

- Site metadata: [data/siteMetadata.js](data/siteMetadata.js)
- Main author profile: [data/authors/default.md](data/authors/default.md)
- Navigation links: [data/headerNavLinks.js](data/headerNavLinks.js)
- Projects page data: [data/projectsData.js](data/projectsData.js)
- Tailwind/theme styles: [tailwind.config.js](tailwind.config.js), [css/tailwind.css](css/tailwind.css)
- Next.js and CSP config: [next.config.js](next.config.js)

## Deployment

This blog is designed to deploy easily on Vercel, but can be hosted elsewhere with any required `next/image` and API-route adjustments.

## License

This repository is licensed under the [MIT License](LICENSE).

This project includes substantial code and structure derived from [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), also released under MIT by [Timothy Lin](https://www.timlrx.com).
