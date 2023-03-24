// home page component, contains navigation with links to other pages

// importing general items
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navigationGrid.scss";

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
					<svg viewBox="0 0 512 512">
						<path d="M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zM499.33 199.33l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z" />
					</svg>
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
					<svg viewBox="0 0 512 512">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
							d="M160 144h288M160 256h288M160 368h288"
						/>
						<circle cx="80" cy="144" r="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
						<circle cx="80" cy="256" r="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
						<circle cx="80" cy="368" r="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
					</svg>
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
					<svg viewBox="0 0 512 512">
						<path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
					</svg>
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
					<svg viewBox="0 0 512 512">
						<path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z" />
					</svg>
					<span>Contact</span>
				</NavLink>
			</div>
		</section>
	);
}
