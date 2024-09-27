import icons from "../../configs/icons.json";
import { motion } from "framer-motion";
import IconLinks from "../IconLinks";

const container = {
	visible: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
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
	exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const Contact = () => {
	return (
		<motion.div variants={container} className="flex flex-col-reverse">
			<motion.p variants={item} className="text-xs tablet:text-sm text-neutral-400 text-center">
				{"Contact me on Twitter/X or via email."} <br />{" "}
				<span className="text-xs">{"(Email: wilzzudev@gmail.com)"}</span>
			</motion.p>
			<motion.div variants={item}>
				<IconLinks icons={icons.contact} direction={20} style={"justify-center gap-8 scale-90"} />
			</motion.div>
		</motion.div>
	);
};

export default Contact;
