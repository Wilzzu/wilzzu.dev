import { motion } from "framer-motion";
import NavItem from "./NavItem";

const list = {
	visible: {
		transition: {
			delayChildren: 1.6,
			staggerChildren: 0.4,
		},
	},
	hidden: {},
};

const Navigation = ({ location, projectName }) => {
	return (
		<nav className="w-full">
			<motion.ul
				initial="hidden"
				animate="visible"
				variants={list}
				className="w-full flex gap-10 items-center pt-2 tablet:pt-0 justify-center">
				<NavItem name="Projects" url="/" current={location} projectName={projectName} />
				<NavItem name="About Me" url="/about/" current={location} />
			</motion.ul>
		</nav>
	);
};

export default Navigation;
