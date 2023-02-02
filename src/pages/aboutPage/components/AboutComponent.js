// component for About page

// improting general items
import React from "react";

// importing data
import aboutData from "../../../data/aboutPageText.js";

// importing styles
import "../aboutPage.scss";

export default function AboutComponent(props) {
	let { relatedToProgramming } = props;

	return aboutData.map((item) => {
		if (relatedToProgramming === item.relatedToProgramming) {
			return (
				<article key={item.title}>
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
