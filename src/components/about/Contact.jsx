import Socials from "../Socials";
import socials from "../../configs/socials.json";
import { motion } from "framer-motion";

const container = {
	visible: { transition: { delayChildren: 0.15 } },
	hidden: {},
};

const item = {
	visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 44, damping: 18 } },
	hidden: { y: 14, opacity: 0 },
	exit: { y: 0, opacity: 0, transition: { duration: 0 } },
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
