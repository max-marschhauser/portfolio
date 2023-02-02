// page layout, contains aside bar with page logo and navbar links, uses react router

// importing general items
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// importing components
import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/Footer.js";

export default function Layout() {
	let [activePage, setActivePage] = useState("");

	useEffect(() => {
		setActivePage(window.location.pathname);
	}, []);

	function handleLinkClick() {
		setActivePage(window.location.pathname);
	}

	return (
		<>
			<Navbar activePage={activePage} handleLinkClick={handleLinkClick} />
			<Outlet />
			<Footer activePage={activePage} handleLinkClick={handleLinkClick} />
		</>
	);
}
