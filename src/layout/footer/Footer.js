// page footer, contains navbar links, external links, google map, copyright information and back to top button

// importing general items
import React from "react";
import { NavLink } from "react-router-dom";

// importing styles
import "./footer.scss";

export default function Footer() {
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
							<a href="www.link.com">
								<ion-icon name="logo-github"></ion-icon>
							</a>
						</li>
						<li>
							<a href="www.link.com">
								<ion-icon name="logo-codepen"></ion-icon>
							</a>
						</li>
						<li>
							<a href="www.link.com">
								<ion-icon name="logo-linkedin"></ion-icon>
							</a>
						</li>
						<li>
							<a href="www.link.com">
								<ion-icon name="logo-google"></ion-icon>
							</a>
						</li>
					</ul>
					<nav className="links--pages">
						<ul>
							<li>
								<NavLink className="navbar__link" to="/skills">
									<ion-icon name="trophy-sharp"></ion-icon> Skills
								</NavLink>
							</li>
							<li>
								<NavLink className="navbar__link" to="/projects">
									<ion-icon name="hammer-sharp"></ion-icon> Projects
								</NavLink>
							</li>
							<li>
								<NavLink className="navbar__link" to="/about">
									<ion-icon name="person-sharp"></ion-icon> About
								</NavLink>
							</li>
							<li>
								<NavLink className="navbar__link" to="/contact">
									<ion-icon name="mail-unread-sharp"></ion-icon> Contact
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
				<li>
					<button onClick={goToTop}>Back to Top</button>
				</li>
			</ul>
		</footer>
	);
}
