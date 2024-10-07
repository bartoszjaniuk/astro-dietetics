/** @type {import('tailwindcss').Config} */
export default {
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
			backgroundImage: {
				fixedQuote: "url('assets/breakfast.jpg')",
			},
		},
	},
	plugins: [],
};
