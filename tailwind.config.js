import tailwindcss3d from "tailwindcss-3d";
import tailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#101010",
				primary: "#191919",
				secondary: "#2A2A2A",
				tertiary: "#8B8B8B",
				accent: "#F1BF61",
			},
		},
	},
	plugins: [tailwindcss3d, tailwindScrollbar({ nocompatible: true })],
};
