import { useEffect, useState } from "react";

// Modified version of https://stackoverflow.com/a/62497293/13544771 originally created by SMAKSS
const useScrollDirection = (ref) => {
	const [scrollDir, setScrollDir] = useState("down");
	const [scrollPos, setScrollPos] = useState(0);

	useEffect(() => {
		if (!ref) return;

		const threshold = 50;
		let lastScrollPos = ref.scrollTop;
		let ticking = false;
		const updateScrollDir = () => {
			const scrollPos = ref.scrollTop;

			if (Math.abs(scrollPos - lastScrollPos) < threshold) {
				ticking = false;
				return;
			}
			setScrollPos(scrollPos);
			setScrollDir(scrollPos > lastScrollPos ? "down" : "up");
			lastScrollPos = scrollPos > 0 ? scrollPos : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		ref.addEventListener("scroll", onScroll);

		return () => ref.removeEventListener("scroll", onScroll);
	}, [scrollDir, ref]);

	return { scrollDir, scrollPos };
};

export default useScrollDirection;
