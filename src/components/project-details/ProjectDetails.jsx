import { useParams } from "react-router-dom";
import projects from "../../configs/projects.json";
import { motion } from "framer-motion";

const ProjectDetails = () => {
	const { projectName } = useParams();
	// TODO: Get the project details from the projects.json with the project name

	return (
		<div className="w-full h-full overflow-hidden">
			<motion.div className="bg-secondary h-full w-full p-4 flex flex-col items-center justify-center backdrop-blur-lg bg-opacity-90">
				<p>{projects[projectName].title} details</p>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
