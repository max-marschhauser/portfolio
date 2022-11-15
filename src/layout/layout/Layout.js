import { Outlet, Link } from "react-router-dom";
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
								<Link className="navbar__link" to="/" end>
									Home
								</Link>
							</li>
							<li>
								<Link className="navbar__link" to="/skills">
									Skills
								</Link>
							</li>
							<li>
								<Link className="navbar__link" to="/projects">
									Projects
								</Link>
							</li>
							<li>
								<Link className="navbar__link" to="/about">
									About
								</Link>
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
