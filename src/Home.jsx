import Logo from "./components/Logo";
import { useState } from "react";
import ContainerRight from "./components/ContainerRight";

function Home() {
	const [introAnimationOver, setIntroAnimationOver] = useState(false);

	return (
		<main className="h-dvh w-full p-6 flex justify-center gap-24 font-poppins">
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
