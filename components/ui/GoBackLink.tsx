import React from "react";
import { useNextRouter } from "../../helpers/NavigationHelpers";
import Link from "next/link";
import ArrowIcon from "../../icons/ArrowIcon";

import classes from "./GoBackLink.module.css";

interface GoBackLinkProps {
	color?: string;
}

const GoBackLink: React.FC<GoBackLinkProps> = (props) => {
	const router = useNextRouter();

	const linkClasses = [
		`${classes["navigate-back"]}`,
		props.color ? classes["navigate-back--white"] : "",
	].join(" ");

	return (
		<div className={linkClasses}>
			<ArrowIcon type="left" />
			<Link href="#" onClick={() => router.back()}>
				Go Back
			</Link>
		</div>
	);
};

export default GoBackLink;
