import tailwindcss3d from "tailwindcss-3d";
import tailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "Helvetica", "Arial", "sans-serif"],
		},
		extend: {
			colors: {
				background: "#101010",
				primary: "#191919",
				secondary: "#2A2A2A",
				tertiary: "#8B8B8B",
				accent: "#D2A754",
			},
			dropShadow: {
				icon: "0 1px 1px rgba(0, 0, 0, 1)",
			},
			keyframes: {
				wave: {
					"0%": { opacity: 0 },
					"50%": { opacity: 0, transform: "rotate(0deg)" },
					"62%": { opacity: 0.2, transform: "rotate(25deg)" },
					"75%": { opacity: 1, transform: "rotate(0deg)" },
					"87%": { transform: "rotate(25deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				hoverWave: {
					"0%, 100%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(25deg)" },
				},
			},
			animation: {
				wave: "wave 5s ease-in-out forwards",
				hoverWave: "hoverWave 1s ease-in-out infinite",
			},
		},
	},
	plugins: [tailwindcss3d, tailwindScrollbar({ nocompatible: true })],
};
