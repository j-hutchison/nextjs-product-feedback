import React, { useState } from "react";
import classes from "./VoteTag.module.css";

interface VoteTagProps {
	value: number;
}

const VoteTag: React.FC<VoteTagProps> = (props) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={`${classes["vote-tag"]} ${isActive && classes["active"]}`}>
			<span className={`${classes.icon} material-symbols-outlined`}>
				expand_less
			</span>
			<span className={classes.number}>{props.value}</span>
		</div>
	);
};

export default VoteTag;
