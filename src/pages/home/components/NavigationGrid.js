// home page component, contains navigation with links to other pages

// importing general items
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navigationGrid.scss";

export default function NavigationGrid() {
	let [selectedItem, setSelectedItem] = useState("");

	function handleMouseOver(e) {
		setSelectedItem(() => e.target.getAttribute("data"));
	}

	return (
		<section className="homeNavigationGrid">
			<div>
				<NavLink to="/skills" onMouseOver={handleMouseOver} data="skills">
					<ion-icon name="trophy-sharp"></ion-icon>
					<span>Skills</span>
				</NavLink>

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
