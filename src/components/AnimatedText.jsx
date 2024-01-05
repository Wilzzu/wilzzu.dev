import { motion } from "framer-motion";

// Animations
const container = {
	visible: (delay) => ({
		transition: {
			delayChildren: 0.4 + delay,
			staggerChildren: 0.1,
		},
	}),
	hidden: {},
};

// TODO: Make a better animation
const character = {
	visible: (dur) => ({
		opacity: 1,
		transition: {
			opacity: {
				duration: dur,
				ease: "easeInOut",
			},
		},
	}),
	hidden: {
		opacity: 0,
	},
};

const AnimatedText = (props) => {
	return (
		<>
			<span className="sr-only">{props.text}</span> {/* Don't split text for screen readers */}
			<motion.span
				initial="hidden"
				animate="visible"
				variants={container}
				custom={props.delay}
				className={props.style}
				aria-hidden>
				{/* Split the text into characters and animate them */}
				{props.text.split("").map((char, i) => (
					<motion.span key={`${props.text}-${i}`} variants={character} custom={props.duration}>
						{char}
					</motion.span>
				))}
			</motion.span>
		</>
	);
};

export default AnimatedText;
