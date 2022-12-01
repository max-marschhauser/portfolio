// component for Projects page

// importing general items
import React, { useId, useState } from "react";

// importing styles
import "./filter.scss";

export default function Filter() {
	const id = useId();

	let [activeInput, setActiveInput] = useState();

	function searchChanger(value) {
		console.log(value);
	}

	function handleSkillChange(value) {
		setActiveInput((prev) => (prev = value));
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
							<label className={(activeInput = "HTML" ? "activeFilterInput" : "")} htmlFor={`${id}-HTML`}>
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
							<label className={(activeInput = "CSS" ? "activeFilterInput" : "")} htmlFor={`${id}-CSS`}>
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
							<label className={(activeInput = "Sass" ? "activeFilterInput" : "")} htmlFor={`${id}-Sass`}>
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
								className={(activeInput = "JavaScript" ? "activeFilterInput" : "")}
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
								className={(activeInput = "TypeScript" ? "activeFilterInput" : "")}
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
								className={(activeInput = "React" ? "activeFilterInput" : "")}
								htmlFor={`${id}-React`}>
								React
							</label>
						</li>
					</ul>
				</fieldset>
			</form>
		</section>
	);
}
