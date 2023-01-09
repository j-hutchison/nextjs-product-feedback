import React from "react";
import classes from "./ControlPanel.module.css";

import ButtonDropdown from "../ui/ButtonDropdown";
import Button from "../ui/Button";

interface ControlPanelProps {
	suggestionCount: number;
}

const ControlPanel: React.FC<ControlPanelProps> = (props) => {
	const sortOptions = [
		"Least Votes",
		"Most Votes",
		"Least Comments",
		"Most Comments",
	];

	return (
		<div className={classes["control-panel"]}>
			<div className={classes["control-panel-options"]}>
				<div className={classes["total-suggestions"]}>
					<span>💡</span>
					<span>{props.suggestionCount} Suggestions</span>
				</div>
				<ButtonDropdown label="Sort by" options={sortOptions} />
			</div>
			<Button color="purple" iconName={"add"}>
				<span>Add Feedback</span>
			</Button>
		</div>
	);
};

export default ControlPanel;
