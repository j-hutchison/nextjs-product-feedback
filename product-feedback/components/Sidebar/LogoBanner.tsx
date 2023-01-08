import React from "react";
import Image from "next/image";
import classes from "./LogoBanner.module.css";
import logobg from "../../assets/suggestions/desktop/background-header.png";

// Handle SVGs
import MenuIcon from "../../icons/MenuIcon";
import CloseIcon from "../../icons/CloseIcon";

interface LogoBannerProps {
	onMenuIconClick: () => void;
}

const LogoBanner: React.FC<LogoBannerProps> = (props) => {
	const componentClasses = [classes.logo].join(" ");

	return (
		<div className={componentClasses}>
			{/* Render here for desktop and at same level as sidebar for mobile */}
			<Image
				className={classes["logo-img"]}
				src={logobg}
				alt="A multicolor neon background"
				width={255}
				height={137}
				quality={50}
			/>
			<div className={classes["sidebar-headings"]}>
				<h1 className={classes["heading-primary"]}>Frontend Mentor</h1>
				<h2 className={classes["heading-secondary"]}>Feedback Board</h2>
			</div>
			<span
				className={classes["sidebar-mobile-icon"]}
				onClick={props.onMenuIconClick}
			>
				<MenuIcon />
				{/* <CloseIcon /> */}
			</span>
		</div>
	);
};

export default LogoBanner;
