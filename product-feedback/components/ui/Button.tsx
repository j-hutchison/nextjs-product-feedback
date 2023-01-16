import React, { ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
	children: ReactNode;
	color: string;
	iconName?: string;
	onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
	const btnColor = props.color;

	return (
		<button
			className={`${classes.btn} ${classes[btnColor]}`}
			onClick={props.onClick}
		>
			{props.iconName && (
				<span className={`${classes.icon} material-symbols-outlined`}>
					{props.iconName}
				</span>
			)}
			{props.children}
		</button>
	);
};

export default Button;
