import { motion } from "framer-motion";
import TechIcons from "./TechIcons";

// Animation variants
const container = {
	visible: { transition: { delayChildren: 0.16, staggerChildren: 0.2 } },
	hidden: {},
	exit: {},
};

const itemVariant = {
	visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 15 } },
	hidden: { y: 3, opacity: 0 },
	exit: { opacity: 0, transition: { duration: 0 } },
};

const ItemThumbnail = ({ item }) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={container}
			className="absolute w-full flex flex-col justify-center items-center p-5 z-10">
			{/* Title */}
			<motion.h1
				variants={itemVariant}
				className="font-semibold text-lg group-hover:-translate-y-2 group-hover:text-transparent duration-300">
				{item.title}
			</motion.h1>
			{/* Year and Tech icons */}
			<motion.div
				variants={{ ...container, visible: { transition: { staggerChildren: 0.1 } } }}
				className="flex items-center gap-2 text-sm opacity-60 group-hover:opacity-0 group-hover:translate-y-2 duration-300 [text-shadow:_0_2px_3px_rgb(0_0_0_/_50%)]">
				<motion.h2 variants={itemVariant}>{item.year}</motion.h2>
				<TechIcons items={item.tech} variant={itemVariant} />
			</motion.div>
		</motion.div>
	);
};

export default ItemThumbnail;
