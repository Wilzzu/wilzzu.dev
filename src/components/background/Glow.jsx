import { cn } from "../../../lib/utils";
import GrainAndMask from "./GrainAndMask";

const Glow = ({ style }) => {
	return (
		<div
			className={cn(
				"w-[400px] h-[400px] fixed -z-[2] bg-gradient-radial from-[#FFA700] via-transparent to-50% to-transparent",
				style
			)}>
			<GrainAndMask />
		</div>
	);
};

export default Glow;
