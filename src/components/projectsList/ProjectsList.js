// component for Projects page

// importing general items
import React, { useState } from "react";

// importing data
import List from "../../data/projectsPageList.js";

// importing styles
import "./projectsList.scss";

export default function ProjectsListItems(props) {
	const { searchWord, activeSkill, activeKeyword } = props;

	let [imageNumber, setImageNumber] = useState(0);

	function handleImageNumberChange(number) {
		setImageNumber(number.target.innerHTML - 1);
	}

	return (
		<div className="projectsList">
			{List.map((item) => {
				if (
					item.technology.toUpperCase().includes(activeSkill.toUpperCase()) &&
					item.description.toUpperCase().includes(activeKeyword.toUpperCase()) &&
					(item.name.toUpperCase().includes(searchWord.toUpperCase()) ||
						item.technology.toUpperCase().includes(searchWord.toUpperCase()) ||
						item.description.toUpperCase().includes(searchWord.toUpperCase()))
				) {
					return (
						<article className="projectsList__item" key={item.id}>
							<div className="projectsList__item--imageContainer">
								<img src={item.img[imageNumber]} alt={item.name} />
								<div className="projectsList__item--imageContainer--imageButtons">
									<button onClick={handleImageNumberChange}>1</button>
									<button onClick={handleImageNumberChange}>2</button>
									<button onClick={handleImageNumberChange}>3</button>
								</div>
							</div>

							<div className="projectsList__item--info">
								<ul>
									<li>
										<h3>{item.name}</h3>
									</li>
									<li>
										<p>{item.technology}</p>
									</li>
									<li>
										<p>{item.description}</p>
									</li>
									<li className="projectsList__item--links">
										<a href={item.githubLink} target="_blank" rel="noreferrer">
											<ion-icon name="logo-github"></ion-icon>
											<span> GitHub</span>
										</a>
										<a href={item.codepenLink} target="_blank" rel="noreferrer">
											<ion-icon name="logo-codepen"></ion-icon>
											<span> CodePen</span>
										</a>
									</li>
								</ul>
							</div>
						</article>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
}
