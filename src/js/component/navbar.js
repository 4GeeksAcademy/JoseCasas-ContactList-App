import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mt-auto mb-3 text-center">
			<Link to="/">
				<img
					src="https://seeklogo.com/images/G/google-contacts-logo-A07A806C3B-seeklogo.com.png"
					className="mx-5"
					style={{ height: "60px" }}
				/>
				<span className="navbar-brand h1"><i class="fa-regular fa-address-book"></i>Jose's Contact List</span>
			</Link>
		</nav>
	);
};
