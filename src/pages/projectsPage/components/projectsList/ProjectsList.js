// component for Projects page

// importing general items
import React from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./projectsList.scss";

export default function ProjectsListItems(props) {
	const { searchWord, activeSkill, activeKeyword } = props;

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
								<button>
									<img src={item.img[0]} alt={item.name} loading="lazy" />
								</button>
							</div>

							<div className="projectsList__item--info">
								<ul>
									<li>
										<h3>{item.name}</h3>
									</li>
									<li>
										<h4>Technology:</h4>
										<p>{item.technology}</p>
									</li>
									<li>
										<h4>Date:</h4>
										<p>{item.date}</p>
									</li>
									<li>
										<h4>Description:</h4>
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
