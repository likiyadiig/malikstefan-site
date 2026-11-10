// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://malikstefan.com',
	env: {
		schema: {
			// Buttondown form endpoint for the #early-access form. Required: the build fails without it.
			PUBLIC_NEWSLETTER_ENDPOINT: envField.string({ context: 'client', access: 'public', url: true }),
			// GA4 measurement ID. Required: the build fails without it. Only loaded after consent.
			PUBLIC_GA_ID: envField.string({ context: 'client', access: 'public', startsWith: 'G-' }),
		},
	},
});
