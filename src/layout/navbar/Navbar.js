// page navbar, contains logo and navbar links

// importing general items
import React from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./navbar.scss";

// importing icons
//import SkillsIcon from "../../assets/icons/hammer-sharp.svg";

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
						<svg viewBox="0 0 512 512">
							<path d="M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zM499.33 199.33l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z" />
						</svg>
						<span>Skills</span>
					</NavLink>

					<NavLink
						className={activePage === "projects" ? "navbar__link activeLink" : "navbar__link"}
						to="/projects">
						<svg viewBox="0 0 512 512">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
								d="M160 144h288M160 256h288M160 368h288"
							/>
							<circle
								cx="80"
								cy="144"
								r="16"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/>
							<circle
								cx="80"
								cy="256"
								r="16"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/>
							<circle
								cx="80"
								cy="368"
								r="16"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/>
						</svg>
						<span>Projects</span>
					</NavLink>

					<NavLink
						className={activePage === "about" ? "navbar__link activeLink" : "navbar__link"}
						to="/about">
						<svg viewBox="0 0 512 512">
							<path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
						</svg>
						<span>About</span>
					</NavLink>

					<NavLink
						className={activePage === "contact" ? "navbar__link activeLink" : "navbar__link"}
						to="/contact">
						<svg viewBox="0 0 512 512">
							<path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z" />
						</svg>
						<span>Contact</span>
					</NavLink>

					<NavLink
						className={activePage === "options" ? "navbar__link activeLink" : "navbar__link"}
						to="/options">
						<svg viewBox="0 0 512 512">
							<path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
						</svg>
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
					<svg viewBox="0 0 512 512">
						<path d="M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zM499.33 199.33l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z" />
					</svg>
					<span>Skills</span>
				</NavLink>
				<NavLink
					className={activePage === "projects" ? "navbar__link activeLink" : "navbar__link"}
					to="/projects"
					onClick={closeMobileNavbar}>
					<svg viewBox="0 0 512 512">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							d="M160 144h288M160 256h288M160 368h288"
						/>
						<circle
							cx="80"
							cy="144"
							r="16"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/>
						<circle
							cx="80"
							cy="256"
							r="16"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/>
						<circle
							cx="80"
							cy="368"
							r="16"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/>
					</svg>
					<span>Projects</span>
				</NavLink>
				<NavLink
					className={activePage === "about" ? "navbar__link activeLink" : "navbar__link"}
					to="/about"
					onClick={closeMobileNavbar}>
					<svg viewBox="0 0 512 512">
						<path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
					</svg>
					<span>About</span>
				</NavLink>
				<NavLink
					className={activePage === "contact" ? "navbar__link activeLink" : "navbar__link"}
					to="/contact"
					onClick={closeMobileNavbar}>
					<svg viewBox="0 0 512 512">
						<path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z" />
					</svg>
					<span>Contact</span>
				</NavLink>
				<NavLink
					className={activePage === "options" ? "navbar__link activeLink" : "navbar__link"}
					to="/options"
					onClick={closeMobileNavbar}>
					<svg viewBox="0 0 512 512">
						<path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
					</svg>
					<span>Options</span>
				</NavLink>
			</nav>
		</>
	);
}
