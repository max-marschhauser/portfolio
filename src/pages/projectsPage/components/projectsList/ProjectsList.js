// component for Projects page

// importing general items
import React, { useState, useEffect, useRef } from "react";

// importing data
import List from "../../../../data/projectsPageList.js";

// importing styles
import "./projectsList.scss";

export default function ProjectsListItems(props) {
	const { searchWord, activeSkill, activeKeyword, handleToggleModal } = props;

	let articlesRef = useRef([]);

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

		if (articlesRef.current) {
			articlesRef.current.forEach((item) => {
				observer.observe(item);
			});
		}
	}, []);

	return (
		<section className="projectsList">
			{List.map((item, index) => {
				let upperCaseTechnology = item.technology.toUpperCase();
				let upperCasedescription = item.description.toUpperCase();
				let upperCasename = item.name.toUpperCase();
				let upperCaseSkill = activeSkill.toUpperCase();
				let upperCaseKeyword = activeKeyword.toUpperCase();
				let upperCaseSearchWord = searchWord.toUpperCase();

				if (
					upperCaseTechnology.includes(upperCaseSkill) &&
					upperCasedescription.includes(upperCaseKeyword) &&
					(upperCasename.includes(upperCaseSearchWord) ||
						upperCaseTechnology.includes(upperCaseSearchWord) ||
						upperCasedescription.includes(upperCaseSearchWord))
				) {
					return (
						<article
							key={item.id}
							data-projectsitemid={item.id}
							ref={(element) => {
								articlesRef.current[item.id] = element;
							}}
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
										{item.githubLink !== "" ? (
											<a href={item.githubLink} target="_blank" rel="noreferrer">
												<svg viewBox="0 0 512 512">
													<path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
												</svg>
												<span>GitHub</span>
											</a>
										) : (
											<></>
										)}
										{item.codepenLink !== "" ? (
											<a href={item.codepenLink} target="_blank" rel="noreferrer">
												<svg viewBox="0 0 512 512">
													<path d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59zM195.09 240.67q23.19-15.24 46.11-30.86a7.54 7.54 0 002.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44 1.02.66 3.4.28 4.57-.48zM269.84 209.35q23.71 16.07 47.63 31.82a4.3 4.3 0 003.83 0l39.76-26.47L268 152.48v53.35a4.79 4.79 0 001.84 3.52zM258.11 230.37a5.27 5.27 0 00-4.74.17c-4.82 3-9.47 6.2-14.17 9.35-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 006.26.11l39-26s-34.07-22.66-39.84-26.49zM141 237.12v39.61l29.62-19.84L141 237.12z" />
													<path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72 40.91-27.13 81.94-54.36 122.73-81.68 5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66z" />
													<path d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01zM370 276.68v-39.62l-29.59 19.87L370 276.68z" />
												</svg>
												<span>CodePen</span>
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
					return <article className="invisibleArticle" key={item.id}></article>;
				}
			})}
		</section>
	);
}
