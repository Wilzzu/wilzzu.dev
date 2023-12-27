import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Logo = () => {
	return (
		// Animated moving wrapper for the logo
		<motion.div
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				y: { duration: 5, type: "tween", ease: [0.45, 0.45, 0.15, 1] },
				opacity: { duration: 4, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 0.2 },
			}}
			className="absolute w-1/5 group drop-shadow-2xl select-none">
			{/* Logo with tilt */}
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
					className="inner-element w-1/4 transform-style-3d translate-z-5 drop-shadow-2xl group-hover:scale-125 duration-500 ease-out"
					src="./src/assets/LogoLetter.png"
					alt="W letter logo"
					draggable="false"
				/>
			</Tilt>
		</motion.div>
	);
};

export default Logo;
