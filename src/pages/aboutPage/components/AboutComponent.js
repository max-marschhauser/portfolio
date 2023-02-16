// component for About page

// improting general items
import React, { useState, useEffect } from "react";

// importing data
import aboutData from "../../../data/aboutPageText.js";

// importing styles
import "../aboutPage.scss";

export default function AboutComponent(props) {
	const { relatedToProgramming } = props;

	let aboutitems = document.querySelectorAll("[data-aboutitem]");

	let [item0IsVissible, setItem0IsVissible] = useState(false);
	let [item1IsVissible, setItem1IsVissible] = useState(false);
	let [item2IsVissible, setItem2IsVissible] = useState(false);
	let [item3IsVissible, setItem3IsVissible] = useState(false);
	let [item4IsVissible, setItem4IsVissible] = useState(false);
	let [item5IsVissible, setItem5IsVissible] = useState(false);
	let [item6IsVissible, setItem6IsVissible] = useState(false);
	let [item7IsVissible, setItem7IsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = item.target.dataset.aboutitem;

				switch (target) {
					case "school": {
						setItem0IsVissible(item.isIntersecting);
						break;
					}
					case "selfTaught": {
						setItem1IsVissible(item.isIntersecting);
						break;
					}
					case "misc": {
						setItem2IsVissible(item.isIntersecting);
						break;
					}
					case "git": {
						setItem3IsVissible(item.isIntersecting);
						break;
					}
					case "education": {
						setItem4IsVissible(item.isIntersecting);
						break;
					}
					case "work": {
						setItem5IsVissible(item.isIntersecting);
						break;
					}
					case "personality": {
						setItem6IsVissible(item.isIntersecting);
						break;
					}
					case "other": {
						setItem7IsVissible(item.isIntersecting);
						break;
					}

					default: {
						break;
					}
				}
			});
		});
		if (aboutitems) {
			aboutitems.forEach((item) => {
				observer.observe(item);
			});
		}
	}, [aboutitems]);

	return aboutData.map((item) => {
		if (relatedToProgramming === item.relatedToProgramming) {
			return (
				<article
					key={item.title}
					data-aboutitem={item.smallTitle}
					className={
						item.id === 0 && item0IsVissible
							? "aboutItemVissible"
							: item.id === 1 && item1IsVissible
							? "aboutItemVissible"
							: item.id === 2 && item2IsVissible
							? "aboutItemVissible"
							: item.id === 3 && item3IsVissible
							? "aboutItemVissible"
							: item.id === 4 && item4IsVissible
							? "aboutItemVissible"
							: item.id === 5 && item5IsVissible
							? "aboutItemVissible"
							: item.id === 6 && item6IsVissible
							? "aboutItemVissible"
							: item.id === 7 && item7IsVissible
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
