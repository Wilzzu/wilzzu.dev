import { cn } from "../../../lib/utils";
import Grain from "./Grain";

const Glow = ({ style }) => {
	return (
		<div
			className={cn(
				"w-[400px] h-[400px] fixed -z-[2] bg-gradient-radial from-[#FFA700] via-transparent to-35% to-transparent",
				style
			)}>
			<Grain />
		</div>
	);
};

export default Glow;
