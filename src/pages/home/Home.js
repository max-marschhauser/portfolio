// projects page, contains landing page

// importing general items
import React, { useState, useEffect, useRef } from "react";

// importing styles
import "./home.scss";

// importing components
import NavigationGrid from "./components/NavigationGrid.js";

// importing images
import profileImage from "../../assets/images/profile.png";

// importing documents
import MyCVEng from "../../assets/documents/MaxMarschhauserCVeng.pdf";
import MyCVHrv from "../../assets/documents/MaxMarschhauserCVhrv.pdf";

export default function Home(props) {
	let { handlePageChange, theme } = props;
	useEffect(() => {
		handlePageChange("home");
	}, [handlePageChange]);

	const ProfileImageRef = useRef();
	const TitleRef = useRef();
	const SubtitleRef = useRef();
	const CVRef = useRef();

	const [profileImageIsVissible, setProfileImageIsVissible] = useState(false);
	const [titleIsVissible, setTitleIsVissible] = useState(false);
	const [subtitleIsVissible, setSubtitleIsVissible] = useState(false);
	const [CVIsVissible, setCVIsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = item.target.dataset.name;

				switch (target) {
					case "profileImage": {
						setProfileImageIsVissible(item.isIntersecting);
						break;
					}
					case "title": {
						setTitleIsVissible(item.isIntersecting);
						break;
					}
					case "subtitle": {
						setSubtitleIsVissible(item.isIntersecting);
						break;
					}
					case "CV": {
						setCVIsVissible(item.isIntersecting);
						break;
					}
					default: {
						break;
					}
				}
			});
		});
		observer.observe(ProfileImageRef.current);
		observer.observe(TitleRef.current);
		observer.observe(SubtitleRef.current);
		observer.observe(CVRef.current);
	}, []);

	return (
		<>
			<section
				className={
					theme === "iceTheme"
						? "homePage iceThemeImage"
						: theme === "twilightTheme"
						? "homePage twilightThemeImage"
						: theme === "natureTheme"
						? "homePage natureThemeImage"
						: theme === "spaceTheme"
						? "homePage spaceThemeImage"
						: "homePage"
				}>
				<div
					className={
						profileImageIsVissible === true ? "itemVissible profileImageContainer" : "profileImageContainer"
					}
					ref={ProfileImageRef}
					data-name="profileImage">
					<img className="profileImage" src={profileImage} alt="max-marschhauser-profile" loading="lazy" />
				</div>
				<div
					className={
						theme === "iceTheme" || theme === "spaceTheme"
							? "text primaryMovingShapes"
							: theme === "twilightTheme" || theme === "natureTheme"
							? "text darkMovingShapes"
							: "text"
					}>
					<h1 ref={TitleRef} data-name="title" className={titleIsVissible === true ? "itemVissible " : ""}>
						MAX MARSCHHAUSER
					</h1>
					<h2
						ref={SubtitleRef}
						data-name="subtitle"
						className={subtitleIsVissible === true ? "itemVissible " : ""}>
						<span>&lt;</span> <span>React Frontend Developer</span> <span>&gt;</span>
					</h2>
					<div ref={CVRef} data-name="CV" className={CVIsVissible === true ? "itemVissible CVs" : "CVs"}>
						<a
							href={MyCVEng}
							download="Max Marschhauser CV - eng"
							target="_blank"
							rel="noreferrer"
							tabIndex="-1">
							<button>Download CV (eng)</button>
						</a>
						<a
							href={MyCVHrv}
							download="Max Marschhauser CV - hrv"
							target="_blank"
							rel="noreferrer"
							tabIndex="-1">
							<button>Download CV (hrv)</button>
						</a>
					</div>
				</div>
			</section>
			<NavigationGrid />
		</>
	);
}
