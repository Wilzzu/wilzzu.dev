import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CarouselButton from "./CarouselButton";
import CarouselCircles from "./CarouselCircles";

// Animation variants
const container = {
	visible: {
		y: 0,
		opacity: 1,
		borderRadius: "7%",
		transition: {
			y: { type: "spring", stiffness: 44, damping: 14 },
			opacity: { duration: 1, delay: 0.14 },
		},
	},
	hidden: { y: 100, opacity: 0 },
	exit: ({ isMobile, performanceMode }) => ({
		x: isMobile ? 0 : -220,
		y: isMobile ? 10 : 0,
		scale: 0.55,
		opacity: 0,
		transition: {
			x: { type: "tween", duration: 0.6, ease: "easeOut" },
			opacity: { duration: performanceMode ? 0 : 0.22, ease: "easeOut" },
		},
	}),
};

const ImageCarousel = ({ images, isMobile, performanceMode }) => {
	const [current, setCurrent] = useState(0);
	const hovering = useRef(false);

	// Calculate new index value
	const handleNewCurrent = ({ direction, index }) => {
		if (index >= 0) return setCurrent(index);
		if (direction === "next") return setCurrent((prev) => (prev + 1) % images.length);
		return setCurrent((prev) => (prev - 1 + images.length) % images.length);
	};

	// Handle swipe gestures
	const handlePanEnd = (_, info) => {
		if (!isMobile) return;
		if (info.offset.x > 5) handleNewCurrent({ direction: "prev" });
		else if (info.offset.x < -5) handleNewCurrent({ direction: "next" });
	};

	// Scroll through images automatically
	useEffect(() => {
		const interval = setInterval(() => {
			if (hovering.current) return;
			handleNewCurrent({ direction: "next" });
		}, 5000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current]);

	return (
		<motion.div
			layout
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={container}
			custom={{ isMobile, performanceMode }}
			onMouseEnter={() => (hovering.current = true)}
			onMouseLeave={() => (hovering.current = false)}
			onTouchStart={() => (hovering.current = true)}
			onTouchEnd={() => (hovering.current = false)}
			onPanEnd={handlePanEnd}
			className="relative group/images w-full h-full z-10 overflow-hidden">
			{/* Navigation */}
			<div className="absolute opacity-80 tablet:opacity-25 group-hover/images:opacity-100 duration-300 p-2 bottom-0 w-full flex justify-between items-center z-10">
				<CarouselButton handleNewCurrent={handleNewCurrent} direction="prev" />
				<CarouselCircles images={images} current={current} handleNewCurrent={handleNewCurrent} />
				<CarouselButton handleNewCurrent={handleNewCurrent} direction="next" />
			</div>
			{/* Images */}
			<div
				style={{ transform: `translateX(${current * -100}%)` }}
				className="flex duration-700 ease-in-out">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Project screenshot #${index + 1}`}
						draggable={false}
						className="w-80 h-full aspect-square object-cover opacity-95" // Images should be 320x320
					/>
				))}
			</div>
		</motion.div>
	);
};

export default ImageCarousel;
