// component for Projects page

// importing general items
import React, { useId, useState } from "react";

// importing styles
import "./filter.scss";

export default function Filter() {
	const id = useId();

	let [activeSkill, setActiveSkill] = useState("");
	let [activeKeyword, setActiveKeyword] = useState("");

	function searchChanger(value) {
		console.log(value);
	}

	function handleSkillChange(value) {
		setActiveSkill(() => {
			if (value === activeSkill) {
				return "";
			} else {
				return value;
			}
		});
	}

	function handleKeywordChange(value) {
		setActiveKeyword(() => {
			if (value === activeKeyword) {
				return "";
			} else {
				return value;
			}
		});
	}

	return (
		<section className="filter">
			<h3>Filter projects</h3>
			<form>
				<fieldset>
					<legend>
						<label htmlFor={`${id}-search`}>search</label>
					</legend>
					<input
						type="search"
						id={`${id}-search`}
						name="search"
						placeholder="search"
						onChange={(e) => searchChanger(e.target)}
					/>
				</fieldset>

				<fieldset>
					<legend>skill used</legend>

					<ul>
						<li>
							<input
								type="radio"
								id={`${id}-HTML`}
								name="skill"
								value="HTML"
								onClick={(e) => handleSkillChange(e.target.value)}
							/>
							<label className={activeSkill === "HTML" ? "activeFilterInput" : ""} htmlFor={`${id}-HTML`}>
								HTML
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-CSS`}
								name="skill"
								value="CSS"
								onClick={(e) => handleSkillChange(e.target.value)}
							/>
							<label className={activeSkill === "CSS" ? "activeFilterInput" : ""} htmlFor={`${id}-CSS`}>
								CSS
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-Sass`}
								name="skill"
								value="Sass"
								onClick={(e) => handleSkillChange(e.target.value)}
							/>
							<label className={activeSkill === "Sass" ? "activeFilterInput" : ""} htmlFor={`${id}-Sass`}>
								Sass
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-JavaScript`}
								name="skill"
								value="JavaScript"
								onClick={(e) => handleSkillChange(e.target.value)}
							/>
							<label
								className={activeSkill === "JavaScript" ? "activeFilterInput" : ""}
								htmlFor={`${id}-JavaScript`}>
								JavaScript
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-TypeScript`}
								name="skill"
								value="TypeScript"
								onClick={(e) => handleSkillChange(e.target.value)}
							/>
							<label
								className={activeSkill === "TypeScript" ? "activeFilterInput" : ""}
								htmlFor={`${id}-TypeScript`}>
								TypeScript
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-React`}
								name="skill"
								value="React"
								onClick={(e) => handleSkillChange(e.target.value)}
							/>
							<label
								className={activeSkill === "React" ? "activeFilterInput" : ""}
								htmlFor={`${id}-React`}>
								React
							</label>
						</li>
					</ul>
				</fieldset>

				<fieldset>
					<legend>keyword</legend>

					<ul>
						<li>
							<input
								type="radio"
								id={`${id}-API`}
								name="keyword"
								value="API"
								onClick={(e) => handleKeywordChange(e.target.value)}
							/>
							<label className={activeKeyword === "API" ? "activeFilterInput" : ""} htmlFor={`${id}-API`}>
								API
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-Big Data`}
								name="keyword"
								value="Big Data"
								onClick={(e) => handleKeywordChange(e.target.value)}
							/>
							<label
								className={activeKeyword === "Big Data" ? "activeFilterInput" : ""}
								htmlFor={`${id}-Big Data`}>
								Big Data
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-Game`}
								name="keyword"
								value="Game"
								onClick={(e) => handleKeywordChange(e.target.value)}
							/>
							<label
								className={activeKeyword === "Game" ? "activeFilterInput" : ""}
								htmlFor={`${id}-Game`}>
								Game
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-Responsive`}
								name="keyword"
								value="Responsive"
								onClick={(e) => handleKeywordChange(e.target.value)}
							/>
							<label
								className={activeKeyword === "Responsive" ? "activeFilterInput" : ""}
								htmlFor={`${id}-Responsive`}>
								Responsive
							</label>
						</li>

						<li>
							<input
								type="radio"
								id={`${id}-Component`}
								name="keyword"
								value="Component"
								onClick={(e) => handleKeywordChange(e.target.value)}
							/>
							<label
								className={activeKeyword === "Component" ? "activeFilterInput" : ""}
								htmlFor={`${id}-Component`}>
								Component
							</label>
						</li>
					</ul>
				</fieldset>
			</form>
		</section>
	);
}
