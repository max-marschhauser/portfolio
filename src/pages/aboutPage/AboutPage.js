// about page, contains basic informations about myself

// importing general items
import React from "react";

// importing data
import aboutData from "../../data/aboutPageText.js";

// importing styles
import "./aboutPage.scss";

export default function AboutPage() {
	return (
		<div className="main">
			<section className="aboutPage">
				<h2 className="pageHeading">About</h2>

				<div className="aboutPage--contents">
					<h3>Related to programming</h3>

					<div className="aboutPage--contents--articles">
						<article>
							<h4>School - Basics</h4>
							<a href="" target="_blank" rel="noreferrer">
								<img src={""} alt="" />
							</a>
							<ul>
								<li></li>
								<li></li>
							</ul>
						</article>
					</div>
				</div>
				<div className="aboutPage--contents">
					<h3>Unrelated to programming</h3>
					<div className="aboutPage--contents--articles"></div>
				</div>
			</section>
		</div>
	);
}
