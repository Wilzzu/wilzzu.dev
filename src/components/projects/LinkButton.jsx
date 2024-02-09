import { FaCode } from "react-icons/fa6";
import { PiTestTubeDuotone } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";

// Remap icon names to actual icons
const icon = {
	code: <FaCode />,
	live: <FiExternalLink />,
	demo: <PiTestTubeDuotone />,
};

const LinkButton = ({ link }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		window.open(link.url, "_blank");
	};

	return (
		<button
			onClick={handleClick}
			onAuxClick={handleClick}
			className="flex items-center justify-center border-2 border-neutral-200 hover:bg-[#0000003b] hover:border-orange-300 focus:border-orange-300 outline-none h-11 px-5 rounded-full gap-3 hover:scale-105 duration-300">
			{icon[link.type]}
			<p>{link.type}</p>
		</button>
	);
};

export default LinkButton;
