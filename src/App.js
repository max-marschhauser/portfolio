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

	return (
		<BrowserRouter>
			<ScrollNavlinkToTop />
			<Routes>
				<Route path="/" element={<Layout activePage={activePage} />}>
					<Route index element={<Home setActivePage={setActivePage} />} />
					<Route path="skills" element={<SkillsPage setActivePage={setActivePage} />} />
					<Route path="projects" element={<ProjectsPage setActivePage={setActivePage} />} />
					<Route path="about" element={<AboutPage setActivePage={setActivePage} />} />
					<Route path="contact" element={<ContactPage setActivePage={setActivePage} />} />
					<Route path="*" element={<NoPage setActivePage={setActivePage} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
