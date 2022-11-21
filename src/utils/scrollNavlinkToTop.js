// when user clicks navbar or footer links that work with react router, they will be transfered to the top of the page

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollNavlinkToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
