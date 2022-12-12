// main app file

// importing general items
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import Layout from "./layout/layout/Layout";
import Home from "./pages/home/Home";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NoPage from "./pages/noPage/NoPage";

// importing styles
import "./assets/styles/styles.scss";

// importing utils
import ScrollNavlinkToTop from "./utils/scrollNavlinkToTop";

export default function App() {
	return (
		<BrowserRouter>
			<ScrollNavlinkToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="skills" element={<SkillsPage />} />
					<Route path="projects" element={<ProjectsPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
