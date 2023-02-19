// page layout, contains aside bar with page logo and navbar links, uses react router

// importing general items
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// importing components
import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/Footer.js";

export default function Layout(props) {
	let { activePage } = props;

	let [mobileNavbar, setMobileNavbar] = useState(false);

	function toggleMobileNabar() {
		setMobileNavbar((current) => !current);
	}

	function closeMobileNavbar() {
		setMobileNavbar(false);
	}

	return (
		<>
			<Navbar
				activePage={activePage}
				mobileNavbar={mobileNavbar}
				toggleMobileNabar={toggleMobileNabar}
				closeMobileNavbar={closeMobileNavbar}
			/>
			<Outlet />
			<Footer activePage={activePage} closeMobileNavbar={closeMobileNavbar} />
		</>
	);
}
