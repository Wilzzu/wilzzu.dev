import projects from "../../configs/projects.json";
import { motion } from "framer-motion";

const ProjectDetails = (props) => {
	console.log(props.projectName);
	// TODO: Get the project details from the projects.json with the project name

	return (
		<div className="w-full h-full overflow-hidden">
			<motion.div
				initial={{ x: 400 }}
				animate={{ x: 0 }}
				exit={{ x: 400 }}
				transition={{ type: "tween", duration: 0.2, ease: [0.61, 0, 0.59, 0.93] }}
				className="bg-secondary h-full w-full p-4 flex flex-col items-center justify-center backdrop-blur-lg bg-opacity-90">
				<p>{projects[props.projectName].title} details</p>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
