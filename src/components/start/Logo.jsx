import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import Socials from "../Socials";
import AnimatedText from "../AnimatedText";

// Animation variants
const variants = {
	hidden: { y: 300, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 3.5, type: "tween", ease: [0.45, 0.45, 0.15, 1] },
			opacity: { duration: 2.5, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 0.2 },
		},
	},
};

const Logo = (props) => {
	// Control animation state
	const [firstLayoutAnimationComplete, setFirstLayoutAnimationComplete] = useState(false);

	// TODO: Add loading state, so that the animation doesn't start before the logo is loaded

	// Move the logo upwards after the first layout animation has finished
	// BUG: This doesn't trigger, if user is changing the window size
	// TODO: Create a failsafe using the projects container:
	// - When the projects container is visible, trigger this if it hasn't been triggered yet
	const handleLayoutAnimationComplete = () => {
		if (!firstLayoutAnimationComplete) setFirstLayoutAnimationComplete(true);
	};

	return (
		// Full height container that moves to the left after logo reveal
		<motion.div
			layout
			id="logoContainer"
			transition={{ layout: { duration: 1.8, type: "tween", ease: [0.62, 0, 0.25, 1] } }} //TODO: Make a better animation
			onLayoutAnimationComplete={handleLayoutAnimationComplete}
			className="relative w-[380px] h-full flex flex-col items-center justify-center drop-shadow-2xl z-10">
			{/* Container for logo and socials */}
			<motion.div className="w-full h-full flex flex-col items-center justify-center gap-8">
				{/* Container for logo, to move it upwards at start */}
				<motion.div
					layout
					variants={variants}
					initial="hidden"
					animate="visible"
					onAnimationComplete={() => props.setInitialLogoAnimationComplete(true)}
					transition={{ layout: { duration: 1, type: "tween", ease: [0.61, 0, 0.59, 0.93] } }}
					className="relative group px-10 w-full z-20">
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
							className="inner-element w-1/4 transform-style-3d translate-z-4 drop-shadow-2xl group-hover:scale-125 duration-500 ease-out select-none"
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
								duration={3}
							/>
							<AnimatedText
								text="/ Web Developer"
								style="text-xl leading-none opacity-50"
								delay={3}
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
