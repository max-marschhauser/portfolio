import React from "react";
import Skills from "../skillsPage/SkillsPage";
import Projects from "../projectsPage/ProjectsPage";
import About from "../aboutPage/AboutPage";
import "./home.scss";
import ReactImage from "../../assets/images/React.png";
import bearImage from "../../assets/images/Bear.jpg";

export default function Home() {
	return (
		<div className="main">
			<section className="homePage">
				<div className="nameAndImage">
					<h1>MAX MARSCHHAUSER</h1>
					<img src={bearImage} alt="max-marschhauser-profile" />
				</div>
				<h2>
					<span>&lt;</span> <span>React Frontend Developer</span> <span>&gt;</span>
				</h2>
				<img className="reactImage" src={ReactImage} alt="react-logo" />
			</section>
			<section className="blankSection"></section>
			<Skills />
			<section className="blankSection"></section>
			<Projects />
			<section className="blankSection"></section>
			<About />
		</div>
	);
}
