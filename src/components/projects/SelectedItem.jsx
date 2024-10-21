import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import TechIcons from "./TechIcons";
import ImageCarousel from "./carousel/ImageCarousel";
import { cn } from "../../../lib/utils";

// Animation variants
const containerVariant = {
	visible: { transition: { delayChildren: 0.2, staggerChildren: 0.12 } },
	hidden: {},
	exit: {},
};

const itemVariant = {
	visible: {
		y: 0,
		opacity: 1,
		rotate: 0.01,
		transition: { type: "spring", stiffness: 52, damping: 14 },
	},
	hidden: { y: 10, opacity: 0 },
	exit: { y: 0, opacity: 0, transition: { duration: 0 } },
};

const SelectedItem = ({ item, isMobile, performanceMode }) => {
	return (
		<>
			{/* Image carousel */}
			<div className="mt-3 tablet:mt-0 w-[10rem] h-[10rem] tablet:w-[14.5rem] tablet:h-[14.5rem] shrink-0">
				<ImageCarousel images={item.images} isMobile={isMobile} performanceMode={performanceMode} />
			</div>
			{/* Content container */}
			<motion.div
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={containerVariant}
				className={cn(
					"w-full h-full overflow-hidden flex flex-col items-center justify-center gap-6 px-2 py-4 z-10 drop-shadow",
					performanceMode && "drop-shadow-none"
				)}>
				{/* Title and Badges */}
				<div className="w-full flex flex-col items-center gap-2 tablet:gap-1">
					{/* Name and Year */}
					<div className="flex items-center gap-2 tablet:-mt-1">
						<motion.h1 variants={itemVariant} className="font-semibold text-xl tablet:text-2xl">
							{item.title}
						</motion.h1>
						<motion.p variants={itemVariant} className="font-light text-sm mt-[0.16rem]">
							({item.year})
						</motion.p>
					</div>
					{/* Badges */}
					<motion.div
						variants={containerVariant}
						className="flex flex-wrap w-full items-center justify-center gap-2">
						<TechIcons items={item.tech} variant={itemVariant} badge={true} />
					</motion.div>
				</div>
				{/* Description */}
				<motion.p
					className="px-1 tablet:px-4 text-center text-sm tablet:text-[0.92rem] tablet:leading-normal"
					variants={itemVariant}>
					{item.description}
				</motion.p>

				{/* Links */}
				<motion.div
					variants={itemVariant}
					className="w-full flex justify-center items-center gap-4 tablet:gap-5">
					{item?.links.map((link) => (
						<LinkButton key={`${item.title}-${link.type}`} link={link} />
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default SelectedItem;
