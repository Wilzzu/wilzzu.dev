import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const item = {
	visible: {
		opacity: 1,
		y: 0,
		rotation: 0.01,
		transition: { duration: 0.8, ease: "easeOut" },
	},
	hidden: { opacity: 0, y: 14 },
};

const NavItem = ({ name, url, current, projectName = false }) => {
	const selected = url === current.pathname;

	return (
		<motion.li variants={item}>
			<Link to={url} className="relative">
				<h1
					className={cn(
						"duration-300 opacity-80 hover:opacity-100",
						(selected || projectName) &&
							"opacity-100 drop-shadow-[0px_0px_8px_rgba(255,255,255,0.2)]"
					)}>
					{name}
				</h1>
				{(selected || projectName) && (
					<motion.div
						layoutId="underline"
						transition={{ type: "spring", stiffness: 100, damping: 22 }}
						className="absolute bottom-0 left-0 h-[2px] w-full bg-neutral-200 drop-shadow-[0px_0px_8px_rgba(255,255,255,0.5)]"
					/>
				)}
			</Link>
		</motion.li>
	);
};

export default NavItem;
