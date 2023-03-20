// page navbar, contains logo and navbar links

// importing general items
import React from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navbar.scss";

// importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
	let { activePage, mobileNavbar, toggleMobileNabar, closeMobileNavbar } = props;

	return (
		<>
			<div className="navbar" id="top">
				<NavLink className="logo" to="/" end onClick={closeMobileNavbar}>
					<span>MAX</span>
					<span>Marschhauser</span>
					<span>
						React Frontend <wbr />
						Developer
					</span>
				</NavLink>

				<button className="hamburgerButton" onClick={toggleMobileNabar}>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
				</button>
				<nav className="desktopNavbar navbarStyle">
					<NavLink
						className={activePage === "skills" ? "navbar__link activeLink" : "navbar__link"}
						to="/skills">
						<FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
						<span>Skills</span>
					</NavLink>

					<NavLink
						className={activePage === "projects" ? "navbar__link activeLink" : "navbar__link"}
						to="/projects">
						<FontAwesomeIcon icon="fa-solid fa-list-check" />
						<span>Projects</span>
					</NavLink>

					<NavLink
						className={activePage === "about" ? "navbar__link activeLink" : "navbar__link"}
						to="/about">
						<FontAwesomeIcon icon="fa-solid fa-address-card" />
						<span>About</span>
					</NavLink>

					<NavLink
						className={activePage === "contact" ? "navbar__link activeLink" : "navbar__link"}
						to="/contact">
						<FontAwesomeIcon icon="fa-solid fa-phone" />
						<span>Contact</span>
					</NavLink>

					<NavLink
						className={activePage === "options" ? "navbar__link activeLink" : "navbar__link"}
						to="/options">
						<FontAwesomeIcon icon="fa-solid fa-sliders" />
					</NavLink>
				</nav>
			</div>

			<nav
				className={
					mobileNavbar === true ? "mobileNavbar navbarStyle" : "mobileNavbar mobileNavbarHidden navbarStyle"
				}>
				<NavLink
					className={activePage === "skills" ? "navbar__link activeLink" : "navbar__link"}
					to="/skills"
					onClick={closeMobileNavbar}>
					<FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
					<span>Skills</span>
				</NavLink>
				<NavLink
					className={activePage === "projects" ? "navbar__link activeLink" : "navbar__link"}
					to="/projects"
					onClick={closeMobileNavbar}>
					<FontAwesomeIcon icon="fa-solid fa-list-check" />
					<span>Projects</span>
				</NavLink>
				<NavLink
					className={activePage === "about" ? "navbar__link activeLink" : "navbar__link"}
					to="/about"
					onClick={closeMobileNavbar}>
					<FontAwesomeIcon icon="fa-solid fa-address-card" />
					<span>About</span>
				</NavLink>
				<NavLink
					className={activePage === "contact" ? "navbar__link activeLink" : "navbar__link"}
					to="/contact"
					onClick={closeMobileNavbar}>
					<FontAwesomeIcon icon="fa-solid fa-phone" />
					<span>Contact</span>
				</NavLink>
				<NavLink
					className={activePage === "options" ? "navbar__link activeLink" : "navbar__link"}
					to="/options"
					onClick={closeMobileNavbar}>
					<FontAwesomeIcon icon="fa-solid fa-sliders" />
					<span>Options</span>
				</NavLink>
			</nav>
		</>
	);
}
