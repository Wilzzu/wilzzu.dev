import { motion } from "framer-motion";

const Navigation = () => {
	return (
		<motion.nav
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
			className="flex gap-10 items-center justify-center">
			<p>Projects</p>
			<p>About Me</p>
		</motion.nav>
	);
};

export default Navigation;
