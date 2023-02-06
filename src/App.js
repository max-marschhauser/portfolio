// main app file

// importing general items
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// importing layout
import Layout from "./layout/layout/Layout.js";

// importing pages
import Home from "./pages/home/Home.js";
import SkillsPage from "./pages/skillsPage/SkillsPage.js";
import ProjectsPage from "./pages/projectsPage/ProjectsPage.js";
import AboutPage from "./pages/aboutPage/AboutPage.js";
import ContactPage from "./pages/contactPage/ContactPage.js";
import OptionsPage from "./pages/optionsPage/OptionsPage.js";
import NoPage from "./pages/noPage/NoPage.js";

// importing styles
import "./assets/styles/styles.scss";

// importing utils
import ScrollNavlinkToTop from "./utils/scrollNavlinkToTop";

export default function App() {
	let [activePage, setActivePage] = useState("home");

	function handlePageChange(page) {
		setActivePage(page);
	}

	return (
		<BrowserRouter>
			<ScrollNavlinkToTop />
			<Routes>
				<Route path="/" element={<Layout activePage={activePage} />}>
					<Route index element={<Home handlePageChange={handlePageChange} />} />
					<Route path="skills" element={<SkillsPage handlePageChange={handlePageChange} />} />
					<Route path="projects" element={<ProjectsPage handlePageChange={handlePageChange} />} />
					<Route path="about" element={<AboutPage handlePageChange={handlePageChange} />} />
					<Route path="contact" element={<ContactPage handlePageChange={handlePageChange} />} />
					<Route path="options" element={<OptionsPage handlePageChange={handlePageChange} />} />
					<Route path="*" element={<NoPage handlePageChange={handlePageChange} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
