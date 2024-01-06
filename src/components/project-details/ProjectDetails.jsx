import { useParams } from "react-router-dom";
import projects from "../../configs/projects.json";

const ProjectDetails = () => {
	const { projectName } = useParams();

	return (
		<div className="w-[480px] h-full flex flex-col items-center justify-center">
			<div className="bg-secondary h-[42rem] w-full p-4 flex flex-col items-center justify-center">
				<p>{projects[projectName].title} details</p>
			</div>
		</div>
	);
};

export default ProjectDetails;
