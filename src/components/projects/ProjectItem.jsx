import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const ProjectItem = ({ item, current }) => {
	const selected = current === parseUrl(item.title);

	return (
		<motion.li key={item.title} variants={itemVariant}>
			<Link to={!selected && `/project/${parseUrl(item.title)}`}>
				<div className="bg-secondary h-32 p-6 rounded-xl">{item.title}</div>
			</Link>
		</motion.li>
	);
};

export default ProjectItem;
