import Logo from "./components/Logo";
import { useRef, useState } from "react";
import ContainerRight from "./components/ContainerRight";
import Background from "./components/background/Background";
import useScrollDirection from "./hooks/useScrollDirection";

function Home() {
	const [introAnimationOver, setIntroAnimationOver] = useState(false);
	const ref = useRef(null);
	const [hasScrolled, setHasScrolled] = useState(false);
	const { scrollDir, scrollPos } = useScrollDirection(ref?.current);

	// Scroll to bottom when the user scrolls down after a certain point
	if (scrollDir === "down" && scrollPos > 250 && !hasScrolled) {
		setHasScrolled(true);
		ref?.current?.scrollTo({ top: ref.current.clientHeight, behavior: "smooth" });
	} else if (scrollDir === "up" && hasScrolled) setHasScrolled(false);

	return (
		<main
			ref={ref}
			className="relative h-dvh tablet:min-h-dvh tablet:h-auto w-full overflow-x-hidden py-10 px-2 tablet:p-6 flex flex-col items-center xl:flex-row xl:justify-center gap-24 font-poppins">
			<Background />
			{/* Main container */}
			<section className="h-full flex justify-center">
				<Logo setIntroAnimationOver={setIntroAnimationOver} />
			</section>
			{/* Show projects and about container */}
			{introAnimationOver && <ContainerRight />}
		</main>
	);
}

export default Home;
