import React, { ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
	children: ReactNode;
	color: string;
	hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	const btnColor = props.color;

	return (
		<button className={`${classes.btn} ${classes[btnColor]}`}>
			{props.hasIcon && (
				<span className={`${classes.icon} material-symbols-outlined`}>
					chevron_left
				</span>
			)}
			{props.children}
		</button>
	);
};

export default Button;
