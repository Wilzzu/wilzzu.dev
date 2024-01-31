import { motion } from "framer-motion";

// Animation variants
const container = {
	visible: {
		transition: {
			delayChildren: 0.16,
			staggerChildren: 0.2,
		},
	},
	hidden: {},
	exit: {},
};

const text = {
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 50, damping: 15 },
	},
	hidden: {
		y: 3,
		opacity: 0,
	},
	exit: { opacity: 0, transition: { duration: 0 } },
};

const ItemThumbnail = ({ item }) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={container}
			className="absolute w-full flex flex-col justify-center p-4 z-10">
			{/* Title */}
			<motion.h1 variants={text} className="font-semibold text-lg">
				{item.title}
			</motion.h1>
			{/* Year */}
			<motion.h2 variants={text} className="text-sm text-neutral-400">
				{item.year}
			</motion.h2>
		</motion.div>
	);
};

export default ItemThumbnail;
