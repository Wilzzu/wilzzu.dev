import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import Tilt from "react-parallax-tilt";

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
	console.log(item);

	return (
		<motion.li
			layout
			variants={itemVariant}
			transition={{ layout: { duration: 0.3, type: "tween", ease: "easeInOut" } }}
			style={!lastItem && selected && { gridRowStart: index / 2 }} // Make right side items span above
			className={cn(selected && "col-span-2")} // Selected items span both columns
		>
			<Tilt perspective={800} transitionSpeed={2200} tiltMaxAngleX={4} tiltMaxAngleY={10}>
				<Link to={!selected && `/project/${parseUrl(item.title)}`}>
					<div
						className={cn(
							"relative group bg-primary bg-opacity-50 backdrop-blur-md h-32 rounded-xl overflow-hidden",
							selected && "h-72"
						)}>
						<img
							src={item.image}
							alt={`${item.title} image`}
							className={cn(
								"absolute w-full h-full object-cover blur-sm opacity-50 duration-300",
								selected && "opacity-100 blur-none w-[30%] animate-move-image",
								!selected && "group-hover:opacity-70 group-hover:blur-none"
							)}
						/>
						<motion.p layout="position">{item.title}</motion.p>
					</div>
				</Link>
			</Tilt>
		</motion.li>
	);
};

export default ProjectItem;
