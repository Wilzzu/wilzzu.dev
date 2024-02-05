import { motion } from "framer-motion";
import projectsDb from "../../configs/projects.json";
import ProjectItem from "./ProjectItem";
import { createRef, useEffect, useRef } from "react";

// Animation variants
const list = {
	visible: ([delayChildren, delayOpacity]) => ({
		opacity: 1,
		transition: {
			delayChildren,
			staggerChildren: 0.12,
			opacity: { delay: delayOpacity, duration: 0.4, ease: "easeInOut" },
		}, //0.8 0.7
	}),
	hidden: { opacity: 0 },
	exit: { opacity: 0, transition: { staggerChildren: 0.14, duration: 1, ease: "easeInOut" } },
};

const parseUrl = (title) => {
	return title.replace(/\s+/g, "-").toLowerCase();
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
const scrollToProject = (listRef, projectRefs, projectName) => {
	const projectIndex = projectsDb.findIndex((project) => parseUrl(project.title) === projectName);

	if (projectIndex !== -1) {
		const selectedProject = projectRefs.current[projectIndex];

		listRef.current.scrollTo({
			top: selectedProject.current.offsetTop - 50,
			behavior: "smooth",
		});
	}
};

const Projects = ({ projectName, delayItems }) => {
	// Refs
	const projectRefs = useRef(projectsDb.map(() => createRef()));
	const listRef = useRef(null);
	const botShadow = useRef(null);
	const topShadow = useRef(null);

	// Scroll to a project when the url changes
	useEffect(() => {
		if (projectName && listRef?.current) scrollToProject(listRef, projectRefs, projectName);
	}, [projectName]);

	return (
		<>
			{/* Top shadow */}
			<div
				ref={topShadow}
				style={{ opacity: 0, display: "none" }}
				className="absolute top-0 bg-gradient-to-b from-background to-transparent right-4 h-4 w-full z-10 duration-500"
			/>
			{/* List of projects */}
			{/* TODO: Fix scrollbar */}
			{/* TODO: Fix items disappearing on Firefox */}
			<motion.ul
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={list}
				custom={delayItems ? [0.8, 0.7] : [0, 0]}
				ref={listRef}
				onAnimationComplete={() => scrollToProject(listRef, projectName)}
				onScroll={(e) => scrollShadow(e.target, botShadow, topShadow)}
				className="h-full px-4 grid grid-cols-2 grid-flow-dense gap-6 overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-2 scrollbar-thumb-accent scrollbar-thumb-rounded-full  drop-shadow-md pr-4">
				{projectsDb.map((project, i) => (
					<ProjectItem
						key={project.title}
						ref={projectRefs.current[i]}
						item={project}
						current={projectName}
						parsedUrl={parseUrl(project.title)}
						index={i + 1}
						lastItem={projectsDb.length === i + 1}
					/>
				))}
			</motion.ul>
			{/* Bottom Shadow */}
			<div
				ref={botShadow}
				style={{ opacity: 0.6 }}
				className="relative bottom-4 bg-gradient-to-t from-background to-transparent right-4 h-4 w-full z-10 duration-500"
			/>
		</>
	);
};

export default Projects;
