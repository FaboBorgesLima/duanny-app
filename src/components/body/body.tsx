import React, { FC } from "react";
import { ChildrenType } from "../../App";
import "./body.scss";
import "../../scss/style.scss";

interface BodyProps {
	children: ChildrenType;
}

const Body: FC<BodyProps> = (props) => {
	return <main className="container">{props.children}</main>;
};
export { Body };
