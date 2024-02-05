import Socials from "../Socials";
import socials from "../../configs/socials.json";
import { motion } from "framer-motion";

const container = {
	visible: { transition: { delayChildren: 0.2 } },
	hidden: {},
	exit: {},
};

const item = {
	visible: {
		y: 0,
		rotate: 0.01, // To make the animation render smoother
		opacity: 1,
		transition: {
			duration: 1.8,
			ease: "easeOut",
			opacity: { duration: 1.4, ease: "easeInOut" },
		},
	},
	hidden: { y: 20, opacity: 0 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const Contact = () => {
	return (
		<motion.div variants={container}>
			<motion.div variants={item}>
				<Socials socials={socials.contact} style={"justify-center gap-8 scale-90"} direction={20} />
			</motion.div>
			<motion.p variants={item} className="text-sm text-neutral-400">
				{"Contact me on Twitter or via email."}
			</motion.p>
		</motion.div>
	);
};

export default Contact;
