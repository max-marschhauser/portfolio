// page is displayed if there is no valid url link

import React from "react";
import { useNavigate } from "react-router-dom";
import "./anotherPage.scss";

export default function AnotherPage() {
	const navigate = useNavigate();

	return <p>Another Page</p>;
}
