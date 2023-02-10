// page footer, contains navbar links, external links, google map, copyright information and back to top button

// importing general items
import React from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./footer.scss";

export default function Footer(props) {
	let { activePage } = props;

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
								<ion-icon name="logo-github" />
							</a>
						</li>
						<li>
							<a href="https://codepen.io/max-marschhauser" target="_blank" rel="noreferrer">
								<ion-icon name="logo-codepen" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/max-marschhauser-a8b9791a6/"
								target="_blank"
								rel="noreferrer">
								<ion-icon name="logo-linkedin" />
							</a>
						</li>
					</ul>
				</section>
				<section>
					<nav className="links--pages">
						<ul>
							<li>
								<NavLink className={activePage === "skills" ? "activeLink" : ""} to="/skills">
									<ion-icon name="trophy-sharp" /> Skills
								</NavLink>
							</li>
							<li>
								<NavLink className={activePage === "projects" ? "activeLink" : ""} to="/projects">
									<ion-icon name="hammer-sharp" /> Projects
								</NavLink>
							</li>
							<li>
								<NavLink className={activePage === "about" ? "activeLink" : ""} to="/about">
									<ion-icon name="person-sharp" /> About
								</NavLink>
							</li>
							<li>
								<NavLink className={activePage === "contact" ? "activeLink" : ""} to="/contact">
									<ion-icon name="mail-unread-sharp" /> Contact
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>
								<NavLink className={activePage === "options" ? "activeLink" : ""} to="/options">
									<ion-icon name="options-sharp" /> Options
								</NavLink>
							</li>
						</ul>
					</nav>
				</section>
				<section>
					<iframe
						title="map"
						tabIndex="-1"
						src="https://maps.google.com/maps?q=osijek,%20gunduli%C4%87eva%2080&t=k&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
				</section>
			</div>
			<ul className="pageFooter__item--under">
				<li>Copyright &copy;{+new Date().getFullYear()}.</li>
				<li>maxdev.com.hr</li>
				<li>
					<button onClick={goToTop}>Back to Top</button>
				</li>
			</ul>
		</footer>
	);
}
