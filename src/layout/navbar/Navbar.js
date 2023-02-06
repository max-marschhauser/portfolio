// page navbar, contains logo and navbar links

// importing general items
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navbar.scss";

export default function Navbar(props) {
	let { activePage } = props;

	let [mobileNavbar, setMobileNavbar] = useState(false);

	function openMobileNabar() {
		setMobileNavbar((current) => !current);
	}

	return (
		<>
			<div className="navbar" id="top">
				<NavLink className="logo" to="/" end>
					<span>MAX</span>
					<span>Marschhauser</span>
					<span>
						React Frontend <wbr />
						Developer
					</span>
				</NavLink>

				<button className="hamburgerButton" onClick={openMobileNabar}>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
				</button>
				<nav className="desktopNavbar navbarStyle">
					<NavLink
						className={activePage === "skills" ? "navbar__link activeLink" : "navbar__link"}
						to="/skills">
						<ion-icon name="trophy-sharp"></ion-icon>Skills
					</NavLink>

					<NavLink
						className={activePage === "projects" ? "navbar__link activeLink" : "navbar__link"}
						to="/projects">
						<ion-icon name="hammer-sharp"></ion-icon>Projects
					</NavLink>

					<NavLink
						className={activePage === "about" ? "navbar__link activeLink" : "navbar__link"}
						to="/about">
						<ion-icon name="person-sharp"></ion-icon>About
					</NavLink>

					<NavLink
						className={activePage === "contact" ? "navbar__link activeLink" : "navbar__link"}
						to="/contact">
						<ion-icon name="mail-unread-sharp"></ion-icon>Contact
					</NavLink>

					<NavLink
						className={activePage === "options" ? "navbar__link activeLink" : "navbar__link"}
						to="/options">
						<ion-icon name="options-sharp"></ion-icon>Options
					</NavLink>
				</nav>
			</div>

			<nav
				className={
					mobileNavbar === true ? "mobileNavbar navbarStyle" : "mobileNavbar mobileNavbarHidden navbarStyle"
				}>
				<NavLink className={activePage === "skills" ? "navbar__link activeLink" : "navbar__link"} to="/skills">
					<ion-icon name="trophy-sharp"></ion-icon>Skills
				</NavLink>
				<NavLink
					className={activePage === "projects" ? "navbar__link activeLink" : "navbar__link"}
					to="/projects">
					<ion-icon name="hammer-sharp"></ion-icon>Projects
				</NavLink>
				<NavLink className={activePage === "about" ? "navbar__link activeLink" : "navbar__link"} to="/about">
					<ion-icon name="person-sharp"></ion-icon>About
				</NavLink>
				<NavLink
					className={activePage === "qoptions" ? "navbar__link activeLink" : "navbar__link"}
					to="/options"
					end>
					<ion-icon name="options-sharp"></ion-icon>Options
				</NavLink>
			</nav>
		</>
	);
}
