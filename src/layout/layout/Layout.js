// page layout, contains aside bar with page logo and navbar links, uses react router

// importing general items
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// importing components
import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/Footer.js";

export default function Layout() {
	let [activePage, setActivePage] = useState("");

	const url = window.location.pathname;

	useEffect(() => {
		setActivePage(url);
	}, [url]);

	return (
		<>
			<Navbar activePage={activePage} />
			<Outlet />
			<Footer activePage={activePage} />
		</>
	);
}
