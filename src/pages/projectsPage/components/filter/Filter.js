// component for Projects page

// importing general items
import React, { useId } from "react";

// importing styles
import "./filter.scss";

export default function Filter(props) {
	const { handleSearchWordChange, handleSkillChange, handleKeywordChange, activeSkill, activeKeyword } = props;

	const id = useId();

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="filter">
			<div className="filter--sticky">
				<h3>Filter projects</h3>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<input
							type="search"
							id={`${id}-search`}
							name="search"
							placeholder="search"
							tabIndex="0"
							onChange={(e) => handleSearchWordChange(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>Skill used</legend>

						<ul className="filter--skills">
							<li>
								<input
									type="radio"
									id={`${id}-HTML`}
									name="skill"
									value="HTML"
									onClick={(e) => handleSkillChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeSkill === "HTML" ? "activeFilterInput" : ""}
									htmlFor={`${id}-HTML`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSkillChange(e.target.innerHTML);
										}
									}}>
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
								<label
									tabIndex="0"
									className={activeSkill === "CSS" ? "activeFilterInput" : ""}
									htmlFor={`${id}-CSS`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSkillChange(e.target.innerHTML);
										}
									}}>
									CSS
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
									tabIndex="0"
									className={activeSkill === "JavaScript" ? "activeFilterInput" : ""}
									htmlFor={`${id}-JavaScript`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSkillChange(e.target.innerHTML);
										}
									}}>
									JavaScript
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
								<label
									tabIndex="0"
									className={activeSkill === "Sass" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Sass`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSkillChange(e.target.innerHTML);
										}
									}}>
									Sass
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
									tabIndex="0"
									className={activeSkill === "TypeScript" ? "activeFilterInput" : ""}
									htmlFor={`${id}-TypeScript`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSkillChange(e.target.innerHTML);
										}
									}}>
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
									onKeyDown={(e) => handleSkillChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeSkill === "React" ? "activeFilterInput" : ""}
									htmlFor={`${id}-React`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSkillChange(e.target.innerHTML);
										}
									}}>
									React
								</label>
							</li>
						</ul>
					</fieldset>

					<fieldset>
						<legend>Keyword</legend>

						<ul className="filter--keyword">
							<li>
								<input
									type="radio"
									id={`${id}-Single-page App`}
									name="keyword"
									value="Single-page App"
									onClick={(e) => handleKeywordChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeKeyword === "Single-page App" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Single-page App`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
									Single-page App
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-API`}
									name="keyword"
									value="API"
									onClick={(e) => handleKeywordChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeKeyword === "API" ? "activeFilterInput" : ""}
									htmlFor={`${id}-API`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
									API
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-Data`}
									name="keyword"
									value="Data"
									onClick={(e) => handleKeywordChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeKeyword === "Data" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Data`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
									Data
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-Brochure`}
									name="keyword"
									value="Brochure"
									onClick={(e) => handleKeywordChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeKeyword === "Brochure" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Brochure`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
									Brochure
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-eCommerce`}
									name="keyword"
									value="eCommerce"
									onClick={(e) => handleKeywordChange(e.target.value)}
								/>
								<label
									tabIndex="0"
									className={activeKeyword === "eCommerce" ? "activeFilterInput" : ""}
									htmlFor={`${id}-eCommerce`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
									eCommerce
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
									tabIndex="0"
									className={activeKeyword === "Game" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Game`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
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
									tabIndex="0"
									className={activeKeyword === "Responsive" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Responsive`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
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
									tabIndex="0"
									className={activeKeyword === "Component" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Component`}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleKeywordChange(e.target.innerHTML);
										}
									}}>
									Component
								</label>
							</li>
						</ul>
					</fieldset>
				</form>
			</div>
		</section>
	);
}
