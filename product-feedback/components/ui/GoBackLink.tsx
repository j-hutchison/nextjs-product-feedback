import React from "react";
import Link from "next/link";
import ArrowIcon from "../../icons/ArrowIcon";

import classes from "./GoBackLink.module.css";

const GoBackLink = () => {
	return (
		<div className={classes["navigate-back"]}>
			<ArrowIcon type="left" />
			<Link href="/">Go Back</Link>
		</div>
	);
};

export default GoBackLink;
