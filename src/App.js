import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout/Layout";
import Home from "./pages/home/Home";
import AnotherPage from "./pages/anotherPage/AnotherPage";
import NoPage from "./pages/noPage/NoPage";
import "./assets/styles/styles.scss";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="AnotherPage" element={<AnotherPage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
