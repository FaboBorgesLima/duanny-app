import React, { FC } from "react";
import "./clickCounter.scss";

interface ClickCounterProps {
	count: number;
	perSecond: number;
}

const ClickCounter: FC<ClickCounterProps> = (props) => {
	return (
		<div id="counter">
			<h2>{props.count.toFixed(1)} aykas</h2>
			<h3>{props.perSecond.toFixed(1)} aykas/s</h3>
		</div>
	);
};

export { ClickCounter };
