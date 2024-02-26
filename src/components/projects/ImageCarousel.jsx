import { motion } from "framer-motion";

const ImageCarousel = ({ images, isMobile }) => {
	return (
		<div className="mt-3 tablet:mt-0 w-[10rem] h-[10rem] tablet:w-[14.5rem] tablet:h-[14.5rem] shrink-0">
			<motion.div
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={imageVariant}
				custom={isMobile}
				className="w-full h-full z-10"
			/>
		</div>
	);
};

export default ImageCarousel;
