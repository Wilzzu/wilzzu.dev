import projects from "../../configs/projects.json";

const ProjectDetails = (props) => {
	// TODO: Get the project details from the projects.json with the project name

	return (
		<div className="w-full h-full">
			<div className="bg-secondary h-full w-full p-4 flex flex-col items-center justify-center backdrop-blur-lg bg-opacity-90">
				<p>{projects[props.projectName].title} details</p>
			</div>
		</div>
	);
};

export default ProjectDetails;
