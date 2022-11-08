import React from "react";
import "./footer.scss";

export default function Footer() {
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
							<a href="/">
								<ion-icon name="logo-github"></ion-icon>
							</a>
						</li>
						<li>
							<a href="/">
								<ion-icon name="logo-linkedin"></ion-icon>
							</a>
						</li>
						<li>
							<a href="/">
								<ion-icon name="logo-google"></ion-icon>
							</a>
						</li>
					</ul>
					<nav className="links--pages">
						<ul>
							<li>
								<a href="/">Page 1</a>
							</li>
							<li>
								<a href="/">Page 2</a>
							</li>
							<li>
								<a href="/">Page 3</a>
							</li>
						</ul>
					</nav>
				</section>
				<section>
					<iframe
						title="map"
						src="https://maps.google.com/maps?q=osijek,%20gunduli%C4%87eva%2080&t=k&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
				</section>
			</div>
			<ul className="pageFooter__item--under">
				<li>Copyright &copy;{+new Date().getFullYear()}.</li>
				<li>
					<a href="#top">Back to Top</a>
				</li>
			</ul>
		</footer>
	);
}
