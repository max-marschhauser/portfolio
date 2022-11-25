// projects page, contains list of my projects and the abillity to filter and sort them

import React from "react";
import "./projectsPage.scss";

export default function ProjectsPage() {
	return (
		<div className="main">
			<section className="projectsPage">
				<h2 className="pageHeading">Projects</h2>
				<div className="projectsPage__container">
					<div className="projectsPage__list">
						<article className="projectsPage__list__item">
							<img alt="project1" />
							<div className="projectsPage__list__item__description">
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
						<article className="projectsPage__list__item">
							<img alt="project1" />
							<div className="projectsPage__list__item__description">
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
						<article className="projectsPage__list__item">
							<img alt="project1" />
							<div className="projectsPage__list__item__description">
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
					</div>
					<div className="projectsPage__filter"></div>
				</div>
			</section>
		</div>
	);
}
