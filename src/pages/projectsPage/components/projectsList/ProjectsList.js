// component for Projects page

// importing general items
import React, { useState, useEffect } from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./projectsList.scss";

export default function ProjectsListItems(props) {
	const { searchWord, activeSkill, activeKeyword, handleToggleModal } = props;

	let projectsItems = document.querySelectorAll("[data-projectsitemid]");

	let [projectsItem0IsVissible, setProjectsItem0IsVissible] = useState(false);
	let [projectsItem1IsVissible, setProjectsItem1IsVissible] = useState(false);
	let [projectsItem2IsVissible, setProjectsItem2IsVissible] = useState(false);
	let [projectsItem3IsVissible, setProjectsItem3IsVissible] = useState(false);
	let [projectsItem4IsVissible, setProjectsItem4IsVissible] = useState(false);
	let [projectsItem5IsVissible, setProjectsItem5IsVissible] = useState(false);
	let [projectsItem6IsVissible, setProjectsItem6IsVissible] = useState(false);
	let [projectsItem7IsVissible, setProjectsItem7IsVissible] = useState(false);
	let [projectsItem8IsVissible, setProjectsItem8IsVissible] = useState(false);
	let [projectsItem9IsVissible, setProjectsItem9IsVissible] = useState(false);
	let [projectsItem10IsVissible, setProjectsItem10IsVissible] = useState(false);
	let [projectsItem11IsVissible, setProjectsItem11IsVissible] = useState(false);
	let [projectsItem12IsVissible, setProjectsItem12IsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = Number(item.target.dataset.projectsitemid);

				switch (target) {
					case 0: {
						setProjectsItem0IsVissible(item.isIntersecting);
						break;
					}
					case 1: {
						setProjectsItem1IsVissible(item.isIntersecting);
						break;
					}
					case 2: {
						setProjectsItem2IsVissible(item.isIntersecting);
						break;
					}
					case 3: {
						setProjectsItem3IsVissible(item.isIntersecting);
						break;
					}
					case 4: {
						setProjectsItem4IsVissible(item.isIntersecting);
						break;
					}
					case 5: {
						setProjectsItem5IsVissible(item.isIntersecting);
						break;
					}
					case 6: {
						setProjectsItem6IsVissible(item.isIntersecting);
						break;
					}
					case 7: {
						setProjectsItem7IsVissible(item.isIntersecting);
						break;
					}
					case 8: {
						setProjectsItem8IsVissible(item.isIntersecting);
						break;
					}
					case 9: {
						setProjectsItem9IsVissible(item.isIntersecting);
						break;
					}
					case 10: {
						setProjectsItem10IsVissible(item.isIntersecting);
						break;
					}
					case 11: {
						setProjectsItem11IsVissible(item.isIntersecting);
						break;
					}
					case 12: {
						setProjectsItem12IsVissible(item.isIntersecting);
						break;
					}

					default: {
						break;
					}
				}
			});
		});
		if (projectsItems) {
			projectsItems.forEach((item) => {
				observer.observe(item);
			});
		}
	}, [projectsItems]);

	return (
		<section className="projectsList">
			{List.map((item) => {
				if (
					item.technology.toUpperCase().includes(activeSkill.toUpperCase()) &&
					item.description.toUpperCase().includes(activeKeyword.toUpperCase()) &&
					(item.name.toUpperCase().includes(searchWord.toUpperCase()) ||
						item.technology.toUpperCase().includes(searchWord.toUpperCase()) ||
						item.description.toUpperCase().includes(searchWord.toUpperCase()))
				) {
					return (
						<article
							key={item.id}
							data-projectsitemid={item.id}
							className={
								item.id === 0 && projectsItem0IsVissible
									? "projectsItemVissible "
									: item.id === 1 && projectsItem1IsVissible
									? "projectsItemVissible"
									: item.id === 2 && projectsItem2IsVissible
									? "projectsItemVissible"
									: item.id === 3 && projectsItem3IsVissible
									? "projectsItemVissible"
									: item.id === 4 && projectsItem4IsVissible
									? "projectsItemVissible"
									: item.id === 5 && projectsItem5IsVissible
									? "projectsItemVissible"
									: item.id === 6 && projectsItem6IsVissible
									? "projectsItemVissible"
									: item.id === 7 && projectsItem7IsVissible
									? "projectsItemVissible"
									: item.id === 8 && projectsItem8IsVissible
									? "projectsItemVissible"
									: item.id === 9 && projectsItem9IsVissible
									? "projectsItemVissible"
									: item.id === 10 && projectsItem10IsVissible
									? "projectsItemVissible"
									: item.id === 11 && projectsItem11IsVissible
									? "projectsItemVissible"
									: item.id === 12 && projectsItem12IsVissible
									? "projectsItemVissible"
									: ""
							}>
							<button
								type="button"
								className="imageContainer"
								onClick={handleToggleModal}
								data-name={item.name}>
								<img src={item.img[0]} alt={item.name} loading="lazy" data-name={item.name} />
							</button>

							<div className="info">
								<ul>
									<li>
										<h3>{item.name}</h3>
									</li>
									<li className="technology">
										<h4>Technology:</h4>
										<p>{item.technology}</p>
									</li>
									<li>
										<h4>Description:</h4>
										<p>{item.description}</p>
									</li>
									<li className="links">
										<a href={item.githubLink} target="_blank" rel="noreferrer">
											<ion-icon name="logo-github"></ion-icon>
											<span> GitHub</span>
										</a>
										{item.codepenLink !== "" ? (
											<a href={item.codepenLink} target="_blank" rel="noreferrer">
												<ion-icon name="logo-codepen"></ion-icon>
												<span> CodePen</span>
											</a>
										) : (
											<></>
										)}
									</li>
								</ul>
							</div>
						</article>
					);
				} else {
					return null;
				}
			})}
		</section>
	);
}
