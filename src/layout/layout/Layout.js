// page layout, contains aside bar with page logo and navbar links, uses react router

// importing general items
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

// importing components
import Footer from "../footer/Footer";

// importing styles
import "./layout.scss";

export default function Layout() {
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
					<NavLink className="navbar__link" to="/skills">
						<ion-icon name="trophy-sharp"></ion-icon>Skills
					</NavLink>

					<NavLink className="navbar__link" to="/projects">
						<ion-icon name="hammer-sharp"></ion-icon>Projects
					</NavLink>

					<NavLink className="navbar__link" to="/about">
						<ion-icon name="person-sharp"></ion-icon>About
					</NavLink>

					<NavLink className="navbar__link" to="/contact">
						<ion-icon name="mail-unread-sharp"></ion-icon>Contact
					</NavLink>
				</nav>
			</div>

			<nav
				className={
					mobileNavbar === true ? "mobileNavbar navbarStyle" : "mobileNavbar mobileNavbarHidden navbarStyle"
				}>
				<NavLink className="navbar__link" to="/skills">
					<ion-icon name="trophy-sharp"></ion-icon>Skills
				</NavLink>

				<NavLink className="navbar__link" to="/projects">
					<ion-icon name="hammer-sharp"></ion-icon>Projects
				</NavLink>

				<NavLink className="navbar__link" to="/about">
					<ion-icon name="person-sharp"></ion-icon>About
				</NavLink>
				<NavLink className="navbar__link" to="/contact" end>
					<ion-icon name="mail-unread-sharp"></ion-icon>Contact
				</NavLink>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
}
