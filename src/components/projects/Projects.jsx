import { motion } from "framer-motion";
import projectsDb from "../../configs/projects.json";
import ProjectItem from "./ProjectItem";
import { createRef, useEffect, useRef } from "react";
import useCheckMobile from "../../hooks/useCheckMobile";
import { cn } from "../../../lib/utils";

// Animation variants
const list = {
	visible: ([delayChildren, delay]) => ({
		opacity: 1,
		transition: {
			delayChildren,
			staggerChildren: 0.12,
			opacity: { delay, duration: 0.4, ease: "easeInOut" },
		},
	}),
	hidden: { opacity: 0 },
	exit: { opacity: 0, transition: { staggerChildren: 0.08, duration: 0.9, ease: "easeInOut" } },
};

const itemVariant = {
	visible: {
		y: 0,
		scale: 1,
		opacity: 1,
		transition: {
			y: { type: "tween", duration: 0.5, ease: "easeOut" },
			opacity: { duration: 1, ease: "easeInOut" },
			scale: { duration: 0.5, ease: "easeOut" },
		},
	},
	hidden: { y: 50, scale: 0.8, opacity: 0 },
	exit: { scale: 0.8, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const fastExitVariant = {
	...itemVariant,
	exit: { ...itemVariant.exit, transition: { duration: 0.1 } },
};

// Check if scroll shadows should be shown
const scrollShadow = (element, botShadow, topShadow) => {
	const distFromBot = element.scrollHeight - element.scrollTop - element.clientHeight;
	if (distFromBot < 20) {
		botShadow.current.style.opacity = 0;
		botShadow.current.style.display = "none";
	} else {
		botShadow.current.style.display = "block";
		setTimeout(() => botShadow.current && (botShadow.current.style.opacity = 0.6), 100);
	}

	if (element.scrollTop < 20) {
		topShadow.current.style.opacity = 0;
		topShadow.current.style.display = "none";
	} else {
		topShadow.current.style.display = "block";
		setTimeout(() => topShadow.current && (topShadow.current.style.opacity = 0.6), 100);
	}
};

// Scroll to the selected project
const scrollToProject = (listRef, projectRefs, projectName) => {
	const projectIndex = projectsDb.findIndex(
		(project) => encodeURIComponent(project.title) === projectName
	);

	if (projectIndex !== -1) {
		const selectedProject = projectRefs.current[projectIndex];

		listRef.current.scrollTo({
			top: selectedProject.current.offsetTop - 50,
			behavior: "smooth",
		});
	}
};

const Projects = ({ projectName, delayAnimation, performanceMode }) => {
	const isMobile = useCheckMobile();

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
				className="absolute top-0 bg-gradient-to-b from-background to-transparent right-4 h-4 w-full z-10 duration-500 pointer-events-none"
			/>
			{/* List of projects */}
			<motion.ul
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={list}
				custom={delayAnimation ? [0.6, 0.5] : [0, 0]}
				ref={listRef}
				onAnimationComplete={() => scrollToProject(listRef, projectName)}
				onScroll={(e) => scrollShadow(e.target, botShadow, topShadow)}
				// Scrollbar track color is set to invisible, to be able to render the thumb color in Firefox
				className={cn(
					"h-full px-4 grid tablet:grid-cols-2 grid-flow-dense gap-6 overflow-y-auto overflow-x-hidden drop-shadow-md pr-4 backdrop-blur scrollbar-thin scrollbar-track-[#19191900] scrollbar-track-rounded-full scrollbar-thumb-accent scrollbar-thumb-rounded-full",
					performanceMode && "backdrop-blur-none"
				)}>
				{projectsDb.map((project, i) => (
					<ProjectItem
						key={project.title}
						ref={projectRefs.current[i]}
						item={project}
						current={projectName}
						parsedUrl={encodeURIComponent(project.title)}
						index={i}
						lastItem={projectsDb.length === i + 1}
						variant={i < 6 ? itemVariant : fastExitVariant}
						isMobile={isMobile}
						performanceMode={performanceMode}
					/>
				))}
			</motion.ul>
			{/* Bottom Shadow */}
			<div
				ref={botShadow}
				style={{ opacity: 0.6 }}
				className="relative bottom-4 bg-gradient-to-t from-background to-transparent right-4 h-4 w-full z-10 duration-500 pointer-events-none"
			/>
		</>
	);
};

export default Projects;
