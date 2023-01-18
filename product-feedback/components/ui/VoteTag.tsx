import React, { useState } from "react";
import classes from "./VoteTag.module.css";

interface VoteTagProps {
	value: number;
}

const VoteTag: React.FC<VoteTagProps> = (props) => {
	const [votes, setVotes] = useState(props.value);
	const [isActive, setIsActive] = useState(false);

	const handleClick = (e: React.MouseEvent) => {
		setIsActive((prevValue) => {
			if (!prevValue) setVotes((prevVotes) => prevVotes + 1);
			if (prevValue) setVotes((prevVotes) => prevVotes - 1);
			return !prevValue;
		});
	};

	return (
		<div
			className={`${classes["vote-tag"]} ${isActive && classes["active"]}`}
			onClick={handleClick}
		>
			<span className={`${classes.icon} material-symbols-outlined`}>
				expand_less
			</span>
			<span className={classes.number}>{votes}</span>
		</div>
	);
};

export default VoteTag;
