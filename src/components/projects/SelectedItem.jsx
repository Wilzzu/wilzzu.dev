import { motion } from "framer-motion";
import LinkButton from "./LinkButton";

// Animation variants
const imageVariant = {
	visible: {
		y: 0,
		opacity: 1,
		borderRadius: "8%",
		transition: {
			y: { type: "spring", stiffness: 44, damping: 14 },
			// duration: 0.8, type: "tween", ease: "easeOut", delay: 0.2
			// type: "spring", stiffness: 32, damping: 14
			opacity: { duration: 1, delay: 0.14 },
			// duration: 0.8, delay: 0.2
			// duration: 1, delay: 0.14
		},
	},
	hidden: {
		y: 100,
		opacity: 0,
	},
	exit: {
		x: -200,
		scale: 0.64,
		opacity: 0,
		transition: {
			x: { type: "tween", duration: 0.6, ease: "easeOut" },
			opacity: { duration: 0.22, ease: "easeOut" },
		},
	},
};

const containerVariant = {
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.12,
		},
	},
	hidden: { opacity: 0 },
	exit: {},
};

const itemVariant = {
	visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 52, damping: 14 } },
	hidden: { y: 10, opacity: 0 },
	exit: { y: 0, opacity: 0, transition: { duration: 0 } },
};

const SelectedItem = ({ item }) => {
	return (
		<>
			{/* Image */}
			<motion.img
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={imageVariant}
				src={item.image}
				alt={`${item.title} image`}
				className="w-1/2 h-full z-10"
			/>
			{/* Content container */}
			<motion.div
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={containerVariant}
				className="w-full h-full flex flex-col items-center justify-between p-2 py-4 z-10 drop-shadow-md gap-2">
				{/* Title */}
				<div className="w-full flex justify-center items-center gap-2">
					<motion.h1 variants={itemVariant} className="font-semibold text-2xl">
						{item.title}
					</motion.h1>
					<motion.p variants={itemVariant} className="font-light text-sm mt-[0.16rem]">
						({item.year})
					</motion.p>
				</div>
				{/* Description */}
				<div className="flex flex-col gap-1 text-center px-4">
					{/* Add line breaks */}
					{item.description.split("<br />").map((line, i) => (
						<motion.p variants={itemVariant} key={i}>
							{line}
						</motion.p>
					))}
				</div>
				{/* Links */}
				<motion.div
					variants={itemVariant}
					className="w-full flex justify-center items-center gap-5">
					{item?.links.map((link) => (
						<LinkButton key={`${item.title}-${link.type}`} link={link} />
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default SelectedItem;
