import React, { FC } from "react";
import { MainPages } from "../../App";
import "./navBar.scss";

interface NavBarProps {
	selectedItem: MainPages;
	onClick(clicked: MainPages): undefined;
}

const NavBar: FC<NavBarProps> = (props) => {
	const selectedStyle: { [K in MainPages]: string } = {
		Home: "text-red",
		Games: "text-red",
		Photos: "text-red",
	};

	selectedStyle[props.selectedItem] = "text-purple";

	return (
		<nav className="bg-pink p-1">
			<div className="d-flex justify-content-space-between container">
				<button
					onClick={() => {
						props.onClick("Photos");
					}}
					className={
						"bi bi-image-fill fs-1 bg-pink border-none " + selectedStyle.Photos
					}></button>
				<button
					onClick={() => {
						props.onClick("Home");
					}}
					className={
						"bi bi-house-fill fs-1 bg-pink text-red border-none " +
						selectedStyle.Home
					}></button>
				<button
					onClick={() => {
						props.onClick("Games");
					}}
					className={
						"bi bi-joystick fs-1 bg-pink text-red border-none " +
						selectedStyle.Games
					}></button>
			</div>
		</nav>
	);
};

export { NavBar };
