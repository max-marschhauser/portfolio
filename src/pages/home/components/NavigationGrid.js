// home page component, contains navigation with links to other pages

// importing general items
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// importing styles
import "./navigationGrid.scss";

// importing svg
import skillsImage from "../../../assets/images/svg/trophy-sharp.svg";

export default function NavigationGrid() {
	let [selectedItem, setSelectedItem] = useState("");

	function handleMouseOver(e) {
		setSelectedItem(() => e.target.getAttribute("data"));
	}

	const SkillsButton = () => {
		const { ref /*, inView*/ } = useInView({
			threshold: 0.5,
		});
		return (
			<NavLink ref={ref} to="/skills" onMouseOver={handleMouseOver} data="skills">
				<img src={skillsImage} alt="Skills" />
				<span>Skills</span>
			</NavLink>
		);
	};

	return (
		<section className="homeNavigationGrid">
			<div>
				<SkillsButton />
				<NavLink to="/projects" onMouseOver={handleMouseOver} data="projects">
					<ion-icon name="hammer-sharp"></ion-icon>
					<span>Projects</span>
				</NavLink>
			</div>
			<div>
				<p>
					{selectedItem === "skills"
						? "Want to know what I know?"
						: selectedItem === "projects"
						? "Interested in my projects?"
						: selectedItem === "about"
						? "Want to know more about me?"
						: selectedItem === "contact"
						? "How to contact me?"
						: "What are you interested in?"}
				</p>
			</div>
			<div>
				<NavLink to="/about" onMouseOver={handleMouseOver} data="about">
					<ion-icon name="person-sharp"></ion-icon>
					<span>About</span>
				</NavLink>

				<NavLink to="/contact" onMouseOver={handleMouseOver} data="contact">
					<ion-icon name="mail-unread-sharp"></ion-icon>
					<span>Contact</span>
				</NavLink>
			</div>
		</section>
	);
}
