import { useLocation, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Projects from "./projects/Projects";
import { AnimatePresence } from "framer-motion";
import About from "./about/About";
import { useEffect, useState } from "react";

const ContainerRight = () => {
	const [firstTime, setFirstTime] = useState(true);
	const location = useLocation();
	const { projectName } = useParams();

	useEffect(() => {
		if (firstTime) setFirstTime(false);
	}, [firstTime]);

	return (
		<div className="h-full w-[800px] flex flex-col items-center justify-center gap-4">
			<Navigation location={location} projectName={projectName} />
			<section className="relative h-[40rem] w-full z-0 overflow-hidden backdrop-blur-lg">
				<AnimatePresence>
					{location.pathname === "/about/" ? (
						<About />
					) : (
						<Projects projectName={projectName} firstTime={firstTime} />
					)}
				</AnimatePresence>
			</section>
		</div>
	);
};

export default ContainerRight;
