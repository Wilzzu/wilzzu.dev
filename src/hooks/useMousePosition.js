import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const smoothing = { stiffness: 20, damping: 10 };

const useMousePosition = (center = 0) => {
	const [visible, setVisible] = useState(false);
	const buffer = useRef(false);

	const mousePos = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothPosition = {
		x: useSpring(mousePos.x, smoothing),
		y: useSpring(mousePos.y, smoothing),
	};

	// Track mouse
	useEffect(() => {
		const onMouseMove = (e) => {
			// Buffer mouse input
			if (buffer.current) return;
			buffer.current = true;
			setTimeout(() => (buffer.current = false), 80);

			// Center div to the mouse position
			const { clientX, clientY } = e;
			mousePos.x.set(clientX - center);
			mousePos.y.set(clientY - center);
			setVisible(true);
		};

		const hideGlow = () => {
			setVisible(false);
		};

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseleave", hideGlow);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseleave", hideGlow);
		};
	}, [mousePos.x, mousePos.y, center]);

	return { mousePos, smoothPosition, visible };
};

export default useMousePosition;
