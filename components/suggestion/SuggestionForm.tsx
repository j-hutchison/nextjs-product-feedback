import React from "react";
import { Suggestion } from "./SuggestionList";

import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import GoBackLink from "../ui/GoBackLink";
import InputFieldLabel from "../ui/InputFieldLabel";
import InputField from "../ui/InputField";

import classes from "./SuggestionForm.module.css";

import { useNextRouter } from "../../helpers/NavigationHelpers";
import { getCategoryList, getStatusList } from "../../data/GetListDataService";

interface SuggestionFormProps {
	mode: "create" | "edit" | "view";
	title: string;
	icon: React.ReactNode;
	suggestion?: Suggestion;
}

const SuggestionForm: React.FC<SuggestionFormProps> = (props) => {
	const router = useNextRouter();
	const categoryList = getCategoryList();
	const statusList = getStatusList();

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitted Form!");
	};

	const handleCancelBtnClick = (e: React.MouseEvent) => {
		router.back();
	};

	return (
		<div className={classes.container}>
			<GoBackLink />
			<form className={classes["feedback-form"]} onSubmit={handleFormSubmit}>
				<div className={classes["form-icon"]}>{props.icon}</div>
				<h1>{props.title}</h1>
				<InputField
					id="feedback_title"
					type="text"
					label="Feedback Title"
					description="Add a short, descriptive headline"
					errorMessage="Missing"
					value={props.suggestion?.title}
				/>
				<div>
					<InputFieldLabel
						htmlFor="feedback_category"
						label="Category"
						description="Choose a category for your feedback"
					/>
					<Dropdown
						id="feedback_category"
						value={props.suggestion?.tags[0]}
						options={categoryList}
					/>
				</div>
				{props.mode === "edit" && (
					<div>
						<InputFieldLabel
							htmlFor="feedback_status"
							label="Update Status"
							description="Change feedback state"
						/>
						<Dropdown
							id="feedback_status"
							value={props?.suggestion?.status}
							options={statusList}
						/>
					</div>
				)}
				<InputField
					id="feedback_detail"
					type="textarea"
					label="Feedback Detail"
					description="Include any specific comments on what should be improved, added, etc."
					errorMessage="Missing"
					rows={3}
					value={props.suggestion?.description}
				/>
				<div className={classes["form-btn-panel"]}>
					{props.mode === "edit" && (
						<div className={classes["form-btn-panel--left"]}>
							<Button color="red">Delete</Button>
						</div>
					)}

					<div className={classes["form-btn-panel--right"]}>
						<Button color="grey" onClick={handleCancelBtnClick}>
							Cancel
						</Button>
						<Button color="purple">Add Feedback</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SuggestionForm;
