import { useLocation, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Projects from "./projects/Projects";
import { AnimatePresence } from "framer-motion";
import About from "./about/About";
import { useEffect, useState } from "react";

const ContainerRight = () => {
	const [delayItems, setDelayItems] = useState(true);
	const location = useLocation();
	const { projectName } = useParams();

	// Delay items on initial render to give time for the logo to move
	useEffect(() => {
		if (delayItems) setDelayItems(false);
	}, [delayItems]);

	return (
		<div className="h-full w-[800px] flex flex-col items-center justify-center gap-4">
			<Navigation location={location} projectName={projectName} />
			<section className="relative h-[40rem] w-full z-0 overflow-hidden backdrop-blur-lg">
				<AnimatePresence mode="wait" onExitComplete={() => console.log("exited")}>
					{location.pathname === "/about/" ? (
						<About key="About" />
					) : (
						<Projects key="Projects" projectName={projectName} delayItems={delayItems} />
					)}
				</AnimatePresence>
			</section>
		</div>
	);
};

export default ContainerRight;
