import Tilt from "react-parallax-tilt";

const Logo = () => {
	return (
		<div className="w-1/5">
			<Tilt
				className="rounded-[2rem] w-full h-full aspect-square drop-shadow-lg bg-[url(./src/assets/LogoBG.png)] bg-cover bg-center flex items-center justify-center transform-style-3d perspective-1000"
				perspective={800}
				glareEnable={true}
				glareMaxOpacity={0.2}
				glareColor="#ffffff"
				glarePosition="bottom"
				glareBorderRadius="2rem"
				scale={1.02}
				gyroscope={true}>
				<img
					className="w-1/4 translate-z-40 transform-style-3d"
					src="./src/assets/LogoLetter.png"
					alt="Letter W logo"
				/>
			</Tilt>
		</div>
	);
};

export default Logo;
