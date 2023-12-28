import { motion } from "framer-motion";

const Projects = () => {
	return (
		<motion.div
			layout
			initial={{ y: 550, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				// TODO: Make a better animation
				y: { type: "spring", stiffness: 18, damping: 7, delay: 1.2 },
				opacity: { duration: 1.4, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 1.2 },
			}}
			className="p-4 bg-primary w-[50%] rounded-2xl drop-shadow-2xl z-0 overflow-hidden">
			<ul className="flex flex-col gap-2 overflow-y-auto h-[40rem] scrollbar-thin scrollbar-thumb-accent scrollbar-thumb-rounded-full pr-4">
				<li className="bg-secondary p-6 rounded-xl">Project 1</li>
				<li className="bg-secondary p-6 rounded-xl">Project 2</li>
				<li className="bg-secondary p-6 rounded-xl">Project 3</li>
				<li className="bg-secondary p-6 rounded-xl">Project 4</li>
				<li className="bg-secondary p-6 rounded-xl">Project 5</li>
				<li className="bg-secondary p-6 rounded-xl">Project 6</li>
				<li className="bg-secondary p-6 rounded-xl">Project 7</li>
				<li className="bg-secondary p-6 rounded-xl">Project 8</li>
				<li className="bg-secondary p-6 rounded-xl">Project 9</li>
				<li className="bg-secondary p-6 rounded-xl">Project 10</li>
			</ul>
		</motion.div>
	);
};

export default Projects;
