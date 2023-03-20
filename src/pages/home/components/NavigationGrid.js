// home page component, contains navigation with links to other pages

// importing general items
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navigationGrid.scss";

// importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationGrid() {
	const [selectedItem, setSelectedItem] = useState("");

	function handleFocus(e) {
		setSelectedItem(() => e.target.dataset.link);
	}

	function focusItem(e) {
		let itemToFocus = e.target.dataset.link;
		switch (itemToFocus) {
			case "skills":
				SkillsRef.current.focus();
				setSelectedItem(() => e.target.dataset.link);
				break;
			case "projects":
				ProjectsRef.current.focus();
				setSelectedItem(() => e.target.dataset.link);
				break;
			case "about":
				AboutRef.current.focus();
				setSelectedItem(() => e.target.dataset.link);
				break;
			case "contact":
				ContactRef.current.focus();
				setSelectedItem(() => e.target.dataset.link);
				break;
			default:
				break;
		}
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
					onMouseOver={focusItem}
					onFocus={handleFocus}
					data-link="skills"
					ref={SkillsRef}>
					<FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
					<span>Skills</span>
				</NavLink>
				<NavLink
					className={
						ProjectsIsVissible === true
							? "vissibleNavigationButton"
							: "navigationButtonBeforeAnimation-left"
					}
					to="/projects"
					onMouseOver={focusItem}
					onFocus={handleFocus}
					data-link="projects"
					ref={ProjectsRef}>
					<FontAwesomeIcon icon="fa-solid fa-list-check" />
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
					onMouseOver={focusItem}
					onFocus={handleFocus}
					data-link="about"
					ref={AboutRef}>
					<FontAwesomeIcon icon="fa-solid fa-address-card" />
					<span>About</span>
				</NavLink>
				<NavLink
					className={
						ContactIsVissible === true
							? "vissibleNavigationButton"
							: "navigationButtonBeforeAnimation-right"
					}
					to="/contact"
					onMouseOver={focusItem}
					onFocus={handleFocus}
					data-link="contact"
					ref={ContactRef}>
					<FontAwesomeIcon icon="fa-solid fa-phone" />
					<span>Contact</span>
				</NavLink>
			</div>
		</section>
	);
}
