import { motion } from "framer-motion";

// Animation variants
const text = {
	visible: {
		y: 0,
		opacity: 1,
	},
	hidden: {
		y: 3,
		opacity: 0,
		transition: {
			y: { type: "tween", duration: 0.2, ease: "easeOut" },
			opacity: { duration: 0.2, ease: "easeInOut" },
		},
	},
	exit: { opacity: 0, transition: { duration: 0 } },
};

// TODO: Faster visible text animation
const ItemThumbnail = ({ item }) => {
	return (
		<>
			<div className="absolute w-full flex flex-col justify-center p-4 z-10">
				<motion.h1
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{ duration: 0.8, type: "tween", ease: "easeInOut", delay: 0.2 }}
					variants={text}
					className="font-semibold text-lg">
					{item.title}
				</motion.h1>
				<motion.h2
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{ duration: 0.8, type: "tween", ease: "easeInOut", delay: 0.2 }}
					variants={text}
					className="text-sm text-neutral-400">
					{item.year}
				</motion.h2>
			</div>
		</>
	);
};

export default ItemThumbnail;
