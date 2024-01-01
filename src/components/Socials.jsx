import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";
import { TbBrandSteam } from "react-icons/tb";

const socials = [
	{
		name: "GitHub",
		link: "https://github.com/Wilzzu",
		image: (
			<FiGithub
				size={48}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500"
			/>
		),
	},
	{
		name: "Twitter",
		link: "https://twitter.com/Wilzzu",
		image: (
			<FiTwitter
				size={48}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500"
			/>
		),
	},
	{
		name: "YouTube",
		link: "https://www.youtube.com/@thewilzzu",
		image: (
			<FiYoutube
				size={52}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500"
			/>
		),
	},
	{
		name: "Steam",
		link: "https://steamcommunity.com/id/wilzzu/",
		image: (
			<TbBrandSteam
				size={52}
				strokeWidth={1.2}
				className="opacity-40 group-hover:opacity-80 duration-500 social-stroke"
			/>
		),
	},
];

// Animations
const container = {
	start: {
		transition: {
			staggerChildren: 0.12,
		},
	},
	hidden: {},
};

const item = {
	start: {
		y: 0,
		opacity: 1,
		transition: {
			y: { type: "tween", duration: 1, ease: "easeOut" },
			opacity: {
				duration: 2,
				ease: "easeInOut",
			},
		},
	},
	hidden: {
		y: -20,
		opacity: 0,
	},
};

const Socials = () => {
	return (
		<motion.ul
			initial="hidden"
			animate="start"
			variants={container}
			className="h-14 w-full flex justify-between">
			{/* Icons */}
			{socials.map((social) => (
				<motion.li
					key={social.name}
					className="group w-14 h-14 flex items-center justify-center"
					variants={item}>
					<a target="_blank" rel="noopener noreferrer" href={social.link}>
						{social.image}
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default Socials;
