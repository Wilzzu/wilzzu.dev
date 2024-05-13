import { useLocation, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Projects from "./projects/Projects";
import { AnimatePresence } from "framer-motion";
import About from "./about/About";
import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const ContainerRight = ({ mainRef }) => {
	const [delayAnimation, setDelayAnimation] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);
	const { scrollDir, scrollPos } = useScrollDirection(mainRef?.current);
	const location = useLocation();
	const { projectName } = useParams();

	// Scroll to bottom when the user scrolls down after a certain point
	if (scrollDir === "down" && scrollPos > 250 && !hasScrolled) {
		setHasScrolled(true);
		mainRef?.current?.scrollTo({ top: mainRef?.current?.scrollHeight, behavior: "smooth" });
	} else if (scrollDir === "up" && hasScrolled) setHasScrolled(false);

	// Delay animation on initial render to give time for the logo to move away
	useEffect(() => {
		if (delayAnimation) setDelayAnimation(false);
	}, [delayAnimation]);

	return (
		<div className="h-full w-full tablet:w-[800px] flex flex-col items-center justify-start tablet:justify-center gap-4">
			<Navigation location={location} projectName={encodeURIComponent(projectName)} />
			<section className="relative w-full h-full tablet:h-[40rem] pb-4 xl:pb-0 z-0 overflow-hidden">
				<AnimatePresence mode="wait">
					{location.pathname === "/about" ? (
						<About key="About" delayAnimation={delayAnimation} />
					) : (
						<Projects
							key="Projects"
							projectName={encodeURIComponent(projectName)}
							delayAnimation={delayAnimation}
						/>
					)}
				</AnimatePresence>
			</section>
		</div>
	);
};

export default ContainerRight;
