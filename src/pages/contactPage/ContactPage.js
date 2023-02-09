// about page, contains basic informations about myself

// importing general items
import React, { useEffect } from "react";

// importing styles
import "./contactPage.scss";

// importing images
import profileImage from "../../assets/images/manstanding.jpg";

export default function ContactPage(props) {
	let { handlePageChange, theme } = props;
	useEffect(() => {
		handlePageChange("contact");
	}, [handlePageChange]);

	return (
		<>
			<h2
				className={
					theme === "lightTheme"
						? "pageHeading lightThemeImage"
						: theme === "darkTheme"
						? "pageHeading darkThemeImage"
						: theme === "natureTheme"
						? "pageHeading natureThemeImage"
						: theme === "spaceTheme"
						? "pageHeading spaceThemeImage"
						: "pageHeading"
				}>
				Contact
				<p>How to contact me?</p>
			</h2>

			<main className="contactPage">
				<img src={profileImage} alt="max-marschhauser-profile" />
				<ul>
					<li>
						<ion-icon name="mail-sharp"></ion-icon>
						<span>E-mail: </span>
						<br />
						max.marschhauser
						<wbr />
						@gmail.com
					</li>
					<li>
						<ion-icon name="call-sharp"></ion-icon>
						<span>Phone: </span>
						<br />
						098 / 921 - 0125
					</li>
				</ul>
			</main>
		</>
	);
}
