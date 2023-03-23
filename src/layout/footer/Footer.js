// page footer, contains navbar links, external links, google map, copyright information and back to top button

// importing general items
import React from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./footer.scss";

// importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
								<FontAwesomeIcon icon="fa-brands fa-github" />
							</a>
						</li>
						<li>
							<a href="https://codepen.io/max-marschhauser" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon="fa-brands fa-codepen" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/max-marschhauser-a8b9791a6/"
								target="_blank"
								rel="noreferrer">
								<FontAwesomeIcon icon="fa-brands fa-linkedin" />
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
									<span>
										<FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
									</span>
									Skills
								</NavLink>
							</li>
							<li>
								<NavLink
									className={activePage === "projects" ? "activeLink" : ""}
									to="/projects"
									onClick={closeMobileNavbar}>
									<span>
										<FontAwesomeIcon icon="fa-solid fa-list-check" />
									</span>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									className={activePage === "about" ? "activeLink" : ""}
									to="/about"
									onClick={closeMobileNavbar}>
									<span>
										<FontAwesomeIcon icon="fa-solid fa-address-card" />
									</span>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									className={activePage === "contact" ? "activeLink" : ""}
									to="/contact"
									onClick={closeMobileNavbar}>
									<span>
										<FontAwesomeIcon icon="fa-solid fa-phone" />
									</span>
									Contact
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>
								<NavLink
									className={activePage === "options" ? "activeLink" : ""}
									to="/options"
									onClick={closeMobileNavbar}>
									<span>
										<FontAwesomeIcon icon="fa-solid fa-sliders" />
									</span>
									Options
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
