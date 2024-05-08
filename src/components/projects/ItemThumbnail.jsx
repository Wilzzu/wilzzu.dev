import { motion } from "framer-motion";
import TechIcons from "./TechIcons";
import { cn } from "../../../lib/utils";

// Animation variants
const container = {
	visible: { transition: { delayChildren: 0.16, staggerChildren: 0.2 } },
	hidden: {},
	exit: {},
};

const itemVariant = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.5, ease: "easeInOut" },
			opacity: { duration: 0.8, ease: "easeInOut" },
		},
	},
	hidden: { y: 3, opacity: 0 },
	exit: { opacity: 0, transition: { duration: 0 } },
};

const ItemThumbnail = ({ item }) => {
	const calculateTitleScale = (title) => {
		if (title.length <= 4) return "tablet:group-hover:scale-[3.2]";
		if (title.length <= 7) return "tablet:group-hover:scale-[2.6]";
		if (title.length <= 12) return "tablet:group-hover:scale-[2.3]";
		if (title.length <= 15) return "tablet:group-hover:scale-[2]";
		if (title.length <= 18) return "tablet:group-hover:scale-[1.8]";
		return "tablet:group-hover:scale-[1.6]";
	};

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
				className={cn(
					"font-semibold text-lg duration-300",
					"tablet:group-hover:translate-y-3 tablet:group-hover:[text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)] tablet:group-hover:text-neutral-100",
					"tablet:group-active:![text-shadow:none] tablet:group-active:!text-transparent",
					calculateTitleScale(item.title)
				)}>
				{item.title}
			</motion.h1>
			{/* Year and Tech icons */}
			<motion.div
				variants={{ ...container, visible: { transition: { staggerChildren: 0.1 } } }}
				className="flex items-center gap-2 text-sm opacity-60 tablet:group-hover:opacity-0 tablet:group-hover:translate-y-2 duration-300 [text-shadow:_0_2px_3px_rgb(0_0_0_/_50%)]">
				<motion.h2 variants={itemVariant}>{item.year}</motion.h2>
				<TechIcons items={item.tech} variant={itemVariant} />
			</motion.div>
		</motion.div>
	);
};

export default ItemThumbnail;
