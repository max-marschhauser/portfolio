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
			<h2
				className={
					theme === "lightTheme"
						? "pageHeading lightThemeImage"
						: theme === "darkTheme"
						? "pageHeading darkThemeImage"
						: theme === "natureTheme"
						? "pageHeading natureThemeImage"
						: theme === "spaceTheme"
						? "pageHeading spaceThemeImage"
						: "pageHeading"
				}>
				About
				<p>Want to know more about me?</p>
			</h2>

			<main className="aboutPage">
				<h3>Related to programming</h3>
				<section className="aboutPage--articles">
					<AboutComponent relatedToProgramming={true} />
				</section>

				<h3>Unrelated to programming</h3>
				<section className="aboutPage--articles">
					<AboutComponent relatedToProgramming={false} />
				</section>
			</main>
		</>
	);
}
