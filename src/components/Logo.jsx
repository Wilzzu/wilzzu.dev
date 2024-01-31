import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Socials from "./Socials";
import AnimatedText from "./AnimatedText";

// Animation variants
const variants = {
	visible: ([yDur, opacityDur]) => ({
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: yDur, type: "tween", ease: [0.45, 0.45, 0.15, 1] },
			opacity: { duration: opacityDur, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 0.2 },
		},
	}),
	hidden: { y: 300, opacity: 0 },
};

const Logo = ({ setInitialLogoAnimationComplete, projectName }) => {
	const [firstLayoutAnimationComplete, setFirstLayoutAnimationComplete] = useState(false);
	const animationState = useRef(firstLayoutAnimationComplete);

	// Update the ref so setTimeout can access the latest state
	useEffect(() => {
		animationState.current = firstLayoutAnimationComplete;
	}, [firstLayoutAnimationComplete]);

	const handleInitialAnimationComplete = () => {
		setInitialLogoAnimationComplete(true);

		// Fail-safe if layoutAnimationComplete doesn't fire
		setTimeout(() => {
			handleLayoutAnimationComplete();
		}, 3000);
	};

	const handleLayoutAnimationComplete = () => {
		if (!animationState.current) setFirstLayoutAnimationComplete(true);
	};

	return (
		// Full height container that moves to the left after logo reveal
		<motion.div
			layout
			id="logoContainer"
			transition={{
				layout: {
					duration: projectName ? 1.2 : 1.8,
					type: "tween",
					ease: [0.62, 0, 0.25, 1],
				},
			}}
			onLayoutAnimationComplete={handleLayoutAnimationComplete}
			className="relative w-[380px] h-full flex flex-col items-center justify-center drop-shadow-2xl z-10">
			{/* Container for logo and socials */}
			<motion.div className="w-full h-full flex flex-col items-center justify-center gap-8">
				{/* Container for logo, to move it upwards at start and after first layout animation */}
				<motion.div
					layout
					initial="hidden"
					animate="visible"
					variants={variants}
					custom={projectName ? [0, 1] : [3.4, 2.5]}
					onAnimationComplete={handleInitialAnimationComplete}
					transition={{
						layout: {
							type: "tween",
							duration: projectName ? 1.5 : 1.9,
							ease: [0.48, 0.13, 0.15, 1],
						},
					}} //1.4 | 0.45, 0.16, 0.28, 1 /  2.1 | 0.38, 0.2, 0.06, 1 / 1.9 | 0.48, 0.13, 0.15, 1
					className="relative group px-10 w-full z-20">
					{/* Hoverable logo */}
					<Tilt
						className="bg-[url('./src/assets/LogoBG.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center aspect-square rounded-[2rem] transform-style-3d"
						perspective={800}
						glareEnable={true}
						glareMaxOpacity={0.2}
						glareColor="#ffffff"
						glarePosition="bottom"
						glareBorderRadius="2rem"
						transitionSpeed={2200}
						gyroscope={true}>
						{/* Inner logo letter */}
						<img
							className="w-1/4 transform-style-3d translate-z-4 drop-shadow-2xl group-hover:scale-125 duration-500 ease-out select-none"
							src="./src/assets/LogoLetter.png"
							alt="W letter logo"
							draggable="false"
						/>
					</Tilt>
				</motion.div>
				{/* Show socials, name and title below logo */}
				{firstLayoutAnimationComplete && (
					<>
						<Socials />
						{/* Name and title */}
						<div className="w-full flex flex-col items-center justify-center">
							<AnimatedText
								text="Wilzzu"
								style="text-5xl leading-none opacity-90"
								delay={0.9}
								duration={projectName ? 1 : 3}
							/>
							<AnimatedText
								text="/ Web Developer"
								style="text-xl leading-none opacity-50"
								delay={projectName ? 2.1 : 3}
								duration={0.2}
							/>
						</div>
					</>
				)}
			</motion.div>
		</motion.div>
	);
};

export default Logo;