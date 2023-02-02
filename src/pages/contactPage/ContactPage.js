// about page, contains basic informations about myself

// importing general items
import React from "react";

// importing styles
import "./contactPage.scss";

// importing images
import profileImage from "../../assets/images/manstanding.jpg";

export default function ContactPage() {
	return (
		<>
			<h2 className="pageHeading">
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
