import React, { useState } from "react";
import { Header, NavBar, Body } from "./components/";
import { CustomRouter } from "./utils/router";

function App() {
	const [selectedItem, setSelectedItem] = useState<MainPages>("Home");

	return (
		<>
			<Header title={selectedItem}></Header>
			<Body>
				<CustomRouter page={selectedItem}></CustomRouter>
			</Body>
			<NavBar
				onClick={(selected) => {
					setSelectedItem(selected);
					return undefined;
				}}
				selectedItem={selectedItem}></NavBar>
		</>
	);
}

export type MainPages = "Home" | "Games" | "Photos";

export type ChildrenType = string | JSX.Element | JSX.Element[];

export default App;
