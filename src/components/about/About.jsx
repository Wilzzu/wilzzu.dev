import { useEffect, useState } from "react";
import { cubicBezier, motion } from "framer-motion";
import Title from "./Title";
import Contact from "./Contact";
import { cn } from "../../../lib/utils";
import TechStack from "./TechStack";

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

const textContact = {
	...text,
	visible: {
		...text.visible,
		transition: {
			duration: 3.2,
			ease: cubicBezier(0.12, 0.42, 0.26, 1),
			delay: 2.2,
			opacity: { duration: 2.2, ease: "easeInOut", delay: 2.2 },
		},
	},
};

const About = ({ delayAnimation }) => {
	const [showTitle, setShowTitle] = useState(false);

	// Show title after a delay if user loads here initially
	useEffect(() => {
		if (!delayAnimation) return setShowTitle(true);
		const timeout = setTimeout(() => setShowTitle(true), 500);
		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		// Container
		<div className="max-h-screen">
			{/* About card */}
			<motion.div
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={container}
				custom={delayAnimation ? [0.4, 0.3] : [0, 0]}
				className="flex items-center justify-center h-full w-full tablet:max-h-[37.5rem] bg-gradient-to-br from-[#19191942] to-[#2a2a2a3b] backdrop-blur rounded-2xl py-10 tablet:py-12 px-10 tablet:px-4 overflow-hidden">
				<div className="flex flex-col h-full max-w-[31rem] gap-4 text-justify items-center justify-between text-xs tablet:text-sm tablet:leading-relaxed text-[#d6d6d6]">
					{/* Title */}
					{showTitle ? <Title /> : <div className="h-11 w-full mb-3" />}

					{/* Content */}
					<motion.p variants={text}>
						{
							"I'm a 25 year old student from Finland, who enjoys creating fun projects around my passions. With a background in graphic design, I focus on the design and try to make everything look as good as possible."
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
					<TechStack variants={text} />
					<motion.p className="mt-2 tablet:mt-2 text-center" variants={textContact}>
						{"Feel free to "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="mailto:wilzzudev@gmail.com"
							className="underline underline-offset-2 ">
							contact me
						</a>
						{", I'm always open to new adventures! :)"}
					</motion.p>

					{/* Contact information */}
					{/* <Contact /> */}
				</div>
			</motion.div>
			{/* This allows mobile view to smoothly transition to correct size */}
			<div
				className={cn(
					"duration-[3s] ease-in-out",
					showTitle ? "h-0" : "h-[40dvh] tablet:h-0",
					delayAnimation && "h-0"
				)}
			/>
		</div>
	);
};

export default About;
