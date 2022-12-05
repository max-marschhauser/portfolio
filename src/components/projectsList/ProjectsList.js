// component for Projects page

// importing general items
import React from "react";

// importing data
import List from "../../data/projectsPageList.js";

// importing styles
import "./projectsList.scss";

export default function ProjectsListItems(props) {
	const { searchWord, activeSkill, activeKeyword } = props;

	return (
		<div className="projectsList">
			{List.map((item) => {
				if (
					(searchWord === "" && activeSkill === "" && activeKeyword === "") ||
					(item.technology.toUpperCase().includes(activeSkill.toUpperCase()) &&
						item.description.toUpperCase().includes(activeKeyword.toUpperCase()) &&
						(item.name.toUpperCase().includes(searchWord.toUpperCase()) ||
							item.technology.toUpperCase().includes(searchWord.toUpperCase()) ||
							item.description.toUpperCase().includes(searchWord.toUpperCase())))
				) {
					return (
						<article className="projectsList__item" key={item.id}>
							<img src={item.img} alt={item.name} />
							<div className="projectsList__item--info">
								<ul>
									<li>
										<h3>{item.name}</h3>
									</li>
									<li>{item.technology}</li>
									<li>{item.description}</li>
									<li>
										<a href={item.githubLink}>
											<ion-icon name="logo-github"></ion-icon>
										</a>
										<a href={item.codepenLink}>
											<ion-icon name="logo-codepen"></ion-icon>
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
