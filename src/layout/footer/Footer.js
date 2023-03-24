// page footer, contains navbar links, external links, google map, copyright information and back to top button

// importing general items
import React from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./footer.scss";

// importing images
import profile from "../../assets/images/profile.png";

// importing documents
import MyCVEng from "../../assets/documents/MaxMarschhauserCVeng.pdf";
import MyCVHrv from "../../assets/documents/MaxMarschhauserCVhrv.pdf";

export default function Footer(props) {
	let { activePage, closeMobileNavbar } = props;

	function goToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<footer className="pageFooter">
			<div className="pageFooter__item--upper">
				<section>
					<h2>
						Max Marschhauser
						<br />
						<span>
							max.marschhauser
							<wbr />
							@gmail.com
						</span>
					</h2>
					<ul className="links--social">
						<li>
							<a href="https://github.com/max-marschhauser" target="_blank" rel="noreferrer">
								<svg viewBox="0 0 512 512">
									<path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
								</svg>
							</a>
						</li>
						<li>
							<a href="https://codepen.io/max-marschhauser" target="_blank" rel="noreferrer">
								<svg viewBox="0 0 512 512">
									<path d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59zM195.09 240.67q23.19-15.24 46.11-30.86a7.54 7.54 0 002.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44 1.02.66 3.4.28 4.57-.48zM269.84 209.35q23.71 16.07 47.63 31.82a4.3 4.3 0 003.83 0l39.76-26.47L268 152.48v53.35a4.79 4.79 0 001.84 3.52zM258.11 230.37a5.27 5.27 0 00-4.74.17c-4.82 3-9.47 6.2-14.17 9.35-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 006.26.11l39-26s-34.07-22.66-39.84-26.49zM141 237.12v39.61l29.62-19.84L141 237.12z" />
									<path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72 40.91-27.13 81.94-54.36 122.73-81.68 5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66z" />
									<path d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01zM370 276.68v-39.62l-29.59 19.87L370 276.68z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/max-marschhauser-a8b9791a6/"
								target="_blank"
								rel="noreferrer">
								<svg viewBox="0 0 512 512">
									<path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
								</svg>
							</a>
						</li>
					</ul>
				</section>
				<section>
					<div className="CVs">
						<a
							href={MyCVEng}
							download="Max Marschhauser CV - eng"
							target="_blank"
							rel="noreferrer"
							tabIndex="-1">
							<button>Download CV (eng)</button>
						</a>
						<a
							href={MyCVHrv}
							download="Max Marschhauser CV - hrv"
							target="_blank"
							rel="noreferrer"
							tabIndex="-1">
							<button>Download CV (hrv)</button>
						</a>
					</div>
				</section>
				<section>
					<nav className="links--pages">
						<ul>
							<li>
								<NavLink
									className={activePage === "skills" ? "activeLink" : ""}
									to="/skills"
									onClick={closeMobileNavbar}>
									<svg viewBox="0 0 512 512">
										<path d="M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zM499.33 199.33l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z" />
									</svg>
									<span>Skills</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									className={activePage === "projects" ? "activeLink" : ""}
									to="/projects"
									onClick={closeMobileNavbar}>
									<svg viewBox="0 0 512 512">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="32"
											d="M160 144h288M160 256h288M160 368h288"
										/>
										<circle
											cx="80"
											cy="144"
											r="16"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="32"
										/>
										<circle
											cx="80"
											cy="256"
											r="16"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="32"
										/>
										<circle
											cx="80"
											cy="368"
											r="16"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="32"
										/>
									</svg>
									<span>Projects</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									className={activePage === "about" ? "activeLink" : ""}
									to="/about"
									onClick={closeMobileNavbar}>
									<svg viewBox="0 0 512 512">
										<path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
									</svg>
									<span>About</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									className={activePage === "contact" ? "activeLink" : ""}
									to="/contact"
									onClick={closeMobileNavbar}>
									<svg viewBox="0 0 512 512">
										<path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z" />
									</svg>
									<span>Contact</span>
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>
								<NavLink
									className={activePage === "options" ? "activeLink" : ""}
									to="/options"
									onClick={closeMobileNavbar}>
									<svg viewBox="0 0 512 512">
										<path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
									</svg>
									<span>Options</span>
								</NavLink>
							</li>
						</ul>
					</nav>
				</section>
				<section>
					<img src={profile} alt="profile" loading="lazy" />
				</section>
			</div>
			<ul className="pageFooter__item--under">
				<li>Copyright &copy;{+new Date().getFullYear()}.</li>
				<li>maxdev.com.hr</li>
				<li>
					<button onClick={goToTop}>Beam me up</button>
				</li>
			</ul>
		</footer>
	);
}
