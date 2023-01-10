import React, { useContext } from "react";
import classes from "./ControlPanel.module.css";

import ButtonDropdown from "../ui/ButtonDropdown";
import Button from "../ui/Button";

import { ApplicationContext } from "../../context/ContextProvider";
import { Suggestion } from "../suggestion/SuggestionList";

interface ControlPanelProps {
	// suggestionCount: number;
}

const ControlPanel: React.FC<ControlPanelProps> = (props) => {
	const sortOptions = [
		"Least Votes",
		"Most Votes",
		"Least Comments",
		"Most Comments",
	];

	const ctx = useContext(ApplicationContext);

	const addSuggestion = () => {
		const newSuggestion: Suggestion = {
			id: 90,
			upvotes: 5,
			title: "Test Add",
			description: "Test Description",
			tags: ["UI"],
			comments: ["Test Comment"],
		};

		ctx.setSuggestions([...ctx.suggestions, newSuggestion]);

		console.log(ctx);
	};

	return (
		<div className={classes["control-panel"]}>
			<div className={classes["control-panel-options"]}>
				<div className={classes["total-suggestions"]}>
					<span>💡</span>
					<span>{ctx.suggestions.length} Suggestions</span>
				</div>
				<ButtonDropdown label="Sort by" options={sortOptions} />
			</div>
			<Button color="purple" iconName={"add"} onClick={addSuggestion}>
				<span>Add Feedback</span>
			</Button>
		</div>
	);
};

export default ControlPanel;
