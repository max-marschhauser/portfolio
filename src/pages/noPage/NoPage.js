// page is displayed if there is no valid url link

import React from "react";
import { useNavigate } from "react-router-dom";
import "./noPage.scss";

export default function NoPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	});

	return (
		<div className="noPage--container">
			<span>?</span>
			No such page found, redirecting back to home page in a few moments
			<span>?</span>
		</div>
	);
}
