import Contact from "./Contact";
import { motion } from "framer-motion";

// Animation variants
const container = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			opacity: { duration: 1, ease: "easeInOut" },
		},
	},
	hidden: { opacity: 0 },
	exit: { opacity: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const item = {
	visible: {
		y: 0,
		rotate: 0.01, // To make the animation render smoother
		opacity: 1,
		transition: { type: "spring", stiffness: 40, damping: 18 },
	},
	hidden: { y: 42, opacity: 0 },
	exit: { y: 0, opacity: 0, transition: { duration: 0 } },
};

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
				<motion.h1 variants={item} className="text-[1.76rem] font-semibold mb-3 text-neutral-200">
					{"Hi, I'm Wilzzu! 👋"}
				</motion.h1>
				{/* Title */}

				{/* Content */}
				<motion.p variants={item}>
					{
						"I'm a 24 year old student from Finland, who creates fun projects around my passions. With a background in graphic design, I focus on the design and try to make everything look as good as possible."
					}
				</motion.p>
				<motion.p variants={item}>
					{
						'I\'m a "Do-It-Yourself" type of person, so instead of using pre-made designs or templates, I like to create everything from scratch to suit my preferences. All the projects and designs are completely made by me, no tutorials or templates were used.'
					}
				</motion.p>
				<motion.p variants={item}>
					{
						"Besides programming, I enjoy playing video games, editing photos and videos, and tinkering with small electronic projects in my free time."
					}
				</motion.p>
				<motion.p className="mt-6" variants={item}>
					{"Feel free to contact me, I'm always open to new adventures! :)"}
				</motion.p>
				<Contact />
			</div>
		</motion.div>
	);
};

export default About;
