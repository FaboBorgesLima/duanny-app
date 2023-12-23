import React, { FC } from "react";
import "../../scss/style.scss";
import "./header.scss";

interface HeaderProps {
	title: string;
}

const Header: FC<HeaderProps> = (props: HeaderProps): JSX.Element => {
	return (
		<header className="bg-red p-1">
			<h1 className="text-center">{props.title}</h1>
		</header>
	);
};

export { Header };
