import tailwindcss3d from "tailwindcss-3d";
import tailwindScrollbar from "tailwind-scrollbar";
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
				grain: {
					"0%": { backgroundPosition: "0% 0%" },
					"10%": { backgroundPosition: "-24% 66%" },
					"20%": { backgroundPosition: "14% -14%" },
					"30%": { backgroundPosition: "65% 15%" },
					"40%": { backgroundPosition: "-2% 3%" },
					"50%": { backgroundPosition: "11% -55%" },
					"60%": { backgroundPosition: "45% 35%" },
					"70%": { backgroundPosition: "-32% 17%" },
					"80%": { backgroundPosition: "13% -11%" },
					"90%": { backgroundPosition: "-62% 33%" },
					"100%": { backgroundPosition: "32% -11%" },
				},
				// Move div from top right to bottom left
				bgStreakTR: {
					"0%": { top: 0, transform: "translate(-30%, 0)", opacity: 0 },
					"5%": { opacity: 1 },
					"40%": { top: "calc(100% - 400px)", transform: "translate(-110%, 0)", opacity: 0 },
					"100%": { opacity: 0 },
				},
				bgStreakBL: {
					"0%": { bottom: 0, opacity: 0 },
					"20%": { opacity: 1 },
					"40%": { bottom: "calc(100% - 300px)", opacity: 0 },
					"100%": { opacity: 0 },
				},
			},
			animation: {
				wave: "wave 4.8s ease-in-out forwards",
				hoverWave: "hoverWave 1.2s ease-in-out infinite",
				grain: "grain 5s linear infinite",
				bgStreakTR: "bgStreakTR 15s linear infinite 8s",
				bgStreakBL: "bgStreakBL 17s linear infinite 15s",
			},
			backgroundImage: {
				"bg-overlay": "url('/assets/overlay.svg')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		tailwindcss3d,
		tailwindScrollbar({ nocompatible: true, preferredStrategy: "pseudoelements" }),
	],
};
