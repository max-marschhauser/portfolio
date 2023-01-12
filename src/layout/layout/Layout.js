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
				<div className="logo">
					<span>MAX</span>
					<span>Marschhauser</span>
					<span>
						React Frontend <wbr />
						Developer
					</span>
				</div>
				<button className="hamburgerButton" onClick={openMobileNabar}>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
					<span className={mobileNavbar === true ? "hamburgerOpen" : ""}></span>
				</button>
				<nav className="desktopNavbar navbarStyle">
					<NavLink className="navbar__link" to="/" end>
						Home
					</NavLink>

					<NavLink className="navbar__link" to="/skills">
						Skills
					</NavLink>

					<NavLink className="navbar__link" to="/projects">
						Projects
					</NavLink>

					<NavLink className="navbar__link" to="/about">
						About
					</NavLink>
				</nav>
			</div>

			<nav
				className={
					mobileNavbar === true ? "mobileNavbar navbarStyle" : "mobileNavbar mobileNavbarHidden navbarStyle"
				}>
				<NavLink className="navbar__link" to="/" end>
					<ion-icon name="home-sharp"></ion-icon>Home
				</NavLink>

				<NavLink className="navbar__link" to="/skills">
					<ion-icon name="trophy-sharp"></ion-icon>Skills
				</NavLink>

				<NavLink className="navbar__link" to="/projects">
					<ion-icon name="hammer-sharp"></ion-icon>Projects
				</NavLink>

				<NavLink className="navbar__link" to="/about">
					<ion-icon name="person-sharp"></ion-icon>About
				</NavLink>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
}
