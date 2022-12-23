// page is displayed if there is no valid url link

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./noPage.scss";
import ReactImage from "../../assets/images/skills/React.png";

export default function NoPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	});

	return (
		<div className="noPage--container">
			<p>No such page found, redirecting back to home page in a few moments...</p>
			<img className="reactImage" src={ReactImage} alt="react-logo" />
		</div>
	);
}
