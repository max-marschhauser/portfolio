// about page, contains basic informations about myself

// importing general items
import React, { useEffect } from "react";

// importing styles
import "./aboutPage.scss";

// importing components
import AboutComponent from "./components/AboutComponent.js";

export default function AboutPage(props) {
	let { handlePageChange, theme } = props;

	useEffect(() => {
		handlePageChange("about");
	}, [handlePageChange]);

	return (
		<>
			<div
				className={
					theme === "iceTheme" || theme === "spaceTheme"
						? "pageHeading darkTheme"
						: theme === "twilightTheme" || theme === "natureTheme"
						? "pageHeading lightTheme"
						: "pageHeading"
				}>
				<h2>About</h2>
				<p>Want to know more about me?</p>
			</div>

			<main className="aboutPage">
				<h3>Related To Programming</h3>
				<section className="aboutPage--articles">
					<AboutComponent relatedToProgramming={true} />
				</section>

				<h3>Unrelated To Programming</h3>
				<section className="aboutPage--articles">
					<AboutComponent relatedToProgramming={false} />
				</section>
			</main>
		</>
	);
}
