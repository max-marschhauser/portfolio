// projects page, contains landing page

// importing general items
import React from "react";

// importing components
import Skills from "../skillsPage/SkillsPage";
import Projects from "../projectsPage/ProjectsPage";
import About from "../aboutPage/AboutPage";
import Contact from "../contactPage/ContactPage";

// importing styles
import "./home.scss";

// importing images
import manImage from "../../assets/images/manstanding.jpg";

export default function Home() {
	return (
		<>
			<section className="homePage">
				<div className="homePage--grid">
					<img src={manImage} alt="max-marschhauser-profile" />
					<div className="rightSide">
						<h1>MAX MARSCHHAUSER</h1>
						<h2>
							<span>&lt;</span> <span>React Frontend Developer</span> <span>&gt;</span>
						</h2>
					</div>
				</div>
			</section>

			<Skills />

			<Projects />

			<About />

			<Contact />
		</>
	);
}
