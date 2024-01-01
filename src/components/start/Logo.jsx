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
		// Full height container that moves to the left after logo reveal
		<motion.div
			layout
			id="logoContainer"
			transition={{ layout: { duration: 2, type: "tween", ease: [0.61, 0, 0.59, 0.93] } }} //TODO: Make a better animation
			onLayoutAnimationComplete={handleLayoutAnimationComplete}
			className="relative w-[40%] h-full flex flex-col items-center justify-center drop-shadow-2xl select-none z-10">
			{/* Container for logo and socials */}
			<motion.div layout className="w-full h-full flex flex-col items-center justify-center gap-8">
				{/* Container for logo, to move it upwards at start */}
				<motion.div
					layout
					variants={variants}
					initial="hidden"
					animate="start"
					onAnimationComplete={() => props.setInitialLogoAnimationComplete(true)}
					transition={{ layout: { duration: 1, type: "tween", ease: [0.61, 0, 0.59, 0.93] } }}
					className="group px-10 w-full">
					{/* Hoverable logo */}
					{/* TODO: Add automatic hovering effect and tilting */}
					<Tilt
						className="bg-[url('./src/assets/LogoBG.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center aspect-square rounded-[2rem] transform-style-3d"
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
				</motion.div>
				{firstLayoutAnimationComplete && <Socials />}
			</motion.div>
		</motion.div>
	);
};

export default Logo;
