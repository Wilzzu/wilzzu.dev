import { FaCode } from "react-icons/fa6";
import { PiTestTubeDuotone } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { useRef } from "react";

// Remap icon names to actual icons
const icon = {
	code: <FaCode />,
	live: <FiExternalLink />,
	demo: <PiTestTubeDuotone />,
};

const LinkButton = ({ link }) => {
	const buttonRef = useRef(null);

	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		buttonRef?.current?.blur();
		window.open(link.url, "_blank");
	};

	return (
		<button
			ref={buttonRef}
			onClick={handleClick}
			onAuxClick={handleClick}
			className="flex items-center justify-center h-11 px-5 rounded-full text-sm tablet:text-base gap-2 tablet:gap-3 border-2 border-neutral-200 hover:bg-[#0000003b] hover:border-orange-300 focus:border-orange-300 outline-none hover:scale-105 duration-300">
			{icon[link.type]}
			<p>{link.type}</p>
		</button>
	);
};

export default LinkButton;
