import { FC } from "react";
import React, { ChildrenType } from "../../App";
import "./section.scss";

interface SectionProps {
	children: ChildrenType;
	title: string;
}

const Section: FC<SectionProps> = (props) => {
	return (
		<section className="section">
			<h2>{props.title}</h2>
			{props.children}
		</section>
	);
};

export { Section };
