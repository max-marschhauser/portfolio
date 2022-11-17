import React from "react";
import Skills from "../skillsPage/SkillsPage";
import Projects from "../projectsPage/ProjectsPage";
import About from "../aboutPage/AboutPage";
import "./home.scss";
export default function Home() {
	return (
		<div className="main">
			<div>Home</div>
			<Skills />
			<Projects />
			<About />
		</div>
	);
}
