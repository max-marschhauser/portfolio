// component for Projects page

// importing general items
import React, { useId } from "react";

// importing styles
import "./filter.scss";

export default function Filter(props) {
	const { searchChanger, skillChanger, keywordChanger, activeSkill, activeKeyword } = props;

	const id = useId();

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="filter">
			<div className="filter--container">
				<h3>Filter projects</h3>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>
							<label htmlFor={`${id}-search`}>search</label>
						</legend>
						<input
							type="search"
							id={`${id}-search`}
							name="search"
							placeholder="search"
							onChange={(e) => searchChanger(e.target.value)}
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
									onClick={(e) => skillChanger(e.target.value)}
								/>
								<label
									className={activeSkill === "HTML" ? "activeFilterInput" : ""}
									htmlFor={`${id}-HTML`}>
									HTML
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-CSS`}
									name="skill"
									value="CSS"
									onClick={(e) => skillChanger(e.target.value)}
								/>
								<label
									className={activeSkill === "CSS" ? "activeFilterInput" : ""}
									htmlFor={`${id}-CSS`}>
									CSS
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-JavaScript`}
									name="skill"
									value="JavaScript"
									onClick={(e) => skillChanger(e.target.value)}
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
									id={`${id}-Sass`}
									name="skill"
									value="Sass"
									onClick={(e) => skillChanger(e.target.value)}
								/>
								<label
									className={activeSkill === "Sass" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Sass`}>
									Sass
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-TypeScript`}
									name="skill"
									value="TypeScript"
									onClick={(e) => skillChanger(e.target.value)}
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
									onClick={(e) => skillChanger(e.target.value)}
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
									id={`${id}-Single-page App`}
									name="keyword"
									value="Single-page App"
									onClick={(e) => keywordChanger(e.target.value)}
								/>
								<label
									className={activeKeyword === "Single-page App" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Single-page App`}>
									Single-page App
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-API`}
									name="keyword"
									value="API"
									onClick={(e) => keywordChanger(e.target.value)}
								/>
								<label
									className={activeKeyword === "API" ? "activeFilterInput" : ""}
									htmlFor={`${id}-API`}>
									API
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-Data`}
									name="keyword"
									value="Data"
									onClick={(e) => keywordChanger(e.target.value)}
								/>
								<label
									className={activeKeyword === "Data" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Data`}>
									Data
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-Brochure`}
									name="keyword"
									value="Brochure"
									onClick={(e) => keywordChanger(e.target.value)}
								/>
								<label
									className={activeKeyword === "Brochure" ? "activeFilterInput" : ""}
									htmlFor={`${id}-Brochure`}>
									Brochure
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-eCommerce`}
									name="keyword"
									value="eCommerce"
									onClick={(e) => keywordChanger(e.target.value)}
								/>
								<label
									className={activeKeyword === "eCommerce" ? "activeFilterInput" : ""}
									htmlFor={`${id}-eCommerce`}>
									eCommerce
								</label>
							</li>

							<li>
								<input
									type="radio"
									id={`${id}-Game`}
									name="keyword"
									value="Game"
									onClick={(e) => keywordChanger(e.target.value)}
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
									onClick={(e) => keywordChanger(e.target.value)}
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
									onClick={(e) => keywordChanger(e.target.value)}
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
			</div>
		</section>
	);
}
