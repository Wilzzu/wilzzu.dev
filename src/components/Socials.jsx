import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiYoutube, FiMail } from "react-icons/fi";
import { TbBrandSteam } from "react-icons/tb";
import { cn } from "../../lib/utils";

// Animation variants
const container = {
	visible: { transition: { staggerChildren: 0.16 } },
	hidden: {},
};

const item = {
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

// Remap icon names to actual icons
const icons = {
	github: (
		<FiGithub
			size={48}
			strokeWidth={1.2}
			className="opacity-40 group-hover:opacity-80 duration-500"
		/>
	),
	twitter: (
		<FiTwitter
			size={48}
			strokeWidth={1.2}
			className="opacity-40 group-hover:opacity-80 duration-500"
		/>
	),
	youtube: (
		<FiYoutube
			size={52}
			strokeWidth={1.2}
			className="opacity-40 group-hover:opacity-80 duration-500"
		/>
	),
	steam: (
		<TbBrandSteam
			size={52}
			strokeWidth={1.2}
			className="opacity-40 group-hover:opacity-80 duration-500 social-stroke"
		/>
	),
	email: (
		<FiMail
			size={52}
			strokeWidth={1.2}
			className="opacity-40 group-hover:opacity-80 duration-500"
		/>
	),
};

const Socials = ({ socials, direction, style = null }) => {
	return (
		<motion.ul
			initial="hidden"
			animate="visible"
			variants={container}
			className={cn("tablet:h-14 px-10 tablet:px-0 w-full flex justify-between", style)}>
			{socials.map((social) => (
				<motion.li
					key={social.name}
					className="group relative w-10 h-10 tablet:w-14 tablet:h-14 flex flex-col items-center"
					variants={item}
					custom={direction}>
					{/* Social icon */}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={social.link}
						className="h-full w-full flex items-center justify-center z-10">
						{icons[social.icon]}
						{/* Tooltip */}
						<span className="absolute -bottom-3 scale-75 px-3 py-2 bg-primary rounded-lg text-sm shadow-xl opacity-0 group-hover:opacity-100 group-hover:-bottom-9 group-hover:scale-100 duration-300 z-0">
							{social.name}
						</span>
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default Socials;
