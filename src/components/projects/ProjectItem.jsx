import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import Tilt from "react-parallax-tilt";
import SelectedItem from "./SelectedItem";
import ItemThumbnail from "./ItemThumbnail";
import { forwardRef, memo, useMemo } from "react";

// Memoize SelectedItem and ItemThumbnail
const MemoizedSelectedItem = memo(SelectedItem);
const MemoizedItemThumbnail = memo(ItemThumbnail);

const ProjectItem = forwardRef(function ProjectItem(
	{ item, current, parsedUrl, index, lastItem, variant, isMobile, performanceMode },
	ref
) {
	const selected = useMemo(() => current === parsedUrl, [current, parsedUrl]);

	return (
		<motion.li
			ref={ref}
			layout
			variants={variant}
			transition={{
				layout: { duration: performanceMode ? 0 : 0.3, type: "tween", ease: "easeInOut" },
			}}
			style={!lastItem && !isMobile && selected && { gridRowStart: (index + 1) / 2 }} // Make right side items span above
			className={cn(selected && "tablet:col-span-2")} // Selected items span both columns
		>
			<Tilt
				perspective={800}
				transitionSpeed={2400}
				tiltMaxAngleX={!selected && !performanceMode && 8}
				tiltMaxAngleY={!selected && !performanceMode && 6}
				tiltReverse={selected}>
				<Link to={!selected && `/project/${parsedUrl}`} draggable={false}>
					{/* Card container */}
					<div
						className={cn(
							"relative group flex flex-col tablet:flex-row items-center justify-center bg-primary bg-opacity-50 backdrop-blur-md h-32 rounded-xl overflow-hidden gap-3",
							selected && "h-full tablet:h-80 py-4 px-2 tablet:px-6 tablet:py-4",
							performanceMode && "backdrop-blur-none bg-opacity-100 bg-[#151515]"
						)}>
						{/* Content */}
						<AnimatePresence>
							{selected ? (
								<MemoizedSelectedItem
									key={item.title + "-selected"}
									item={item}
									isMobile={isMobile}
									performanceMode={performanceMode}
								/>
							) : (
								<MemoizedItemThumbnail
									key={item.title + "-thumbnail"}
									item={item}
									performanceMode={performanceMode}
								/>
							)}
						</AnimatePresence>
						{/* Background image, should be 368 x 128 */}
						<motion.img
							src={item.thumbnail}
							alt={`${item.title} image`}
							className={cn(
								"absolute w-full h-full object-fill blur-sm duration-1000 tablet:duration-500 z-0",
								selected
									? performanceMode
										? "opacity-0"
										: "opacity-0 tablet:opacity-10 blur-md"
									: performanceMode
									? "opacity-10 tablet:group-hover:opacity-35"
									: "opacity-20 tablet:group-hover:opacity-50 tablet:group-hover:blur-[2px]",
								performanceMode && "blur-none duration-0 tablet:duration-0"
							)}
						/>
					</div>
				</Link>
			</Tilt>
		</motion.li>
	);
});

const MemoizedProjectItem = memo(ProjectItem);
export default MemoizedProjectItem;
