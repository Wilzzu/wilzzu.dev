import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import projectsDb from "../../configs/projects.json";
import ProjectItem from "./ProjectItem";

// Animation variants
const list = {
	visible: {
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.12,
		},
	},
	hidden: {},
};

const Projects = () => {
	const { projectName } = useParams();

	return (
		<div className="h-full w-[800px] flex flex-col items-center justify-center gap-4">
			<Navigation />
			{/* Projects container */}
			<div className="h-[40rem] p-4 w-full z-0 overflow-hidden backdrop-blur-lg">
				{/* List of projects */}
				{/* TODO: Add shadow to top and bottom */}
				<motion.ul
					initial="hidden"
					animate="visible"
					variants={list}
					className="h-full grid grid-cols-2 gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-full drop-shadow-md pr-4">
					{projectsDb.map((project) => (
						<ProjectItem key={project.title} item={project} current={projectName} />
					))}
				</motion.ul>
			</div>
		</div>
	);
};

export default Projects;
