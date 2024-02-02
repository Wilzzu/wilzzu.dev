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
	visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 34, damping: 12 } },
	hidden: { y: 52, opacity: 0 },
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
			className="flex flex-col h-full max-h-[37rem] bg-gradient-to-br from-[#19191975] to-[#2A2A2A75] backdrop-blur-md rounded-2xl gap-3 items-center justify-between py-10 px-20 text-center leading-relaxed text-[0.94rem] text-[#d6d6d6]">
			{/* Title */}
			<motion.h1 variants={item} className="text-[1.76rem] font-semibold mt-1 text-neutral-200">
				{"Hi, I'm Wilzzu!"}
			</motion.h1>

			{/* Content */}
			<motion.p variants={item}>
				{
					"I'm a 24 year old student from Finland, who loves creating fun projects around the things I'm passionate about. With a background in graphic design, I focus on the design and try to make everything look as good as possible."
				}
			</motion.p>
			<motion.p variants={item}>
				{
					'I\'m also a very "DYI" type of person, so instead of using pre-made designs or templates, I like to create everything from scratch to suit my preferences.'
				}
				<br />
				{
					"All the projects and designs are completely made by me, no tutorials or templates were used."
				}
			</motion.p>
			<motion.p variants={item}>
				{
					"Besides programming, I enjoy playing video games, editing photos and videos, and tinkering with small electronic projects."
				}
			</motion.p>
			<motion.p variants={item}>
				{"Feel free to contact me, I'm always open to new adventures! :)"}
			</motion.p>
			<Contact />
		</motion.div>
	);
};

export default About;
