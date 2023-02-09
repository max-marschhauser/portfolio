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
	const [theme, setTheme] = useState("natureTheme");
	function handleThemeChange(selectedTheme) {
		setTheme(selectedTheme);
	}
	const root = document.querySelector(":root");
	useEffect(() => {
		switch (theme) {
			case "lightTheme":
				root.style.setProperty("--color-dark", "hsl(125, 20%, 10%)");
				root.style.setProperty("--color-light", "hsl(10, 10%, 90%)");
				root.style.setProperty("--color-primary", "hsl(129, 34%, 30%)");
				root.style.setProperty("--color-primary-transparent", "hsla(129, 34%, 30%, 0.6)");
				root.style.setProperty("--color-action", "hsl(16, 90%, 60%)");
				break;

			case "darkTheme":
				root.style.setProperty("--color-dark", "hsl(125, 20%, 10%)");
				root.style.setProperty("--color-light", "hsl(10, 10%, 90%)");
				root.style.setProperty("--color-primary", "hsl(129, 34%, 30%)");
				root.style.setProperty("--color-primary-transparent", "hsla(129, 34%, 30%, 0.6)");
				root.style.setProperty("--color-action", "hsl(16, 90%, 60%)");
				break;

			case "natureTheme":
				root.style.setProperty("--color-dark", "hsl(125, 20%, 10%)");
				root.style.setProperty("--color-light", "hsl(10, 10%, 90%)");
				root.style.setProperty("--color-primary", "hsl(129, 34%, 30%)");
				root.style.setProperty("--color-primary-transparent", "hsla(129, 34%, 30%, 0.6)");
				root.style.setProperty("--color-action", "hsl(16, 90%, 60%)");
				break;

			case "spaceTheme":
				root.style.setProperty("--color-dark", "hsl(125, 20%, 10%)");
				root.style.setProperty("--color-light", "hsl(10, 10%, 90%)");
				root.style.setProperty("--color-primary", "hsl(129, 34%, 30%)");
				root.style.setProperty("--color-primary-transparent", "hsla(129, 34%, 30%, 0.6)");
				root.style.setProperty("--color-action", "hsl(16, 90%, 60%)");
				break;

			default:
				root.style.setProperty("--color-dark", "");
				root.style.setProperty("--color-light", "");
				root.style.setProperty("--color-primary", "");
				root.style.setProperty("--color-primary-transparent", "");
				root.style.setProperty("--color-action", "");
		}
	}, [theme, root.style]);

	//const [language, setLanguage] = useState("eng"); //eng, hr

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
