import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import projectsDb from "../../configs/projects.json";
import ProjectItem from "./ProjectItem";
import { useEffect, useRef } from "react";

// Animation variants
const list = {
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.12,
			opacity: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
		},
	},
	hidden: {
		opacity: 0,
	},
};

// Check if scroll shadows should be shown
const scrollShadow = (element, botShadow, topShadow) => {
	const distFromBot = element.scrollHeight - element.scrollTop - element.clientHeight;
	if (distFromBot < 20) {
		botShadow.current.style.opacity = 0;
		botShadow.current.style.display = "none";
	} else {
		botShadow.current.style.display = "block";
		setTimeout(() => (botShadow.current.style.opacity = 0.6), 100);
	}

	if (element.scrollTop < 20) {
		topShadow.current.style.opacity = 0;
		topShadow.current.style.display = "none";
	} else {
		topShadow.current.style.display = "block";
		setTimeout(() => (topShadow.current.style.opacity = 0.6), 100);
	}
};

// Scroll to the selected project
const scrollToProject = (listRef, projectName) => {
	if (projectName && listRef?.current) {
		// TODO: Fix this
		const selectedProject = listRef.current.children[0].querySelector(
			`[href="/project/${projectName}"]`
		);

		if (selectedProject) {
			listRef.current.scrollTo({
				top: selectedProject.offsetTop - 50,
				behavior: "smooth",
			});
		}
	}
};

const Projects = () => {
	const { projectName } = useParams();

	// Refs
	const listRef = useRef(null);
	const botShadow = useRef(null);
	const topShadow = useRef(null);

	// Scroll to a project when the url changes
	useEffect(() => {
		scrollToProject(listRef, projectName);
	}, [projectName]);

	return (
		<div className="h-full w-[800px] flex flex-col items-center justify-center gap-4">
			<Navigation />
			{/* Projects container */}
			<div className="relative h-[40rem] w-full z-0 overflow-hidden backdrop-blur-lg">
				{/* Top shadow */}
				<div
					ref={topShadow}
					style={{ opacity: 0, display: "none" }}
					className="absolute top-0 bg-gradient-to-b from-background to-transparent right-4 h-4 w-full z-10 duration-500"
				/>
				{/* List of projects */}
				<motion.ul
					layout
					initial="hidden"
					animate="visible"
					variants={list}
					ref={listRef}
					onAnimationComplete={() => scrollToProject(listRef, projectName)}
					onScroll={(e) => scrollShadow(e.target, botShadow, topShadow)}
					className="h-full px-4 grid grid-cols-2 grid-flow-dense gap-6 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#D2A754] scrollbar-thumb-rounded-full drop-shadow-md pr-4">
					{projectsDb.map((project, i) => (
						<ProjectItem
							key={project.title}
							item={project}
							current={projectName}
							index={i + 1}
							lastItem={projectsDb.length === i + 1}
						/>
					))}
				</motion.ul>
				{/* Bottom Shadow */}
				<div
					ref={botShadow}
					style={{ opacity: 0.2 }}
					className="relative bottom-4 bg-gradient-to-t from-background to-transparent right-4 h-4 w-full z-10 duration-500"
				/>
			</div>
		</div>
	);
};

export default Projects;
