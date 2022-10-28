import { Outlet, Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/" end>
							Home
						</Link>
					</li>
					<li>
						<Link to="/anotherPage">Another Page</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<Footer />
		</>
	);
}
