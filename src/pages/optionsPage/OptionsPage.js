// options page, contains options for selecting theme of page

// importing general items
import React, { useEffect } from "react";

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

	return (
		<>
			<h2
				className={
					theme === "iceTheme"
						? "pageHeading iceThemeImage"
						: theme === "twilightTheme"
						? "pageHeading twilightThemeImage"
						: theme === "natureTheme"
						? "pageHeading natureThemeImage"
						: theme === "spaceTheme"
						? "pageHeading spaceThemeImage"
						: "pageHeading"
				}>
				Options
				<p>Change theme and language of this page</p>
			</h2>
			<main className="optionsPage">
				<h3>Select theme</h3>
				<ul>
					<li>
						<button>
							<img
								src={themeIce}
								alt="Ice theme"
								title="Ice theme"
								onClick={() => {
									handleThemeChange("iceTheme");
								}}
							/>
						</button>
					</li>
					<li>
						<button>
							<img
								src={themeTwilight}
								alt="Twilight theme"
								title="Twilight theme"
								onClick={() => {
									handleThemeChange("twilightTheme");
								}}
							/>
						</button>
					</li>
					<li>
						<button>
							<img
								src={themeNature}
								alt="Nature theme"
								title="Nature theme"
								onClick={() => {
									handleThemeChange("natureTheme");
								}}
							/>
						</button>
					</li>
					<li>
						<button>
							<img
								src={themeSpace}
								alt="Space theme"
								title="Space theme"
								onClick={() => {
									handleThemeChange("spaceTheme");
								}}
							/>
						</button>
					</li>
				</ul>
			</main>
			;
		</>
	);
}
