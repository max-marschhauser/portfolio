// options page, contains options for selecting theme and language of page

// importing general items
import React, { useEffect } from "react";

// importing styles
import "./optionsPage.scss";

// importing images
import themeLight from "../../assets/images/options/themeLight.jpg";
import themeDark from "../../assets/images/options/themeDark.jpg";
import themeNature from "../../assets/images/options/themeNature.jpg";
import themeSpace from "../../assets/images/options/themeSpace.jpg";

import english from "../../assets/images/options/english.png";
import croatian from "../../assets/images/options/croatian.png";

export default function OptionsPage(props) {
	let { handlePageChange } = props;
	useEffect(() => {
		handlePageChange("options");
	}, [handlePageChange]);

	return (
		<>
			<h2 className="pageHeading">
				Options
				<p>Change theme and language of this page</p>
			</h2>
			<main className="optionsPage">
				<h3>Select theme</h3>
				<ul>
					<li>
						<button>
							<img src={themeLight} alt="Light theme" title="Light theme" />
						</button>
					</li>
					<li>
						<button>
							<img src={themeDark} alt="Dark theme" title="Dark theme" />
						</button>
					</li>
					<li>
						<button>
							<img src={themeNature} alt="Nature theme" title="Nature theme" />
						</button>
					</li>
					<li>
						<button>
							<img src={themeSpace} alt="Space theme" title="Space theme" />
						</button>
					</li>
				</ul>
				<h3>Select language</h3>
				<ul className="languages">
					<button>
						<img src={english} alt="english" />
					</button>
					<button>
						<img src={croatian} alt="croatian" />
					</button>
				</ul>
			</main>
			;
		</>
	);
}
