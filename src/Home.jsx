import Logo from "./components/start/Logo";
import Projects from "./components/projects/Projects";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useParams } from "react-router-dom";

function Home() {
	const { projectName } = useParams();
	const [initialLogoAnimationComplete, setInitialLogoAnimationComplete] = useState(false);
	// TODO: If user has already selected a project, don't show initial animations

	return (
		<main className={cn("h-dvh w-full flex justify-center gap-24", projectName && "gap-0")}>
			{/* Main container */}
			<div className={cn("h-full flex justify-center", projectName && "w-[960px]")}>
				<Logo setInitialLogoAnimationComplete={setInitialLogoAnimationComplete} />
			</div>
			{/* Projects container */}
			{initialLogoAnimationComplete && <Projects projectName={projectName} />}
		</main>
	);
}

export default Home;
