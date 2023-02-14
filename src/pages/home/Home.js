// projects page, contains landing page

// importing general items
import React, { useEffect } from "react";

// importing styles
import "./home.scss";

// importing components
import NavigationGrid from "./components/NavigationGrid.js";

// importing images
import profileImage from "../../assets/images/profile.png";

export default function Home(props) {
	let { handlePageChange, theme } = props;
	useEffect(() => {
		handlePageChange("home");
	}, [handlePageChange]);

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
				<div className="profileImageContainer">
					<img src={profileImage} alt="max-marschhauser-profile" />
				</div>
				<div className="text">
					<h1>MAX MARSCHHAUSER</h1>
					<h2>
						<span>&lt;</span> <span>React Frontend Developer</span> <span>&gt;</span>
					</h2>
				</div>
			</section>
			<NavigationGrid />
		</>
	);
}
