// component for Projects page

// importing general items
import React from "react";

// importing data
import List from "../../data/projectsPageList.js";

// importing styles
import "./projectsList.scss";

export default function ProjectsListItems() {
	return (
		<div className="projectsList">
			{List.map((item) => {
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
								<li>{item.link}</li>
							</ul>
						</div>
					</article>
				);
			})}
		</div>
	);
}
