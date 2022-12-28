import React from "react";
import classes from "./Tag.module.css";

interface TagProps {
	text: string;
}

const Tag: React.FC<TagProps> = (props) => {
	return (
		<div className={`${classes["tag"]}`}>
			<span className={classes.number}>{props.text}</span>
		</div>
	);
};

export default Tag;
