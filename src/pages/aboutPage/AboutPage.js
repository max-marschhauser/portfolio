// about page, contains basic informations about myself

// importing general items
import React from "react";

// importing styles
import "./aboutPage.scss";

// importing components
import RelatedToProgramming from "./components/relatedToProgramming/RelatedToProgramming.js";
import UnrelatedToProgramming from "./components/unrelatedToProgramming/UnrelatedToProgramming.js";

export default function AboutPage() {
	return (
		<div className="main">
			<section className="aboutPage">
				<h2 className="pageHeading">About</h2>

				<div className="aboutPage--contents">
					<h3>Related to programming</h3>

					<div className="aboutPage--contents--articles">
						<RelatedToProgramming />
					</div>
				</div>
				<div className="aboutPage--contents">
					<h3>Unrelated to programming</h3>
					<div className="aboutPage--contents--articles">
						<UnrelatedToProgramming />
					</div>
				</div>
			</section>
		</div>
	);
}
