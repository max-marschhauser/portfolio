// page layout, contains aside bar with page logo and navbar links, uses react router

// importing general items
import React from "react";
import { Outlet } from "react-router-dom";

// importing components
import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/Footer.js";

export default function Layout(props) {
	let { activePage } = props;
	return (
		<>
			<Navbar activePage={activePage} />
			<Outlet />
			<Footer activePage={activePage} />
		</>
	);
}
