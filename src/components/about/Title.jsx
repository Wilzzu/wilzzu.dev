import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

const variant = { exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } } };

const Title = () => {
	const [removeFirstAnimation, setRemoveFirstAnimation] = useState(false);
	const [waving, setWaving] = useState(false);
	const hovering = useRef(false);
	const hoverTimeout = useRef(null);

	// Remove first wave animation after 4.5 seconds
	useEffect(() => {
		const timeout = setTimeout(() => {
			setRemoveFirstAnimation(true);
		}, 4500);

		return () => {
			clearTimeout(timeout);
			clearTimeout(hoverTimeout.current);
		};
	}, []);

	// Handle waving hand animation
	const handleWaving = (hover) => {
		hovering.current = hover;
		if (hover) setWaving(true);
		if (hoverTimeout.current) return;

		// Let the waving animation finish before setting waving to false
		// Also check if the user is still hovering
		hoverTimeout.current = setTimeout(() => {
			setWaving(false);
			hoverTimeout.current = clearTimeout(hoverTimeout.current);
			if (hovering.current) handleWaving(true);
		}, 1200);
	};

	return (
		<motion.h1
			variants={variant}
			onHoverStart={() => handleWaving(true)}
			onHoverEnd={() => handleWaving(false)}
			className="flex h-11 gap-2 text-2xl tablet:leading-normal tablet:text-[1.76rem] font-semibold tablet:mb-3 text-neutral-200">
			<AnimatedText text="Hi, I'm Wilzzu!" delay={0.6} duration={0.4} />
			{/* Waving animation */}
			<span className={removeFirstAnimation ? (waving ? "animate-hoverWave" : "") : "animate-wave"}>
				{"👋"}
			</span>
		</motion.h1>
	);
};

export default Title;
