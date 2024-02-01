import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";

// Remap icon names to actual icons
const remapIcons = {
	React: <SiReact className="w-4 h-4" />,
	"Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
	MongoDB: <SiMongodb className="w-2 h-4 scale-[1.8]" />,
	Express: <SiExpress className="w-4 h-4 scale-110" />,
	Redux: <SiRedux className="w-4 h-4" />,
	"Node.js": <SiNodedotjs className="w-4 h-4" />,
};

const TechIcons = ({ items, variant, badge = false }) => {
	return (
		<>
			{items.map((item) => (
				<motion.span
					variants={variant}
					className={
						badge
							? "flex justify-center h-6 px-2 text-xs rounded-md gap-2 items-center bg-gradient-to-tr from-primary to-secondary text-nowrap"
							: "drop-shadow-icon"
					}
					key={item}>
					{remapIcons[item]}
					{badge && item}
				</motion.span>
			))}
		</>
	);
};

export default TechIcons;
