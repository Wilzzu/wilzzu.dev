import Contact from "./Contact";

const About = () => {
	return (
		// Card container
		<div className="flex flex-col h-full max-h-[37rem] bg-gradient-to-tr from-[#19191975] to-[#2A2A2A75]  backdrop-blur-md rounded-2xl gap-3 items-center justify-between py-10 px-20 text-center">
			{/* Title */}
			<h1 className="text-[1.76rem] font-semibold mt-1 text-neutral-200">{"Hi, I'm Wilzzu!"}</h1>

			{/* Content */}
			<p className="leading-relaxed text-[0.94rem] text-[#d6d6d6]">
				{
					"I'm a 24 year old student from Finland, who loves creating fun projects around the things I'm passionate about. With a background in graphic design, I focus on the design and try to make everything look as good as possible."
				}
				<br />
				<br />
				{
					'I\'m also a very "DYI" type of person, so instead of using pre-made designs or templates, I like to create everything from scratch to suit my preferences.'
				}
				<br />
				{
					"All the projects and designs are completely made by me, no tutorials or templates were used."
				}
				<br />
				<br />
				{
					"Besides programming, I enjoy playing video games, editing photos and videos, and tinkering with small electronic projects."
				}
				<br />
				<br /> {"Feel free to contact me, I'm always open to new adventures! :)"}
			</p>
			<Contact />
		</div>
	);
};

export default About;
