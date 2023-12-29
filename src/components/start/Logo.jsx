import Tilt from "react-parallax-tilt";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Socials from "../Socials";

const variants = {
	hidden: { y: 300, opacity: 0 },
	start: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 4.5, type: "tween", ease: [0.45, 0.45, 0.15, 1] },
			opacity: { duration: 3.5, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 0.2 },
		},
	},
	end: {
		y: -20,
		transition: { duration: 4.5, type: "tween", ease: [0.45, 0.45, 0.15, 1] },
	},
};

const Logo = (props) => {
	// Control animation state
	const controls = useAnimationControls();
	const [firstLayoutAnimationComplete, setFirstLayoutAnimationComplete] = useState(false);

	// Move the logo upwards after the first layout animation has finished
	const handleLayoutAnimationComplete = () => {
		if (!firstLayoutAnimationComplete) setFirstLayoutAnimationComplete(true);
		controls.start("end"); //TODO: This moves the whole container right now, it should only move the logo
	};

	// Start animation on mount
	useEffect(() => {
		controls.start("start");
	}, [controls]);

	return (
		// Animated moving wrapper for the logo
		<motion.div
			layout
			id="logoContainer"
			variants={variants}
			initial="hidden"
			animate={controls}
			transition={{ layout: { duration: 2, type: "tween", ease: [0.61, 0, 0.59, 0.93] } }} //TODO: Make a better animation
			onAnimationComplete={() => props.setInitialLogoAnimationComplete(true)}
			onLayoutAnimationComplete={handleLayoutAnimationComplete}
			className="relative group w-[40%] flex flex-col items-center drop-shadow-2xl select-none p-10 z-10">
			{/* Logo with tilt */}
			{/* TODO: Add hovering effect and tilting */}
			<Tilt
				className="bg-[url('./src/assets/LogoBG.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center w-full h-full aspect-square rounded-[2rem] transform-style-3d"
				perspective={800}
				glareEnable={true}
				glareMaxOpacity={0.2}
				glareColor="#ffffff"
				glarePosition="bottom"
				glareBorderRadius="2rem"
				transitionSpeed={2000}
				gyroscope={true}>
				{/* Inner logo letter */}
				<img
					className="inner-element w-1/4 transform-style-3d translate-z-4 drop-shadow-2xl group-hover:scale-125 duration-500 ease-out"
					src="./src/assets/LogoLetter.png"
					alt="W letter logo"
					draggable="false"
				/>
			</Tilt>
			{firstLayoutAnimationComplete && <Socials />}
		</motion.div>
	);
};

export default Logo;
