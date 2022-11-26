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
						<img alt="project1" />
						<div className="projectsList__item--info">
							<ul>
								<li>
									<h3>Item Name</h3>
								</li>
								<li>Technology used</li>
								<li>Description</li>
								<li>Link</li>
							</ul>
						</div>
					</article>
				);
			})}
		</div>
	);
}
