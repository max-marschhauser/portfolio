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
	let { handlePageChange } = props;
	useEffect(() => {
		handlePageChange("skills");
	}, [handlePageChange]);

	let [currentSkill, setCurrentSkill] = useState("React");

	function handleMouseOver(event) {
		setCurrentSkill(event.target.alt);
	}

	return (
		<>
			<h2 className="pageHeading">
				Skills
				<p>Want to know what I know?</p>
			</h2>

			<main className="skillsPage">
				<section className="images">
					<SkillItems currentSkill={currentSkill} handleMouseOver={handleMouseOver} />
				</section>
				<section className="description">
					<div className="sticky">
						<h3>My Experience with</h3>
						<header>{currentSkill}</header>
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
