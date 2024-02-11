import { useEffect, useState } from "react";

const useCheckMobile = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowChange);
		return () => window.removeEventListener("resize", handleWindowChange);
	}, []);

	return width < 840;
};

export default useCheckMobile;
