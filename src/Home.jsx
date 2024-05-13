import Logo from "./components/Logo";
import { useRef, useState } from "react";
import ContainerRight from "./components/ContainerRight";
import Background from "./components/background/Background";

function Home() {
	const [introAnimationOver, setIntroAnimationOver] = useState(false);
	const ref = useRef(null);

	return (
		<main
			ref={ref}
			className="relative h-screen tablet:min-h-screen tablet:h-auto w-full overflow-x-hidden py-10 px-2 tablet:p-6 flex flex-col items-center xl:flex-row xl:justify-center gap-24 font-poppins">
			<Background />
			{/* Main container */}
			<section className="h-full flex justify-center">
				<Logo setIntroAnimationOver={setIntroAnimationOver} />
			</section>
			{/* Show projects and about container */}
			{introAnimationOver && <ContainerRight mainRef={ref} />}
		</main>
	);
}

export default Home;
