import tailwindcss3d from "tailwindcss-3d";
import tailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			tablet: "840px",
			xl: "1280px",
		},
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
					"52%": { opacity: 0 },
					"55%": { transform: "rotate(0deg)" },
					"70%": { opacity: 1, transform: "rotate(25deg)" },
					"90%": { transform: "rotate(0deg)" },
				},
				hoverWave: {
					"0%, 100%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(25deg)" },
				},
			},
			animation: {
				wave: "wave 4.8s ease-in-out forwards",
				hoverWave: "hoverWave 1.2s ease-in-out infinite",
			},
		},
	},
	plugins: [
		tailwindcss3d,
		tailwindScrollbar({ nocompatible: true, preferredStrategy: "pseudoelements" }),
	],
};
