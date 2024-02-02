import Socials from "../Socials";
import socials from "../../configs/socials.json";

const Contact = () => {
	return (
		<div>
			<Socials socials={socials.contact} style={"justify-center gap-8 scale-90"} direction={20} />
			<p className="text-sm text-neutral-400">{"Contact me on Twitter or via email."}</p>
		</div>
	);
};

export default Contact;
