import { motion } from "framer-motion";

const socials = [
	{
		name: "GitHub",
		link: "",
		image: "",
	},
	{
		name: "Twitter",
		link: "",
		image: "",
	},
	{
		name: "YouTube",
		link: "",
		image: "",
	},
	{
		name: "Discord",
		link: "",
		image: "",
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
			type: "tween",
			duration: 0.35,
			ease: "easeOut",
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
			className="absolute bottom-0 h-14 w-full flex bg-neutral-800 justify-between">
			{/* Icons */}
			{socials.map((social) => (
				<motion.li
					key={social.name}
					className="w-14 h-14 flex items-center justify-center"
					variants={item}>
					<img src={social.image} alt={social.name} className="w-8 h-8" />
				</motion.li>
			))}
		</motion.ul>
	);
};

export default Socials;
