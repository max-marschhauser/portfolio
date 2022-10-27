import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Navbar() {
	return (
		<div>
			<nav>
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/cart">Cart</NavLink>
			</nav>
			<Outlet />
			<Footer />
		</div>
	);
}
