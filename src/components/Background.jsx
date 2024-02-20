import { motion } from "framer-motion";

import useMousePosition from "../hooks/useMousePosition";

// Animation variants
const variants = {
	visible: (visible) => ({
		opacity: visible ? 1 : 0,
		scale: visible ? 1 : 0,
		transition: { type: "tween", duration: visible ? 1.3 : 0.5, ease: "easeInOut" },
	}),
	hidden: { opacity: 0, scale: 0 },
};

const Background = () => {
	const { smoothPosition, visible } = useMousePosition(256);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// TODO: Add a linear sweep initial transition
			// TODO: Add same color light streaks going down in an angle
			transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
			className="w-full h-full hidden tablet:block fixed overflow-hidden">
			{/* Background line colors */}
			<div className="w-full h-full bg-[#111111] fixed -z-[2] " />
			{/* Container that follows the mouse and lights up background */}
			<motion.div
				style={{
					left: smoothPosition.x,
					top: smoothPosition.y,
				}}
				initial="hidden"
				animate="visible"
				custom={visible}
				variants={variants}
				className="w-[512px] h-[512px] fixed bg-gradient-radial from-[#FFA700] via-transparent to-50% to-transparent -z-[1]">
				{/* Grain */}
				<div className="w-full h-full bg-[url('./src/assets/grain.svg')] bg-repeat bg-fixed animate-grain absolute" />
				{/* Smooth radial edges */}
				<div className="w-full h-full bg-gradient-radial from-transparent via-primary to-50% to-background absolute" />
			</motion.div>
			{/* Overlay */}
			<div className="w-full h-full bg-background fixed z-0 bg-clip" />
		</motion.div>
	);
};

export default Background;
