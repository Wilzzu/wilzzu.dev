import AnimatedText from "../AnimatedText";
import Contact from "./Contact";
import { cubicBezier, motion } from "framer-motion";

// Animation variants
const container = {
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.14, opacity: { duration: 0.9, ease: "easeInOut" } },
	},
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

const About = () => {
	return (
		// Card container
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={container}
			className="flex items-center justify-center h-full w-full max-h-[37rem] bg-gradient-to-br from-[#19191975] to-[#2A2A2A75] backdrop-blur-md rounded-2xl py-10 px-4">
			<div className="flex flex-col max-w-[31rem] gap-4 text-justify items-center justify-between leading-relaxed text-sm text-[#d6d6d6]">
				{/* Title */}
				<motion.span
					variants={title}
					className="text-[1.76rem] font-semibold mb-3 text-neutral-200">
					<AnimatedText text="Hi, I'm Wilzzu! 👋" delay={0.6} duration={0.4} />
				</motion.span>

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
