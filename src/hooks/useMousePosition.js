import { useMotionValue, useSpring } from "framer-motion";
import { throttle } from "lodash";
import { useEffect, useState } from "react";

const smoothing = { stiffness: 20, damping: 10 };

const useMousePosition = (center = 0, performanceMode = false) => {
	const [visible, setVisible] = useState(false);

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
		if (performanceMode) return;

		const onMouseMove = throttle((e) => {
			// Center div to the mouse position
			const { clientX, clientY } = e;
			mousePos.x.set(clientX - center);
			mousePos.y.set(clientY - center);
		}, 80);

		document.documentElement.addEventListener("mousemove", onMouseMove);
		document.documentElement.addEventListener("mouseenter", () => setVisible(true));
		document.documentElement.addEventListener("mouseleave", () => setVisible(false));

		return () => {
			document.documentElement.removeEventListener("mousemove", onMouseMove);
			document.documentElement.removeEventListener("mouseenter", () => setVisible(true));
			document.documentElement.removeEventListener("mouseleave", () => setVisible(false));
		};
	}, [mousePos.x, mousePos.y, center, performanceMode]);

	const setInitialVisibility = () => {
		setVisible(true);
		document.documentElement.removeEventListener("mousemove", setInitialVisibility);
	};

	// Set mouse visible on initial movement
	useEffect(() => {
		document.documentElement.addEventListener("mousemove", setInitialVisibility);

		return () => {
			document.documentElement.removeEventListener("mousemove", setInitialVisibility);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { mousePos, smoothPosition, visible };
};

export default useMousePosition;
