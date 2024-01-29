import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

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
			style={!lastItem && selected && { gridRowStart: index / 2 }} // Make right side items span above
			className={cn(selected && "col-span-2")} // Selected items span both columns
		>
			<Link to={!selected && `/project/${parseUrl(item.title)}`}>
				<div className={cn("bg-secondary h-32 p-6 rounded-xl", selected && "h-72")}>
					{item.title}
				</div>
			</Link>
		</motion.li>
	);
};

export default ProjectItem;
