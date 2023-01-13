import React, { useState, useImperativeHandle, useRef } from "react";
import classes from "./InputField.module.css";

export interface InputRef {
	focus: () => void;
}

interface InputFieldProps {
	type: string;
	errorMessage: string;
	id: string;
	placeholder?: string;
	label?: string;
	description?: string;
	size?: "sm" | "md" | "lg";
	rows?: number;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

const InputField = React.forwardRef<InputRef, InputFieldProps>((props, ref) => {
	const [hasError, setHasError] = useState(false);
	const inputFieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

	const inputFieldClasses = [
		classes["input"],
		hasError && classes["error"],
	].join(" ");

	const focus = () => {
		inputFieldRef.current?.focus();
	};

	useImperativeHandle(ref, () => ({ focus }));

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
					placeholder={props.placeholder}
					ref={inputFieldRef}
					id={props.id}
					className={inputFieldClasses}
					rows={props.rows}
					onChange={props.onChange}
				/>
			)}
			{props.type !== "textarea" && (
				<input
					placeholder={props.placeholder}
					ref={inputFieldRef}
					id={props.id}
					className={inputFieldClasses}
					type={props.type}
					onChange={props.onChange}
				/>
			)}
			{hasError && (
				<span className={classes["error-message"]}>{props.errorMessage}</span>
			)}
		</div>
	);
});

export default InputField;
