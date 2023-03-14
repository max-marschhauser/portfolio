// about page, contains basic informations about myself

// importing general items
import React, { useState, useEffect, useRef } from "react";

// importing styles
import "./contactPage.scss";

// importing images
import profileImage from "../../assets/images/profile.png";

export default function ContactPage(props) {
	let { handlePageChange, theme } = props;
	useEffect(() => {
		handlePageChange("contact");
	}, [handlePageChange]);

	const ProfileImageRef = useRef();
	const EmailRef = useRef();
	const PhoneNumberRef = useRef();

	const [profileImageIsVissible, setProfileImageIsVissible] = useState(false);
	const [emailIsVissible, setEmailIsVissible] = useState(false);
	const [phoneNumberIsVissible, setPhoneNumberIsVissible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				let target = item.target.dataset.name;

				switch (target) {
					case "profileImage": {
						setProfileImageIsVissible(item.isIntersecting);
						break;
					}
					case "email": {
						setEmailIsVissible(item.isIntersecting);
						break;
					}
					case "phoneNumber": {
						setPhoneNumberIsVissible(item.isIntersecting);
						break;
					}
					default: {
						break;
					}
				}
			});
		});
		observer.observe(ProfileImageRef.current);
		observer.observe(EmailRef.current);
		observer.observe(PhoneNumberRef.current);
	}, []);

	return (
		<>
			<h2
				className={
					theme === "iceTheme" || theme === "spaceTheme"
						? "pageHeading darkTheme"
						: theme === "twilightTheme" || theme === "natureTheme"
						? "pageHeading lightTheme"
						: "pageHeading"
				}>
				Contact
				<p>How to contact me?</p>
			</h2>
			<main className="contactPage">
				<div
					ref={ProfileImageRef}
					data-name="profileImage"
					className={
						profileImageIsVissible === true
							? "imageVissible contactsImageContainer"
							: "contactsImageContainer"
					}>
					<img src={profileImage} alt="max-marschhauser-profile" loading="lazy" />
				</div>
				<ul>
					<li ref={EmailRef} data-name="email" className={emailIsVissible === true ? "itemVissible" : ""}>
						<ion-icon name="mail-sharp"></ion-icon>
						<span>E-mail: </span>
						<br />
						max.marschhauser
						<wbr />
						@gmail.com
					</li>
					<li
						ref={PhoneNumberRef}
						data-name="phoneNumber"
						className={phoneNumberIsVissible === true ? "itemVissible" : ""}>
						<ion-icon name="call-sharp"></ion-icon>
						<span>Phone: </span>
						<br />
						+385 (98) 921 0125
					</li>
				</ul>
			</main>
		</>
	);
}
