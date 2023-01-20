import React, { useState, useImperativeHandle, useRef } from "react";
import InputFieldLabel from "./InputFieldLabel";

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
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

const InputField = React.forwardRef<InputRef, InputFieldProps>((props, ref) => {
	const [fieldValue, setFieldValue] = useState(props?.value || "");
	const [hasError, setHasError] = useState(false);
	const inputFieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

	const onInputFieldChange = (e: React.ChangeEvent) => {
		console.log(e.target.value);
		setFieldValue(() => e.target.value);

		if (props?.onChange) {
			props.onChange(e);
		}
	};

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
			<InputFieldLabel
				id={props.id}
				label={props.label}
				description={props.description}
			/>
			{props.type === "textarea" && (
				<textarea
					placeholder={props.placeholder}
					ref={inputFieldRef}
					id={props.id}
					className={inputFieldClasses}
					rows={props.rows}
					value={fieldValue}
					onChange={onInputFieldChange}
				/>
			)}
			{props.type !== "textarea" && (
				<input
					placeholder={props.placeholder}
					ref={inputFieldRef}
					id={props.id}
					className={inputFieldClasses}
					type={props.type}
					value={fieldValue}
					onChange={onInputFieldChange}
				/>
			)}
			{hasError && (
				<span className={classes["error-message"]}>{props.errorMessage}</span>
			)}
		</div>
	);
});

export default InputField;
