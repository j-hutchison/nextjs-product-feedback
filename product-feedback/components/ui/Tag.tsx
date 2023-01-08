import React, { useState } from "react";
import classes from "./Tag.module.css";

interface TagProps {
	text: string;
	onClick: () => void;
	isActive?: boolean;
}

const Tag: React.FC<TagProps> = (props) => {
	const [isActive, setIsActive] = useState(props.isActive);

	const tagClasses = [classes.tag, isActive && classes.active].join(" ");

	const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
		props.onClick();
	};

	return (
		<li className={tagClasses}>
			<span className={classes.text} onClick={handleClick}>
				{props.text}
			</span>
		</li>
	);
};

export default Tag;
