import {
	SiReact,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiRedux,
	SiNodedotjs,
	SiOpenai,
	SiSupabase,
	SiUnity,
	SiCsharp,
	SiDiscord,
	SiFirebase,
} from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { PiFileHtmlBold, PiFileCssBold } from "react-icons/pi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";

// Remap icon names to actual icons
const remapIcons = {
	React: <SiReact className="w-4 h-4" />,
	"Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
	"Framer Motion": <TbBrandFramerMotion className="w-4 h-4" />,
	MongoDB: <SiMongodb className="w-2 h-4 scale-[1.8]" />,
	Express: <SiExpress className="w-4 h-4 scale-110" />,
	Redux: <SiRedux className="w-4 h-4" />,
	"Node.js": <SiNodedotjs className="w-4 h-4" />,
	OpenAI: <SiOpenai className="w-4 h-4" />,
	Supabase: <SiSupabase className="w-4 h-4" />,
	Electron: <IoLogoElectron className="w-4 h-4" />,
	HTML: <PiFileHtmlBold className="w-4 h-4" />,
	CSS: <PiFileCssBold className="w-4 h-4" />,
	JavaScript: <BiLogoJavascript className="w-4 h-4" />,
	TypeScript: <BiLogoTypescript className="w-4 h-4" />,
	Unity: <SiUnity className="w-4 h-4" />,
	"C#": <SiCsharp className="w-4 h-4" />,
	"Discord.js": <SiDiscord className="w-4 h-4" />,
	Firebase: <SiFirebase className="w-4 h-4" />,
};

const TechIcons = ({ items, variant, performanceMode = false, badge = false }) => {
	return (
		<>
			{items.map((item) => (
				<motion.span
					variants={variant}
					custom={performanceMode}
					className={
						badge
							? "flex justify-center h-5 tablet:h-6 px-2 text-[0.64rem] tablet:text-[0.7rem] rounded-md gap-2 items-center bg-gradient-to-tr from-primary to-secondary text-nowrap"
							: "drop-shadow-icon"
					}
					key={item}>
					{/* Icon */}
					{remapIcons[item]}
					{/* Name */}
					{badge && item}
				</motion.span>
			))}
		</>
	);
};

export default TechIcons;
