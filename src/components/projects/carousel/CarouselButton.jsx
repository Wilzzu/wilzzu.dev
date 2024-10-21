import { IoIosArrowForward } from "react-icons/io";
import { cn } from "../../../../lib/utils";

const CarouselButton = ({ handleNewCurrent, direction }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		handleNewCurrent({ direction });
	};

	return (
		<button
			className="hidden tablet:block bg-primary bg-opacity-60 rounded-full p-1 hover:bg-opacity-90 duration-300"
			onClick={(e) => handleClick(e)}>
			<IoIosArrowForward className={cn("w-6 h-6", direction === "prev" && "rotate-180")} />
		</button>
	);
};

export default CarouselButton;
