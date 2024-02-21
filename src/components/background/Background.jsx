import { motion } from "framer-motion";

import useMousePosition from "../../hooks/useMousePosition";
// import Glow from "./Glow";
import GrainAndMask from "./GrainAndMask";

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
			transition={{ delay: 3.5, duration: 2, ease: "easeInOut" }}
			className="w-full h-full hidden tablet:block fixed overflow-hidden">
			{/* Background line colors */}
			<div className="w-full h-full bg-[#111111] fixed -z-[3]" />
			{/* Animate glowing lights that move on the background */}
			{/* <Glow style={"right-0 top-[-200%] animate-bgStreakTR"} />
			<Glow style={"left-[16.2%] bottom-[-200%] animate-bgStreakBL"} /> */}
			{/* Div that follows the mouse and lights up background */}
			{/* TODO: Fix edges being straight, only a problem when going over other glows */}
			<motion.div
				style={{
					left: smoothPosition.x,
					top: smoothPosition.y,
				}}
				initial="hidden"
				animate="visible"
				custom={visible}
				variants={variants}
				className="w-[512px] h-[512px] fixed overflow-hidden bg-gradient-radial from-[#FFA700] via-transparent to-50% to-transparent -z-[1]">
				<GrainAndMask />
			</motion.div>
			{/* Overlay */}
			<div className="w-full h-full bg-background fixed z-0 bg-clip" />
		</motion.div>
	);
};

export default Background;
