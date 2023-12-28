import tailwindcss3d from "tailwindcss-3d";
import tailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1D1D1D",
				secondary: "#3F3F3F",
				tertiary: "#8B8B8B",
				accent: "#FFCA67",
			},
		},
	},
	plugins: [tailwindcss3d, tailwindScrollbar({ nocompatible: true })],
};
