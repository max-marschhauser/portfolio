// component for About page

// improting general items
import React, { useState, useEffect } from "react";

// importing data
import aboutData from "../../../data/aboutPageText.js";

// importing styles
import "../aboutPage.scss";

export default function AboutComponent(props) {
	const { relatedToProgramming } = props;

	let aboutItems = document.querySelectorAll("[data-aboutitemid]");

	let [aboutItem0IsVissible, setAboutItem0IsVissible] = useState(false);
	let [aboutItem1IsVissible, setAboutItem1IsVissible] = useState(false);
	let [aboutItem2IsVissible, setAboutItem2IsVissible] = useState(false);
	let [aboutItem3IsVissible, setAboutItem3IsVissible] = useState(false);
	let [aboutItem4IsVissible, setAboutItem4IsVissible] = useState(false);
	let [aboutItem5IsVissible, setAboutItem5IsVissible] = useState(false);
	let [aboutItem6IsVissible, setAboutItem6IsVissible] = useState(false);
	let [aboutItem7IsVissible, setAboutItem7IsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = Number(item.target.dataset.aboutitemid);

				switch (target) {
					case 0: {
						setAboutItem0IsVissible(item.isIntersecting);
						break;
					}
					case 1: {
						setAboutItem1IsVissible(item.isIntersecting);
						break;
					}
					case 2: {
						setAboutItem2IsVissible(item.isIntersecting);
						break;
					}
					case 3: {
						setAboutItem3IsVissible(item.isIntersecting);
						break;
					}
					case 4: {
						setAboutItem4IsVissible(item.isIntersecting);
						break;
					}
					case 5: {
						setAboutItem5IsVissible(item.isIntersecting);
						break;
					}
					case 6: {
						setAboutItem6IsVissible(item.isIntersecting);
						break;
					}
					case 7: {
						setAboutItem7IsVissible(item.isIntersecting);
						break;
					}

					default: {
						break;
					}
				}
			});
		});
		if (aboutItems) {
			aboutItems.forEach((item) => {
				observer.observe(item);
			});
		}
	}, [aboutItems]);

	return aboutData.map((item) => {
		if (relatedToProgramming === item.relatedToProgramming) {
			return (
				<article
					key={item.title}
					data-aboutitemid={item.id}
					className={
						item.id === 0 && aboutItem0IsVissible
							? "aboutItemVissible"
							: item.id === 1 && aboutItem1IsVissible
							? "aboutItemVissible"
							: item.id === 2 && aboutItem2IsVissible
							? "aboutItemVissible"
							: item.id === 3 && aboutItem3IsVissible
							? "aboutItemVissible"
							: item.id === 4 && aboutItem4IsVissible
							? "aboutItemVissible"
							: item.id === 5 && aboutItem5IsVissible
							? "aboutItemVissible"
							: item.id === 6 && aboutItem6IsVissible
							? "aboutItemVissible"
							: item.id === 7 && aboutItem7IsVissible
							? "aboutItemVissible"
							: ""
					}>
					<header>
						<h4>{item.title}</h4>
						{item.imgSrc !== undefined ? (
							<a href={item.link} target="_blank" rel="noreferrer">
								<img src={item.imgSrc} alt={item.imgSrc} />
							</a>
						) : (
							<ul>
								{item.content.map((contentLine) => {
									return <li key={contentLine}>{contentLine}</li>;
								})}
							</ul>
						)}
					</header>
					<>
						{item.imgSrc === undefined ? (
							<></>
						) : (
							<ul>
								{item.content.map((contentLine) => {
									return <li key={contentLine}>{contentLine}</li>;
								})}
							</ul>
						)}
					</>
				</article>
			);
		} else {
			return null;
		}
	});
}
