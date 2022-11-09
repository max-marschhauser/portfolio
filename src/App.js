import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout/Layout";
import Home from "./pages/home/Home";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NoPage from "./pages/noPage/NoPage";
import "./assets/styles/styles.scss";

export default function App() {
	return (
		<BrowserRouter>
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
