import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Static routes, plus any Markdown page that renders (log entries).
const pages = import.meta.glob<{ url?: string }>('./**/*.{astro,md}', { eager: true });

const staticPaths = Object.entries(pages)
	.filter(([file, mod]) => !file.includes('[') && (file.endsWith('.astro') || mod.url))
	.map(([file]) =>
		file
			.replace(/^\.\//, '/')
			.replace(/\.(astro|md)$/, '')
			.replace(/(^|\/)index$/, '/')
	);

export const GET: APIRoute = async ({ site }) => {
	const posts = await getCollection('blog');
	const paths = [...staticPaths, ...posts.map((post) => `/blog/${post.id}`)];

	// Trailing slash matches what Cloudflare Pages serves for directory output.
	const urls = [...new Set(paths)]
		.map((path) => new URL(path.endsWith('/') ? path : `${path}/`, site).href)
		.sort();

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `\t<url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
