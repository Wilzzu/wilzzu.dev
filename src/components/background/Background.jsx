import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";
import Glow from "./Glow";
import Grain from "./Grain";
import { useMemo } from "react";
import useSessionStorage from "../../hooks/useSessionStorage";

// Animation variants
const variants = {
	visible: (visible) => ({
		opacity: visible ? 1 : 0,
		scale: visible ? 1 : 0,
		transition: { type: "tween", duration: visible ? 1.3 : 0.5, ease: "easeInOut" },
	}),
	hidden: { opacity: 0, scale: 0 },
};

const Background = ({ performanceMode }) => {
	const { smoothPosition, visible } = useMousePosition(256, performanceMode);
	const { getSessionItem } = useSessionStorage();

	// Use faster animation for intro if user has visited the site before during the session
	const shouldAnimateFast = () => {
		if (location.pathname !== "/") return true;
		if (getSessionItem("storage", "hasVisited")) return true;
		return false;
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fastAnimation = useMemo(() => shouldAnimateFast(), []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: fastAnimation ? 1.4 : 3.5, duration: 2, ease: "easeInOut" }}
			className="w-full h-full hidden tablet:block fixed overflow-hidden">
			{/* Background line colors */}
			<div className="w-full h-full bg-[#111111] fixed -z-[3]" />
			{/* Animate glowing lights that move on the background */}
			{!performanceMode && (
				<>
					<Glow style={"right-0 top-[-200%] animate-bgStreakTR"} />
					<Glow style={"left-[16.2%] bottom-[-200%] animate-bgStreakBL"} />

					{/* Div that follows the mouse and lights up background */}
					<motion.div
						style={{
							left: smoothPosition.x,
							top: smoothPosition.y,
						}}
						initial="hidden"
						animate="visible"
						custom={visible}
						variants={variants}
						className="w-[512px] h-[512px] fixed overflow-hidden bg-gradient-radial from-[#FFA700] via-transparent to-35% to-transparent -z-[1]">
						<Grain />
					</motion.div>
				</>
			)}
			{/* Overlay */}
			<div className="w-full h-full bg-background fixed top-0 z-0 bg-clip" />
		</motion.div>
	);
};

export default Background;
