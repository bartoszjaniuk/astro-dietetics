/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#57463c",
				primaryLight: "#967968",
				primaryDark: "#3b2f29",
				secondary: "#d2bfa3",
				font: "#444",
				softGray: "#f7f7f7",
			},
			fontFamily: {
				playfair: "Playfair Display",
				lato: "Lato",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				fixedQuote: "url('assets/breakfast.jpg')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
