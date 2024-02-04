import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Home />,
		children: [
			{
				path: "project/:projectName",
				element: <Projects />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
