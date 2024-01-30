import { motion } from "framer-motion";

const SelectedItem = ({ item }) => {
	return (
		<>
			<motion.img
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 7, opacity: 0 }}
				transition={{
					y: { duration: 0.8, type: "tween", ease: "easeInOut", delay: 0.2 },
					opacity: { duration: 0.8, delay: 0.2 },
				}}
				src={item.image}
				alt={`${item.title} image`}
				className="w-1/2 h-full rounded-3xl z-10"
			/>
			<div className="w-full h-full bg-gray-800 z-10">
				<h1 className="">{item.title}</h1>
			</div>
		</>
	);
};

export default SelectedItem;
