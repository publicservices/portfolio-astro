import { defineCollection, z } from 'astro:content';

const clients = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
	}),
});

const pages = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
			title: z.string(),
	}),
});

export const collections = { pages, clients };
