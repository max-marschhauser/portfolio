// main app file

// importing general items
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
	const [activePage, setActivePage] = useState("home");
	function handlePageChange(page) {
		setActivePage(page);
	}

	//theme selector
	let localTheme = localStorage.getItem("theme");

	if (localTheme === null) {
		localStorage.setItem("theme", "iceTheme");
		localTheme = "iceTheme";
	}

	const [theme, setTheme] = useState(localTheme);
	function handleThemeChange(selectedTheme) {
		setTheme(selectedTheme);
	}

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const root = document.querySelector(":root");

	useEffect(() => {
		switch (theme) {
			case "iceTheme":
				root.style.setProperty("--color-dark", "hsl(220, 100%, 10%)");
				root.style.setProperty("--color-dark-transparent", "hsla(220, 100%, 10%, 0.6)");
				root.style.setProperty("--color-light", "hsl(220, 100%, 95%)");
				root.style.setProperty("--color-primary", "hsl(220, 25%, 40%)");
				root.style.setProperty("--color-primary-transparent", "hsla(220, 25%, 40%, 0.6)");
				root.style.setProperty("--color-action", "hsl(185, 100%, 50%)");
				break;

			case "twilightTheme":
				root.style.setProperty("--color-dark", "hsl(285, 100%, 10%)");
				root.style.setProperty("--color-dark-transparent", "hsla(285, 100%, 10%, 0.6)");
				root.style.setProperty("--color-light", "hsl(285, 100%, 95%)");
				root.style.setProperty("--color-primary", "hsl(285, 25%, 40%)");
				root.style.setProperty("--color-primary-transparent", "hsla(285, 25%, 40%, 0.6)");
				root.style.setProperty("--color-action", "hsl(305, 100%, 50%)");
				break;

			case "natureTheme":
				root.style.setProperty("--color-dark", "hsl(125, 100%, 10%)");
				root.style.setProperty("--color-dark-transparent", "hsla(125, 100%, 10%, 0.6)");
				root.style.setProperty("--color-light", "hsl(125, 100%, 95%)");
				root.style.setProperty("--color-primary", "hsl(125, 25%, 40%)");
				root.style.setProperty("--color-primary-transparent", "hsla(125, 25%, 40%, 0.6)");
				root.style.setProperty("--color-action", "hsl(16, 100%, 50%)");
				break;

			case "spaceTheme":
				root.style.setProperty("--color-dark", "hsl(245, 100%, 10%)");
				root.style.setProperty("--color-dark-transparent", "hsla(245, 100%, 10%, 0.6)");
				root.style.setProperty("--color-light", "hsl(245, 100%, 95%)");
				root.style.setProperty("--color-primary", "hsl(245, 25%, 40%)");
				root.style.setProperty("--color-primary-transparent", "hsla(245, 25%, 40%, 0.6)");
				root.style.setProperty("--color-action", "hsl(290, 100%, 50%)");
				break;

			default:
		}
	}, [theme, root.style]);

	return (
		<div className="root">
			<BrowserRouter>
				<ScrollNavlinkToTop />
				<Routes>
					<Route path="/" element={<Layout activePage={activePage} />}>
						<Route index element={<Home handlePageChange={handlePageChange} theme={theme} />} />
						<Route
							path="skills"
							element={<SkillsPage handlePageChange={handlePageChange} theme={theme} />}
						/>
						<Route
							path="projects"
							element={<ProjectsPage handlePageChange={handlePageChange} theme={theme} />}
						/>
						<Route path="about" element={<AboutPage handlePageChange={handlePageChange} theme={theme} />} />
						<Route
							path="contact"
							element={<ContactPage handlePageChange={handlePageChange} theme={theme} />}
						/>
						<Route
							path="options"
							element={
								<OptionsPage
									handlePageChange={handlePageChange}
									handleThemeChange={handleThemeChange}
									theme={theme}
								/>
							}
						/>
						<Route path="*" element={<NoPage handlePageChange={handlePageChange} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
