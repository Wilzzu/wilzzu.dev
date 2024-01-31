import { useParams } from "react-router-dom";
import Logo from "./components/Logo";
import Projects from "./components/projects/Projects";
import { useState } from "react";

function Home() {
	const { projectName } = useParams();
	const [initialLogoAnimationComplete, setInitialLogoAnimationComplete] = useState(false);

	return (
		<main className="h-dvh w-full flex justify-center gap-24 font-poppins">
			{/* Main container */}
			<div className="h-full flex justify-center">
				<Logo
					setInitialLogoAnimationComplete={setInitialLogoAnimationComplete}
					projectName={projectName}
				/>
			</div>
			{/* Projects container */}
			{initialLogoAnimationComplete && <Projects projectName={projectName} />}
		</main>
	);
}

export default Home;
