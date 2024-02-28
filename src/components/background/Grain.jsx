const Grain = () => {
	return (
		<div
			style={{
				maskImage:
					"radial-gradient(circle, black 0%, #000000CC 10%, #00000033 25%, transparent 40%)",
			}}
			className="w-full h-full bg-[url('./src/assets/grain.svg')] bg-repeat bg-fixed animate-grain absolute opacity-80"
		/>
	);
};

export default Grain;
