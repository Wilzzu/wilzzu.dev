import { cn } from "../../../../lib/utils";

const CarouselCircles = ({ images, current, handleNewCurrent }) => {
	const handleClick = (e, index) => {
		e.stopPropagation();
		e.preventDefault();
		handleNewCurrent({ index });
	};

	return (
		<div className="w-full flex justify-center">
			{images.map((_, i) => (
				// Button wrapper for making it easier to click on the circles
				<button
					key={i}
					onClick={(e) => handleClick(e, i)}
					className="group/nav w-8 h-8 flex items-center justify-center">
					{/* Circle */}
					<div
						className={cn(
							"w-2 h-2 rounded-full outline outline-1 outline-transparent bg-secondary bg-opacity-40 group-hover/nav:bg-opacity-80 group-hover/nav:bg-white group-hover/nav:outline-gray-400 duration-300",
							current === i && "bg-opacity-100 bg-white outline-gray-400"
						)}
					/>
				</button>
			))}
		</div>
	);
};

export default CarouselCircles;
