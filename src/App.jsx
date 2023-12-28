import Logo from "./components/start/Logo";
import Projects from "./components/projects/Projects";
import { useState } from "react";
import { cn } from "../lib/utils";

function App() {
	const [initialLogoAnimationFinished, setInitialLogoAnimationFinished] = useState(false);

	return (
		<main className="h-dvh w-full flex justify-center overflow-hidden">
			{/* Main container */}
			<div
				className={cn(
					"h-full w-[960px] flex items-center justify-center",
					initialLogoAnimationFinished && "justify-between"
				)}>
				<Logo setInitialLogoAnimationFinished={setInitialLogoAnimationFinished} />
				{initialLogoAnimationFinished && <Projects />}
			</div>
		</main>
	);
}

export default App;
