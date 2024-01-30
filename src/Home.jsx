import Logo from "./components/start/Logo";
import Projects from "./components/projects/Projects";
import { useState } from "react";

function Home() {
	const [initialLogoAnimationComplete, setInitialLogoAnimationComplete] = useState(false);
	// TODO: If user has already selected a project, don't show initial animations

	return (
		<main className="h-dvh w-full flex justify-center gap-24 font-poppins">
			{/* Main container */}
			<div className="h-full flex justify-center">
				<Logo setInitialLogoAnimationComplete={setInitialLogoAnimationComplete} />
			</div>
			{/* Projects container */}
			{initialLogoAnimationComplete && <Projects />}
		</main>
	);
}

export default Home;
