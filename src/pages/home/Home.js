// projects page, contains landing page

// importing general items
import React from "react";

// importing components
import Skills from "../skillsPage/SkillsPage";
import Projects from "../projectsPage/ProjectsPage";
import About from "../aboutPage/AboutPage";

// importing styles
import "./home.scss";

// importing images
import bearImage from "../../assets/images/Bear.jpg";
import manImage from "../../assets/images/manstanding.jpg";

export default function Home() {
	return (
		<div className="main">
			<section className="homePage">
				<div className="homePage--grid">
					<img className="mobile-img" src={bearImage} alt="max-marschhauser-profile" />
					<img className="desktop-img" src={manImage} alt="max-marschhauser-profile" />
					<div className="rightSide">
						<h1>MAX MARSCHHAUSER</h1>
						<h2>
							<span>&lt;</span> <span>React Frontend Developer</span> <span>&gt;</span>
						</h2>
					</div>
				</div>
			</section>
			<section className="blankSection"></section>
			<Skills />
			<section className="blankSection"></section>
			<Projects />
			<section className="blankSection"></section>
			<About />
			<section className="blankSection"></section>
		</div>
	);
}
