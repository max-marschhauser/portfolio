// about page, contains basic informations about myself

// importing general items
import React from "react";

// importing styles
import "./aboutPage.scss";

// importing components
import AboutComponent from "./components/AboutComponent.js";

export default function AboutPage() {
	return (
		<section className="aboutPage">
			<h2 className="pageHeading">
				About
				<p>Want to know more about me?</p>
			</h2>

			<div className="aboutPage--contents">
				<h3>Related to programming</h3>

				<div className="aboutPage--contents--articles">
					<AboutComponent relatedToProgramming={true} />
				</div>
			</div>
			<div className="aboutPage--contents">
				<h3>Unrelated to programming</h3>
				<div className="aboutPage--contents--articles">
					<AboutComponent relatedToProgramming={false} />
				</div>
			</div>
		</section>
	);
}
