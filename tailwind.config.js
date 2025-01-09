import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [
		iconsPlugin({
			collections: getIconCollections(["ri", "mingcute", "tabler"]),
		}),
	],
	theme: {
		extend: {
			colors: {
				primary: "#266EFF",
				secondary: "#828282",
				text: "#262626",
				theme: "#26267C",
			},
			fontFamily: {
				serif: ["Source Han Serif SC", "serif"],
			},
		},
	},
}
