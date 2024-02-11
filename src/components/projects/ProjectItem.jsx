import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import Tilt from "react-parallax-tilt";
import SelectedItem from "./SelectedItem";
import ItemThumbnail from "./ItemThumbnail";
import { forwardRef } from "react";

const ProjectItem = forwardRef(function ProjectItem(
	{ item, current, parsedUrl, index, lastItem, variant, isMobile },
	ref
) {
	const selected = current === parsedUrl;

	return (
		<motion.li
			ref={ref}
			layout
			variants={variant}
			transition={{ layout: { duration: 0.3, type: "tween", ease: "easeInOut" } }}
			style={!lastItem && !isMobile && selected && { gridRowStart: (index + 1) / 2 }} // Make right side items span above
			className={cn(selected && "tablet:col-span-2")} // Selected items span both columns
		>
			<Tilt
				perspective={800}
				transitionSpeed={2400}
				tiltMaxAngleX={selected ? 4 : 8}
				tiltMaxAngleY={selected ? 2 : 6}
				tiltReverse={selected}>
				<Link to={!selected && `/project/${parsedUrl}`} draggable={false}>
					{/* Card container */}
					<div
						className={cn(
							"relative group flex flex-col tablet:flex-row items-center justify-center bg-primary bg-opacity-50 backdrop-blur-md h-32 rounded-xl overflow-hidden gap-3",
							selected && "h-full tablet:h-80 py-4 px-2 tablet:px-6 tablet:py-4"
						)}>
						{/* Content */}
						<AnimatePresence>
							{selected ? (
								<SelectedItem key={item.title + "-selected"} item={item} isMobile={isMobile} />
							) : (
								<ItemThumbnail key={item.title + "-thumbnail"} item={item} />
							)}
						</AnimatePresence>
						{/* Background image */}
						<motion.img
							src={item.thumbnail}
							alt={`${item.title} image`}
							className={cn(
								"absolute w-full h-full object-fill blur-sm duration-1000 tablet:duration-500 z-0",
								selected
									? "opacity-0 tablet:opacity-10 blur-md"
									: "opacity-20 group-hover:opacity-30 group-hover:blur-[2px]"
							)}
						/>
					</div>
				</Link>
			</Tilt>
		</motion.li>
	);
});

export default ProjectItem;
