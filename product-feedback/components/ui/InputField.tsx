import React, { useState } from "react";
import classes from "./InputField.module.css";

interface InputFieldProps {
	type: string;
	errorMessage: string;
	id: string;
	label?: string;
	description?: string;
	size?: "sm" | "md" | "lg";
	rows?: number;
}

const InputField: React.FC<InputFieldProps> = (props) => {
	const [hasError, setHasError] = useState(false);
	const inputFieldClasses = [
		classes["input"],
		hasError && classes["error"],
	].join(" ");

	return (
		<div className={classes.container}>
			<div className={classes["input-labels"]}>
				{props.label && (
					<label className={classes["input-label"]} htmlFor={props.id}>
						{props.label}
					</label>
				)}
				{props.description && (
					<p className={classes["input-description"]}>{props.description}</p>
				)}
			</div>
			{props.type === "textarea" && (
				<textarea
					id={props.id}
					className={inputFieldClasses}
					rows={props.rows}
				/>
			)}
			{props.type !== "textarea" && (
				<input id={props.id} className={inputFieldClasses} type={props.type} />
			)}
			{hasError && (
				<span className={classes["error-message"]}>{props.errorMessage}</span>
			)}
		</div>
	);
};

export default InputField;
