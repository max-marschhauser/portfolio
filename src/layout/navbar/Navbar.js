// page navbar, contains logo and navbar links

// importing general items
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navbar.scss";

export default function Navbar(props) {
	let { activePage, handleLinkClick } = props;

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
						className={activePage === "/skills" ? "navbar__link activeLink" : "navbar__link"}
						to="/skills"
						onClick={handleLinkClick}>
						<ion-icon name="trophy-sharp"></ion-icon>Skills
					</NavLink>

					<NavLink
						className={activePage === "/projects" ? "navbar__link activeLink" : "navbar__link"}
						to="/projects"
						onClick={handleLinkClick}>
						<ion-icon name="hammer-sharp"></ion-icon>Projects
					</NavLink>

					<NavLink
						className={activePage === "/about" ? "navbar__link activeLink" : "navbar__link"}
						to="/about"
						onClick={handleLinkClick}>
						<ion-icon name="person-sharp"></ion-icon>About
					</NavLink>

					<NavLink
						className={activePage === "/contact" ? "navbar__link activeLink" : "navbar__link"}
						to="/contact"
						onClick={handleLinkClick}>
						<ion-icon name="mail-unread-sharp"></ion-icon>Contact
					</NavLink>
				</nav>
			</div>

			<nav
				className={
					mobileNavbar === true ? "mobileNavbar navbarStyle" : "mobileNavbar mobileNavbarHidden navbarStyle"
				}>
				<NavLink
					className={activePage === "/skills" ? "navbar__link activeLink" : "navbar__link"}
					to="/skills"
					onClick={handleLinkClick}>
					<ion-icon name="trophy-sharp"></ion-icon>Skills
				</NavLink>
				<NavLink
					className={activePage === "/projects" ? "navbar__link activeLink" : "navbar__link"}
					to="/projects"
					onClick={handleLinkClick}>
					<ion-icon name="hammer-sharp"></ion-icon>Projects
				</NavLink>
				<NavLink
					className={activePage === "/about" ? "navbar__link activeLink" : "navbar__link"}
					to="/about"
					onClick={handleLinkClick}>
					<ion-icon name="person-sharp"></ion-icon>About
				</NavLink>
				<NavLink
					className={activePage === "/contact" ? "navbar__link activeLink" : "navbar__link"}
					to="/contact"
					end
					onClick={handleLinkClick}>
					<ion-icon name="mail-unread-sharp"></ion-icon>Contact
				</NavLink>
			</nav>
		</>
	);
}
