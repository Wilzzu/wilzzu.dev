const GrainAndMask = () => {
	return (
		<>
			{/* Grain */}
			<div className="w-full h-full bg-[url('./src/assets/grain.svg')] bg-repeat bg-fixed animate-grain absolute" />
			{/* Smooth radial edges */}
			<div className="w-full h-full bg-gradient-radial from-transparent via-primary to-50% to-background absolute" />
		</>
	);
};

export default GrainAndMask;
