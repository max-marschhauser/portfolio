import { Outlet, Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./layout.scss";

export default function Layout() {
	return (
		<>
			<div className="pageContainer">
				<nav id="top">
					<ul>
						<li>
							<Link to="/" end>
								Home
							</Link>
						</li>
						<li>
							<Link to="/skills">Skills</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
