import React, { useState } from "react";
import classes from "./InputField.module.css";

interface InputFieldProps {
	type: string;
	errorMessage: string;
	size?: "sm" | "md" | "lg";
}

const InputField: React.FC<InputFieldProps> = (props) => {
	const [hasError, setHasError] = useState(true);
	const inputFieldClasses = [
		classes["input"],
		hasError && classes["error"],
	].join(" ");

	return (
		<div className={classes.container}>
			<input className={inputFieldClasses} type={props.type} />
			<span className={classes["error-message"]}>{props.errorMessage}</span>
		</div>
	);
};

export default InputField;
