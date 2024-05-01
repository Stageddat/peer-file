/** @type {import("tailwindcss").Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				"slide-down": "slideDown 1s ease-in-out",
				"none": "none",
				"slide-in-top": "slideInTop 0.6s ease-out both"
			},
		},
		keyframes: {
			slideDown: {
				"0%": { transform: "translateY(-100%)", opacity: 0 },
				"100%": { transform: "translateY(0)", opacity: 1 },
			},
			slideInTop: {
				"0%": { transform: "translateY(-20px)" },
				"100%": { transform: "translateY(0)" }
			},
		},
	},
	plugins: [],
}