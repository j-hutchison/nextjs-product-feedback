import React, { useState } from "react";
import classes from "./Tag.module.css";

interface TagProps {
	text: string;
	onClick: (e: React.MouseEvent) => void;
	isActive?: boolean;
}

const Tag: React.FC<TagProps> = (props) => {
	const [isActive, setIsActive] = useState(props.isActive);

	const tagClasses = [
		classes.tag,
		classes.text,
		isActive && classes.active,
	].join(" ");

	const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
		props.onClick(event);
	};

	return (
		<li className={tagClasses} onClick={handleClick}>
			{/* <span className={classes.text}>{props.text}</span> */}
			{props.text}
		</li>
	);
};

export default Tag;
