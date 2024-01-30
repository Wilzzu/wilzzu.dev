import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import Tilt from "react-parallax-tilt";
import SelectedItem from "./SelectedItem";
import ItemThumbnail from "./ItemThumbnail";

// Animation variants
const itemVariant = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			y: { type: "tween", duration: 0.5, ease: "easeOut" },
			opacity: { duration: 1, ease: "easeInOut" },
		},
	},
	hidden: {
		y: 50,
		opacity: 0,
	},
};

const parseUrl = (title) => {
	return title.replace(/\s+/g, "-").toLowerCase();
};

const ProjectItem = ({ item, current, index, lastItem }) => {
	const selected = current === parseUrl(item.title);

	return (
		<motion.li
			layout
			variants={itemVariant}
			transition={{ layout: { duration: 0.3, type: "tween", ease: "easeInOut" } }}
			style={!lastItem && selected && { gridRowStart: index / 2 }} // Make right side items span above
			className={cn(selected && "col-span-2")} // Selected items span both columns
		>
			<Tilt
				perspective={800}
				transitionSpeed={2400}
				tiltMaxAngleX={selected ? 4 : 8}
				tiltMaxAngleY={selected ? 2 : 6}>
				<Link to={!selected && `/project/${parseUrl(item.title)}`}>
					{/* Card container */}
					<div
						className={cn(
							"relative group flex items-center justify-center bg-primary bg-opacity-50 backdrop-blur-md h-32 rounded-xl overflow-hidden gap-3",
							selected && "h-72 p-4"
						)}>
						{/* Content */}
						<AnimatePresence>
							{selected ? (
								<SelectedItem key={item.title + "-selected"} item={item} />
							) : (
								<ItemThumbnail key={item.title + "-thumbnail"} item={item} />
							)}
						</AnimatePresence>
						{/* Background image */}
						<img
							src={item.thumbnail}
							alt={`${item.title} image`}
							className={cn(
								"absolute w-full h-full object-cover blur-sm duration-300 z-0",
								selected
									? "opacity-10 blur-md"
									: "opacity-20 group-hover:opacity-30 group-hover:blur-[2px]"
							)}
						/>
					</div>
				</Link>
			</Tilt>
		</motion.li>
	);
};

export default ProjectItem;
