import Logo from "./components/Logo";
import { useState } from "react";
import ContainerRight from "./components/ContainerRight";
import Background from "./components/Background";

function Home() {
	const [introAnimationOver, setIntroAnimationOver] = useState(false);

	return (
		<main className="relative h-dvh w-full overflow-x-hidden py-10 px-2 tablet:p-6 flex flex-col items-center xl:flex-row xl:justify-center gap-24 font-poppins">
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
