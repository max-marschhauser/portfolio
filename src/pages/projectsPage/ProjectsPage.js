// projects page, contains list of my projects and the abillity to filter and sort them

import React from "react";
import "./projectsPage.scss";
import ProjectsList from "../../components/projectsList/ProjectsList.js";
import Filter from "../../components/filter/Filter.js";

export default function ProjectsPage() {
	return (
		<div className="main">
			<section className="projectsPage">
				<h2 className="pageHeading">Projects</h2>
				<div className="projectsPage__container">
					<ProjectsList />
					<Filter />
				</div>
			</section>
		</div>
	);
}
