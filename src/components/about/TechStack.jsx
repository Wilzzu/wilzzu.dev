import icons from "../../configs/icons.json";
import IconLinks from "../IconLinks";
import { motion } from "framer-motion";

const TechStack = ({ variants }) => {
	return (
		<motion.div variants={variants} className="w-full z-[1]">
			<motion.h2 className="text-white/50 mb-2">Technology Stack</motion.h2>
			<IconLinks
				icons={icons.tech}
				direction={20}
				style={"tablet:h-full h-full grid grid-cols-8 grid-flow-row gap-4 gap-y-2 px-0"}
				itemStyle={"w-8 h-8 tablet:w-10 tablet:h-10"}
				tooltipStyle={"text-xs -bottom-4 group-hover:-bottom-8"}
			/>
		</motion.div>
	);
};

export default TechStack;
