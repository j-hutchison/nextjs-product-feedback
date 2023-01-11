import React from "react";
import SuggestionForm from "../../components/suggestion/SuggestionForm";
import MenuIcon from "../../icons/MenuIcon";

const Create: React.FC = () => {
	return (
		<div>
			<SuggestionForm
				mode="create"
				title="Create New Feedback"
				icon={<MenuIcon />}
			></SuggestionForm>
		</div>
	);
};

export default Create;
