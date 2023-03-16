// skills page, contains list of my skills and my experience with every one of them

// importing general items
import React, { useState, useEffect } from "react";

// importing data
import dataObject from "../../data/skillsPageExperiences.js";

// importing styles
import "./skillsPage.scss";

//importing components
import SkillItems from "./components/SkillItems.js";

export default function SkillsPage(props) {
	let { handlePageChange, theme } = props;
	useEffect(() => {
		handlePageChange("skills");
	}, [handlePageChange]);

	let [currentSkill, setCurrentSkill] = useState("React");

	function handleFocus(event) {
		setCurrentSkill(event.target.dataset.image);
	}

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
				<h2>Skills</h2>
				<p>Want to know what I know?</p>
			</div>

			<main className="skillsPage">
				<section className="images">
					<SkillItems currentSkill={currentSkill} handleFocus={handleFocus} />
				</section>
				<section className="description">
					<div className="sticky">
						<h3>{currentSkill}</h3>
						<ul>
							{dataObject[currentSkill].map((listItem) => (
								<li key={listItem}>{listItem}</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
