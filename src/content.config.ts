import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// The frontmatter slug becomes the entry id, so it sets the URL.
	loader: glob({ pattern: '*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		slug: z.string(),
		date: z.coerce.date(),
	}),
});

export const collections = { blog };
