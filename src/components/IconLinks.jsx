import { motion } from "framer-motion";
import { FiGithub, FiYoutube, FiMail } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandSteam } from "react-icons/tb";
import { cn } from "../../lib/utils";
import {
	SiReact,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiRedux,
	SiNodedotjs,
	SiOpenai,
	SiSupabase,
	SiDiscord,
	SiFirebase,
} from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { PiFileCssLight, PiFileHtmlLight } from "react-icons/pi";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";

// Animation variants
const containerVariants = {
	visible: { transition: { staggerChildren: 0.16 } },
	hidden: {},
};

const itemVariants = {
	visible: {
		y: 0,
		opacity: 1,
		rotate: 0.01, // To make the animation render smoother
		transition: {
			y: { type: "tween", duration: 1, ease: "easeOut" },
			opacity: { duration: 2, ease: "easeInOut" },
		},
	},
	hidden: (y) => ({ y: y, opacity: 0 }),
};

const iconStyle = "opacity-40 group-hover:opacity-80 duration-500";

// Remap icon names to actual icons
const iconsRemap = {
	github: <FiGithub size={48} strokeWidth={1.2} fill="#101010" className={iconStyle} />,
	twitter: <RiTwitterXLine size={48} className={iconStyle} />,
	youtube: <FiYoutube size={52} strokeWidth={1.2} fill="#101010" className={iconStyle} />,
	steam: (
		<TbBrandSteam
			size={52}
			strokeWidth={1.2}
			fill="#101010"
			className={cn(iconStyle, "social-stroke")}
		/>
	),
	email: <FiMail size={52} strokeWidth={1.2} fill="#101010" className={iconStyle} />,
	React: <SiReact size={36} className={iconStyle} />,
	"Tailwind CSS": <SiTailwindcss size={36} className={iconStyle} />,
	"Framer Motion": <TbBrandFramerMotion size={36} className={iconStyle} />,
	MongoDB: <SiMongodb size={36} className={iconStyle} />,
	Express: <SiExpress size={36} className={iconStyle} />,
	Redux: <SiRedux size={36} className={iconStyle} />,
	"Node.js": <SiNodedotjs size={36} className={iconStyle} />,
	OpenAI: <SiOpenai size={36} className={iconStyle} />,
	Supabase: <SiSupabase size={36} className={iconStyle} />,
	Electron: <IoLogoElectron size={36} className={iconStyle} />,
	HTML: <PiFileHtmlLight size={36} className={iconStyle} />,
	CSS: <PiFileCssLight size={36} className={iconStyle} />,
	JavaScript: <BiLogoJavascript size={40} className={iconStyle} />,
	TypeScript: <BiLogoTypescript size={40} className={iconStyle} />,
	"Discord.js": <SiDiscord size={36} className={iconStyle} />,
	Firebase: <SiFirebase size={36} className={iconStyle} />,
};

const IconLinks = ({ icons, direction, style = null, itemStyle = null, tooltipStyle = null }) => {
	return (
		<motion.ul
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className={cn("tablet:h-14 px-10 tablet:px-0 w-full flex justify-between", style)}>
			{icons.map((item, i) => (
				<motion.li
					key={item.name}
					style={{ zIndex: icons.length - i }}
					className={cn(
						"group relative w-10 h-10 tablet:w-14 tablet:h-14 flex flex-col items-center",
						itemStyle
					)}
					variants={itemVariants}
					custom={direction}>
					{/* Icon */}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={item.link}
						className="h-full w-full flex items-center justify-center z-10">
						{iconsRemap[item.icon]}
						{/* Tooltip */}
						<span
							className={cn(
								"absolute -bottom-5 scale-75 px-3 py-2 bg-primary rounded-lg text-sm shadow-xl opacity-0 group-hover:opacity-100 group-hover:-bottom-8 group-hover:scale-100 duration-300 z-0 text-nowrap pointer-events-none",
								tooltipStyle
							)}>
							{item.name}
						</span>
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default IconLinks;
