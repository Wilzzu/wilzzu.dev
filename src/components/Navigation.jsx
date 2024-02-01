import { motion } from "framer-motion";
import NavItem from "./NavItem";

const Navigation = ({ location, projectName }) => {
	return (
		<motion.nav
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
			className="w-full">
			<ul className="w-full flex gap-10 items-center justify-center">
				<NavItem name="Projects" url="/" current={location} projectName={projectName} />
				<NavItem name="About Me" url="/about/" current={location} />
			</ul>
		</motion.nav>
	);
};

export default Navigation;
