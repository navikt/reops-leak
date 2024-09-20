/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [require("@navikt/ds-tailwind")],
	theme: {
		extend: {},
	},
	plugins: [],
}
