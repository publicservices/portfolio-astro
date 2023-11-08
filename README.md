# portfolio
A portfolio made with [astro](https://astro.build/) as a demo site.

## Development

```
npm i # install dependencies
npm run dev # run dev server
```

## Usage

- in `src/content` is the data of the site, in markdown files
- in `/public` there are the images

The markdown file's frontmatter is used to store the model's data.

For a file `src/content/clients/*.md`:

```markdown
---
title: "Goodpatch"
description: "goodpatch"
heroImage: "/goodpatch.jpg"
---
```
