// home page component, contains navigation with links to other pages

// importing general items
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navigationGrid.scss";

export default function NavigationGrid() {
	const [selectedItem, setSelectedItem] = useState("");

	function handleMouseOver(e) {
		setSelectedItem(() => e.target.getAttribute("data-link"));
	}

	const SkillsRef = useRef();
	const ProjectsRef = useRef();
	const AboutRef = useRef();
	const ContactRef = useRef();

	const [SkillsIsVissible, setSkillsIsVissible] = useState(false);
	const [ProjectsIsVissible, setProjectsIsVissible] = useState(false);
	const [AboutIsVissible, setAboutIsVissible] = useState(false);
	const [ContactIsVissible, setContactIsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = item.target.dataset.link;

				switch (target) {
					case "skills": {
						setSkillsIsVissible(item.isIntersecting);
						break;
					}
					case "projects": {
						setProjectsIsVissible(item.isIntersecting);
						break;
					}
					case "about": {
						setAboutIsVissible(item.isIntersecting);
						break;
					}
					case "contact": {
						setContactIsVissible(item.isIntersecting);
						break;
					}
					default: {
						break;
					}
				}
			});
		});
		observer.observe(SkillsRef.current);
		observer.observe(ProjectsRef.current);
		observer.observe(AboutRef.current);
		observer.observe(ContactRef.current);
	}, []);

	return (
		<section className="homeNavigationGrid">
			<div>
				<NavLink
					className={
						SkillsIsVissible === true ? "vissibleNavigationButton" : "navigationButtonBeforeAnimation-left"
					}
					to="/skills"
					onMouseOver={handleMouseOver}
					data-link="skills"
					ref={SkillsRef}>
					<ion-icon name="trophy-sharp" />
					<span>Skills</span>
				</NavLink>
				<NavLink
					className={
						ProjectsIsVissible === true
							? "vissibleNavigationButton"
							: "navigationButtonBeforeAnimation-left"
					}
					to="/projects"
					onMouseOver={handleMouseOver}
					data-link="projects"
					ref={ProjectsRef}>
					<ion-icon name="hammer-sharp" />
					<span>Projects</span>
				</NavLink>
			</div>
			<div>
				<p
					className={
						selectedItem === "skills"
							? "rotateText-plus arrow-left"
							: selectedItem === "projects"
							? "rotateText-minus arrow-left"
							: selectedItem === "about"
							? "rotateText-minus arrow-right"
							: selectedItem === "contact"
							? "rotateText-plus arrow-right"
							: ""
					}>
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
				<NavLink
					className={
						AboutIsVissible === true ? "vissibleNavigationButton" : "navigationButtonBeforeAnimation-right"
					}
					to="/about"
					onMouseOver={handleMouseOver}
					data-link="about"
					ref={AboutRef}>
					<ion-icon name="person-sharp" />
					<span>About</span>
				</NavLink>
				<NavLink
					className={
						ContactIsVissible === true
							? "vissibleNavigationButton"
							: "navigationButtonBeforeAnimation-right"
					}
					to="/contact"
					onMouseOver={handleMouseOver}
					data-link="contact"
					ref={ContactRef}>
					<ion-icon name="mail-unread-sharp" />
					<span>Contact</span>
				</NavLink>
			</div>
		</section>
	);
}
