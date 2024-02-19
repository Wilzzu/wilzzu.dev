import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Animation variants
const variants = {
	visible: (showGlow) => ({
		opacity: showGlow ? 1 : 0,
		scale: showGlow ? 1 : 0,
		transition: { type: "tween", duration: showGlow ? 1.3 : 0.5, ease: "easeInOut" },
	}),
	hidden: { opacity: 0, scale: 0 },
};

const smoothing = { stiffness: 20, damping: 10 };

const Background = () => {
	const [showGlow, setShowGlow] = useState(false);

	const mousePos = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothPosition = {
		x: useSpring(mousePos.x, smoothing),
		y: useSpring(mousePos.y, smoothing),
	};

	// Track mouse
	// TODO: Fix erratic movement
	useEffect(() => {
		const onMouseMove = (e) => {
			const { clientX, clientY } = e;
			// Center div to the mouse position
			mousePos.x.set(clientX - 256);
			mousePos.y.set(clientY - 256);
			setShowGlow(true);
		};

		const hideGlow = () => {
			setShowGlow(false);
		};

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseleave", hideGlow);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseleave", hideGlow);
		};
	}, [mousePos.x, mousePos.y]);
	// TODO: Add custom cursor
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// TODO: Add a linear sweep initial transition
			transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
			className="w-full h-full fixed overflow-hidden">
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
				custom={showGlow}
				variants={variants}
				className="w-[512px] h-[512px] fixed bg-gradient-radial from-[#FFA700] via-transparent to-50% to-transparent -z-[1]">
				{/* Grain */}
				<div className="w-full h-full bg-[url('./src/assets/grain.svg')] bg-repeat bg-fixed animate-grain absolute" />
				{/* Smooth radial edges */}
				<div className="w-full h-full bg-gradient-radial from-transparent via-primary to-50% to-background absolute" />
			</motion.div>
			{/* Overlay */}
			{/* TODO: Change this and make the lines smaller maybe */}
			{/* TODO: Maybe add slow movement */}
			<div className="w-full h-full bg-background fixed z-0 bg-clip" />
		</motion.div>
	);
};

export default Background;
