import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import "./layout.scss";

export default function Layout() {
	return (
		<>
			<div className="pageContainer">
				<aside className="aside">
					<div className="logo">
						<span>MAX</span>
						<span> Marschhauser</span>
						<span>
							React Frontend <wbr />
							Developer
						</span>
					</div>
					<nav id="top">
						<ul>
							<li>
								<NavLink className="navbar__link" to="/" end>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink className="navbar__link" to="/skills">
									Skills
								</NavLink>
							</li>
							<li>
								<NavLink className="navbar__link" to="/projects">
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink className="navbar__link navbar__link--active" to="/about">
									About
								</NavLink>
							</li>
						</ul>
					</nav>
				</aside>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
