import React from "react";
import classes from "./SidebarStatusIndicator.module.css";

interface SidebarStatusProps {
	count?: number;
	text: string;
	color?: string;
}

const SidebarStatusIndicator: React.FC<SidebarStatusProps> = (props) => {
	const color = props.color;
	console.log(color);

	const iconClasses = [classes["status-icon"], color && classes[color]].join(
		" "
	);

	return (
		<li className={classes["status-item"]}>
			<div className={classes["status-status"]}>
				<span className={iconClasses}></span>
				<span>{props.text}</span>
			</div>
			<span className={classes["status-count"]}>{props.count}</span>
		</li>
	);
};

export default SidebarStatusIndicator;
