import React from "react";
import SuggestionForm from "../../components/suggestion/SuggestionForm";
import MenuIcon from "../../icons/MenuIcon";

import classes from "./FeedbackPage.module.css";

const Create: React.FC = () => {
	return (
		<div className={classes.container}>
			<SuggestionForm
				mode="create"
				title="Create New Feedback"
				icon={<MenuIcon />}
			></SuggestionForm>
		</div>
	);
};

export default Create;
