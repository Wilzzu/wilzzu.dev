import { motion } from "framer-motion";

// Animations
const container = {
	visible: (delay) => ({
		transition: { delayChildren: 0.4 + delay, staggerChildren: 0.1 },
	}),
	hidden: {},
};

const character = {
	visible: (dur) => ({
		opacity: 1,
		transition: { opacity: { duration: dur, ease: "easeInOut" } },
	}),
	hidden: { opacity: 0 },
};

const AnimatedText = ({ text, delay, duration, style }) => {
	return (
		<>
			<span className="sr-only">{text}</span> {/* Don't split text for screen readers */}
			<motion.span
				initial="hidden"
				animate="visible"
				variants={container}
				custom={delay}
				className={style}
				aria-hidden>
				{/* Split the text into characters and animate them */}
				{text.split("").map((char, i) => (
					<motion.span key={`${text}-${i}`} variants={character} custom={duration}>
						{char}
					</motion.span>
				))}
			</motion.span>
		</>
	);
};

export default AnimatedText;
