import React from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

import Link from "next/link";

import classes from "./SuggestionForm.module.css";

interface SuggestionFormProps {
	mode: "create" | "edit";
	title: string;
	icon: React.ReactNode;
}

const SuggestionForm: React.FC<SuggestionFormProps> = (props) => {
	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitted Form!");
	};

	return (
		<div className={classes.container}>
			<div className={classes["navigate-back"]}>
				<Link href="/">Go Back</Link>
			</div>
			<form className={classes["feedback-form"]} onSubmit={handleFormSubmit}>
				<div className={classes["form-icon"]}>{props.icon}</div>
				<h1>{props.title}</h1>
				<InputField
					id="feedback_title"
					type="text"
					label="Feedback Title"
					description="Add a short, descriptive headline"
					errorMessage="Missing"
				/>
				<InputField
					id="feedback_category"
					type="text"
					label="Category"
					description="Choose a category for your feedback"
					errorMessage="Missing"
				/>
				<InputField
					id="feedback_detail"
					type="textarea"
					label="Feedback Detail"
					description="Include any specific comments on what should be improved, added, etc."
					errorMessage="Missing"
					rows={4}
				/>
				<div className={classes["form-btn-panel"]}>
					<Button color="grey">Cancel</Button>
					<Button color="purple">Add Feedback</Button>
				</div>
			</form>
		</div>
	);
};

export default SuggestionForm;
