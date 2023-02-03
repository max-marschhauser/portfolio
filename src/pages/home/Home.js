// projects page, contains landing page

// importing general items
import React, { useEffect } from "react";

// importing styles
import "./home.scss";

// importing images
import manImage from "../../assets/images/manstanding.jpg";

export default function Home(props) {
	let { handlePageChange } = props;
	useEffect(() => {
		handlePageChange("home");
	}, [handlePageChange]);

	return (
		<>
			<section className="homePage">
				<img src={manImage} alt="max-marschhauser-profile" />
				<div className="text">
					<h1>MAX MARSCHHAUSER</h1>
					<h2>
						<span>&lt;</span> <span>React Frontend Developer</span> <span>&gt;</span>
					</h2>
				</div>
			</section>
		</>
	);
}
