// options page, contains options for selecting theme of page

// importing general items
import React, { useState, useEffect, useRef } from "react";

// importing styles
import "./optionsPage.scss";

// importing images
import themeIce from "../../assets/images/options/themeIce.jpg";
import themeTwilight from "../../assets/images/options/themeTwilight.jpg";
import themeNature from "../../assets/images/options/themeNature.jpg";
import themeSpace from "../../assets/images/options/themeSpace.jpg";

export default function OptionsPage(props) {
	let { handlePageChange, handleThemeChange, theme } = props;
	useEffect(() => {
		handlePageChange("options");
	}, [handlePageChange]);

	const iceRef = useRef();
	const twilightRef = useRef();
	const natureRef = useRef();
	const spaceRef = useRef();

	const [iceIsVissible, setIceIsVissible] = useState(false);
	const [twilightIsVissible, setTwilightIsVissible] = useState(false);
	const [natureIsVissible, setNatureIsVissible] = useState(false);
	const [spaceIsVissible, setSpaceIsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = item.target.dataset.link;

				switch (target) {
					case "ice": {
						setIceIsVissible(item.isIntersecting);
						break;
					}
					case "twilight": {
						setTwilightIsVissible(item.isIntersecting);
						break;
					}
					case "nature": {
						setNatureIsVissible(item.isIntersecting);
						break;
					}
					case "space": {
						setSpaceIsVissible(item.isIntersecting);
						break;
					}
					default: {
						break;
					}
				}
			});
		});
		observer.observe(iceRef.current);
		observer.observe(twilightRef.current);
		observer.observe(natureRef.current);
		observer.observe(spaceRef.current);
	}, []);

	return (
		<>
			<div
				className={
					theme === "iceTheme" || theme === "spaceTheme"
						? "pageHeading darkTheme"
						: theme === "twilightTheme" || theme === "natureTheme"
						? "pageHeading lightTheme"
						: "pageHeading"
				}>
				<h2>Options</h2>
				<p>Change theme of this page</p>
			</div>
			<main className="optionsPage">
				<h3>Select theme</h3>
				<ul>
					<li className={iceIsVissible ? "themeVissible" : ""} data-link="ice" ref={iceRef}>
						<button
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleThemeChange("iceTheme");
								}
							}}>
							<img
								src={themeIce}
								alt="Ice theme"
								loading="lazy"
								title="Ice theme"
								onClick={() => {
									handleThemeChange("iceTheme");
								}}
							/>
						</button>
						<p>Ice</p>
					</li>
					<li className={twilightIsVissible ? "themeVissible" : ""} data-link="twilight" ref={twilightRef}>
						<button
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleThemeChange("twilightTheme");
								}
							}}>
							<img
								src={themeTwilight}
								alt="Twilight theme"
								loading="lazy"
								title="Twilight theme"
								onClick={() => {
									handleThemeChange("twilightTheme");
								}}
							/>
						</button>
						<p>Twilight</p>
					</li>
					<li className={natureIsVissible ? "themeVissible" : ""} data-link="nature" ref={natureRef}>
						<button
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleThemeChange("natureTheme");
								}
							}}>
							<img
								src={themeNature}
								alt="Nature theme"
								loading="lazy"
								title="Nature theme"
								onClick={() => {
									handleThemeChange("natureTheme");
								}}
							/>
						</button>
						<p>Nature</p>
					</li>
					<li className={spaceIsVissible ? "themeVissible" : ""} data-link="space" ref={spaceRef}>
						<button
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleThemeChange("spaceTheme");
								}
							}}>
							<img
								src={themeSpace}
								alt="Space theme"
								loading="lazy"
								title="Space theme"
								onClick={() => {
									handleThemeChange("spaceTheme");
								}}
							/>
						</button>
						<p>Space</p>
					</li>
				</ul>
			</main>
		</>
	);
}
