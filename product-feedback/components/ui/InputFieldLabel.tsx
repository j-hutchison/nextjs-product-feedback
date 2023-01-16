import React from "react";
import classes from "./InputFieldLabel.module.css";

interface InputFieldLabelProps {
	htmlFor: string;
	label?: string;
	description?: string;
}

const InputFieldLabel: React.FC<InputFieldLabelProps> = (props) => {
	return (
		<div className={classes["input-labels"]}>
			{props.label && (
				<label className={classes["input-label"]} htmlFor={props.htmlFor}>
					{props.label}
				</label>
			)}
			{props.description && (
				<p className={classes["input-description"]}>{props.description}</p>
			)}
		</div>
	);
};

export default InputFieldLabel;
