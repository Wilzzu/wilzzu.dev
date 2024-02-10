import { useEffect, useRef, useState } from "react";
import AnimatedText from "../AnimatedText";
import Contact from "./Contact";
import { cubicBezier, motion } from "framer-motion";

// Animation variants
const container = {
	visible: ([delayChildren, delay]) => ({
		opacity: 1,
		transition: {
			delayChildren,
			staggerChildren: 0.14,
			opacity: { delay, duration: 0.9, ease: "easeInOut" },
		},
	}),
	hidden: { opacity: 0 },
	exit: {
		opacity: 0,
		scale: 0.9,
		transition: { staggerChildren: 0.05, duration: 0.6, ease: "easeInOut" },
	},
};

const text = {
	visible: {
		y: 0,
		rotate: 0.01, // To make the animation render smoother
		opacity: 1,
		transition: { duration: 2.4, ease: cubicBezier(0.09, 0.64, 0.26, 1) },
	},
	hidden: { y: 60, opacity: 0 },
	exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const title = { exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } } };

const About = ({ delayAnimation }) => {
	const [removeFirstAnimation, setRemoveFirstAnimation] = useState(false);
	const [waving, setWaving] = useState(false);
	const hovering = useRef(false);
	const hoverTimeout = useRef(null);

	useEffect(() => {
		// Remove first animation after 4.5 seconds
		const timeout = setTimeout(() => {
			setRemoveFirstAnimation(true);
		}, 4500);

		// Clear timeouts on unmount
		return () => {
			clearTimeout(timeout);
			if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
		};
	}, []);

	// Handle waving hand animation
	const handleWaving = (hover) => {
		hovering.current = hover;
		if (hover) setWaving(true);
		if (hoverTimeout.current) return;

		// Let the waving animation finish before setting waving to false
		// Also check if the user is still hovering
		hoverTimeout.current = setTimeout(() => {
			setWaving(false);
			hoverTimeout.current = clearTimeout(hoverTimeout.current);
			if (hovering.current) handleWaving(true);
		}, 1200);
	};

	return (
		// Card container
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={container}
			custom={delayAnimation ? [0.4, 0.3] : [0, 0]}
			className="flex items-center justify-center h-full w-full max-h-[37.5rem] bg-gradient-to-br from-[#19191975] to-[#2A2A2A75] backdrop-blur-md rounded-2xl py-10 px-4">
			<div className="flex flex-col max-w-[31rem] gap-4 text-justify items-center justify-between leading-relaxed text-sm text-[#d6d6d6]">
				{/* Title */}
				<motion.h1
					variants={title}
					onHoverStart={() => handleWaving(true)}
					onHoverEnd={() => handleWaving(false)}
					className="flex gap-2 text-[1.76rem] font-semibold mb-3 text-neutral-200 group">
					<AnimatedText text="Hi, I'm Wilzzu!" delay={0.6} duration={0.4} />
					{/* Waving animation */}
					<span
						className={removeFirstAnimation ? (waving ? "animate-hoverWave" : "") : "animate-wave"}>
						{"👋"}
					</span>
				</motion.h1>

				{/* Content */}
				<motion.p variants={text}>
					{
						"I'm a 24 year old student from Finland, who enjoys creating fun projects around my passions. With a background in graphic design, I focus on the design and try to make everything look as good as possible."
					}
				</motion.p>
				<motion.p variants={text}>
					{
						'I\'m a "Do-It-Yourself" type of person, so instead of using pre-made designs or templates, I like to create everything from scratch to suit my preferences. All the projects and designs are completely made by me, no tutorials or templates were used.'
					}
				</motion.p>
				<motion.p variants={text}>
					{
						"Besides programming, I enjoy playing video games, editing photos and videos, and tinkering with small electronic projects in my free time."
					}
				</motion.p>
				<motion.p className="mt-6" variants={text}>
					{"Feel free to contact me, I'm always open to new adventures! :)"}
				</motion.p>
				<Contact />
			</div>
		</motion.div>
	);
};

export default About;
