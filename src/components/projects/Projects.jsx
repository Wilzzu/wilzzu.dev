import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import ProjectDetails from "../project-details/ProjectDetails";
import { cn } from "../../../lib/utils";
import { useEffect, useState } from "react";

const Projects = (props) => {
	const [animationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		if (props.projectName && !animationComplete) setAnimationComplete(true);
	}, [props.projectName, animationComplete]);

	return (
		<div
			className={cn(
				"h-full w-[480px] flex items-center justify-center",
				props.projectName && "w-full",
				!animationComplete && "overflow-hidden"
			)}>
			{/* Projects container */}
			<motion.div
				layout
				initial={{ y: 550, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					// TODO: Make a better animation
					y: { type: "spring", stiffness: 12, damping: 8, delay: 1.2 },
					opacity: { duration: 1.4, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 1.2 },
				}}
				onAnimationComplete={() => setAnimationComplete(true)}
				className={cn(
					"h-[40rem] p-4 w-[480px] z-0 overflow-hidden backdrop-blur-lg",
					props.projectName && "h-full bg-primary bg-opacity-90"
				)}>
				{/* List of projects */}
				{/* 
				TODO: 	Add shadow to top and bottom 
				TODO:	Render these using the projects.json 
				*/}
				<ul className="h-full flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-full drop-shadow-md pr-4">
					<li className="text-[rgb(75,75,75)] text-2xl border-b-[1px] border-[rgb(75,75,75)]">
						2024
					</li>
					<li className="bg-secondary p-6 rounded-xl">
						<Link to={!props.projectName && "/project/project1"}>Project 1</Link>{" "}
					</li>
					<li className="bg-secondary p-6 rounded-xl">Project 2</li>
					<li className="bg-secondary p-6 rounded-xl">Project 3</li>
					<li className="text-[rgb(75,75,75)] text-2xl border-b-[1px] border-[rgb(75,75,75)] mt-2">
						2023
					</li>
					<li className="bg-secondary p-6 rounded-xl">Project 4</li>
					<li className="bg-secondary p-6 rounded-xl">Project 5</li>
					<li className="bg-secondary p-6 rounded-xl">Project 6</li>
					<li className="text-[rgb(75,75,75)] text-2xl border-b-[1px] border-[rgb(75,75,75)] mt-2">
						2022
					</li>
					<li className="bg-secondary p-6 rounded-xl">Project 7</li>
					<li className="bg-secondary p-6 rounded-xl">Project 8</li>
					<li className="bg-secondary p-6 rounded-xl">Project 9</li>
					<li className="bg-secondary p-6 rounded-xl">Project 10</li>
					<li className="bg-secondary p-6 rounded-xl">Project 11</li>
					<li className="bg-secondary p-6 rounded-xl">Project 12</li>
				</ul>
			</motion.div>

			{/* Project details */}
			<Routes>
				<Route
					path="project/:projectName"
					element={<ProjectDetails projectName={props.projectName} />}
				/>
			</Routes>
		</div>
	);
};

export default Projects;
