// page is displayed if there is no valid url link

import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./noPage.scss";

export default function NoPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	});

	return <p>No such page found, redirecting back to home page!</p>;
}
