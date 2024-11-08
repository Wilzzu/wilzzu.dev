import Logo from "./components/Logo";
import { useEffect, useRef, useState } from "react";
import ContainerRight from "./components/ContainerRight";
import Background from "./components/background/Background";
import useSessionStorage from "./hooks/useSessionStorage";
import projectsDb from "./configs/projects.json";

const defaultImagesToPreload = ["/assets/LogoBG.png", "/assets/LogoLetter.png"];

const preloadImage = (url) => {
	const img = new Image();
	img.src = url;
};

const preloadImages = () => {
	defaultImagesToPreload.forEach((url) => preloadImage(url));
	projectsDb.forEach((item) => {
		preloadImage(item.thumbnail);
		preloadImage(item.images[0]);
	});
};

function Home() {
	const [introAnimationOver, setIntroAnimationOver] = useState(false);
	const { getSessionItem } = useSessionStorage();
	const [performanceMode, setPerformanceMode] = useState(
		getSessionItem("storage", "performanceMode") || false
	);
	const ref = useRef(null);
	useEffect(() => preloadImages(), []);

	return (
		<main
			ref={ref}
			className="relative h-screen tablet:min-h-screen tablet:h-auto w-full overflow-x-hidden pt-10 pb-5 px-2 tablet:p-6 flex flex-col items-center xl:flex-row xl:justify-center gap-24 font-poppins">
			<Background performanceMode={performanceMode} />
			{/* Main container */}
			<section className="h-full flex justify-center">
				<Logo
					setIntroAnimationOver={setIntroAnimationOver}
					performanceMode={performanceMode}
					setPerformanceMode={setPerformanceMode}
				/>
			</section>
			{/* Show projects and about container */}
			{introAnimationOver && <ContainerRight mainRef={ref} performanceMode={performanceMode} />}
		</main>
	);
}

export default Home;
