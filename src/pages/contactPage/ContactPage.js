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
			<div
				className={
					theme === "iceTheme" || theme === "spaceTheme"
						? "pageHeading darkTheme"
						: theme === "twilightTheme" || theme === "natureTheme"
						? "pageHeading lightTheme"
						: "pageHeading"
				}>
				<h2>Contact</h2>
				<p>How to contact me?</p>
			</div>
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
						<svg viewBox="0 0 512 512">
							<path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z" />
						</svg>
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
						<svg viewBox="0 0 512 512">
							<path d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 00-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 00.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 00-3.89-.87 322.35 322.35 0 00-56 25.45A338 338 0 0033.35 92a3.83 3.83 0 00-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 003.75-1.26A337.73 337.73 0 00454.35 430a322.7 322.7 0 0025.45-56 3.9 3.9 0 00-.86-3.86z" />
						</svg>
						<span>Phone: </span>
						<br />
						+385 (98) 921 0125
					</li>
				</ul>
			</main>
		</>
	);
}
