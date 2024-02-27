import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
	exit: (isMobile) => ({
		x: isMobile ? 0 : -220,
		y: isMobile ? 10 : 0,
		scale: 0.55,
		opacity: 0,
		transition: {
			x: { type: "tween", duration: 0.6, ease: "easeOut" },
			opacity: { duration: 0.22, ease: "easeOut" },
		},
	}),
};

const image = {
	visible: { x: 0 },
	hidden: (direction) => ({ x: 230 * direction }),
	exit: (direction) => ({ x: 230 * (direction * -1) }),
};

const ImageCarousel = ({ images, isMobile }) => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	const handleNewCurrent = ({ direction, index }) => {
		let newValue;

		// Calculate new index value
		if (index >= 0) newValue = index;
		else {
			if (direction === "next") newValue = (current + 1) % images.length;
			else newValue = (current - 1 + images.length) % images.length;
		}

		console.log(newValue);

		// Calculate direction and set it
		if (newValue > current) {
			if (current === 0 && newValue === images.length - 1) setDirection(-1);
			else setDirection(1);
		} else {
			if (current === images.length - 1 && newValue === 0) setDirection(1);
			else setDirection(-1);
		}

		// Set new current value
		setCurrent(newValue);
	};

	return (
		<motion.div
			layout
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={container}
			custom={isMobile}
			className="relative group/images w-full h-full z-10 overflow-hidden">
			{/* Navigation */}
			<div className="absolute opacity-25 group-hover/images:opacity-100 duration-300 p-2 bottom-0 w-full flex justify-between items-center z-10">
				<CarouselButton handleNewCurrent={handleNewCurrent} direction="prev" />
				<CarouselCircles images={images} current={current} handleNewCurrent={handleNewCurrent} />
				<CarouselButton handleNewCurrent={handleNewCurrent} direction="next" />
			</div>

			{/* Images */}
			<AnimatePresence initial={false} mode="popLayout" custom={direction}>
				<motion.img
					key={current}
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={image}
					custom={direction}
					transition={{ duration: 0.3, ease: "linear" }}
					src={images[current]}
					alt={`Project screenshot #${current + 1}`}
					draggable={false}
					className="w-full h-full object-cover"
				/>
			</AnimatePresence>
		</motion.div>
	);
};

export default ImageCarousel;
