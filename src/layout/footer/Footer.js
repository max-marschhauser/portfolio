import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="pageFooter">
			<div className="pageFooter__item">
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
							<a href="/">
								<FontAwesomeIcon icon="fa-brands fa-github" />
							</a>
						</li>
						<li>
							<a href="/">
								<FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
							</a>
						</li>
					</ul>
					<nav className="links--pages">
						<ul>
							<li>
								<a href="/">other page 1</a>
							</li>
							<li>
								<a href="/">other page 2</a>
							</li>
							<li>
								<a href="/">other page 3</a>
							</li>
						</ul>
					</nav>
				</section>
				<aside>
					<iframes>google maps</iframes>
				</aside>
			</div>
			<ul>
				<li>copyright 2022</li>
				<li>
					<a href="/">back to top</a>
				</li>
			</ul>
		</footer>
	);
}
