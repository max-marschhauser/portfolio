// main app file

// importing general items
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// importing pages
import Layout from "./layout/layout/Layout";
import Home from "./pages/home/Home";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import NoPage from "./pages/noPage/NoPage";

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
					<Route path="*" element={<NoPage handlePageChange={handlePageChange} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
