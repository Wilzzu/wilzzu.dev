import Logo from "./components/start/Logo";
import Projects from "./components/projects/Projects";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/project-details/ProjectDetails";

function Home() {
	const [initialLogoAnimationComplete, setInitialLogoAnimationComplete] = useState(false);
	// TODO: If user has already selected a project, don't show initial animations

	return (
		<main className="h-dvh w-full flex justify-center">
			{/* Main container */}
			<div
				className={cn(
					"h-full w-[960px] flex items-center justify-center",
					initialLogoAnimationComplete && "justify-between"
				)}>
				<Logo setInitialLogoAnimationComplete={setInitialLogoAnimationComplete} />
				{initialLogoAnimationComplete && <Projects />}
			</div>
			{/* Project details */}
			{/* TODO: Maybe better to put this as a child of Main container, and then change it's width when a project is selected */}
			<Routes>
				<Route path="project/:projectName" element={<ProjectDetails />} />
			</Routes>
		</main>
	);
}

export default Home;
