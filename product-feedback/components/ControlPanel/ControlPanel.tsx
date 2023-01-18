import React, { useContext } from "react";
import { useNextRouter } from "../../helpers/NavigationHelpers";

import classes from "./ControlPanel.module.css";

import ButtonDropdown from "../ui/ButtonDropdown";
import Button from "../ui/Button";

import { ApplicationContext } from "../../context/ContextProvider";
import { SortOption } from "../../pages";
import LightBulbIcon from "../../icons/LightBulb";

interface ControlPanelProps {
	sortOptions: SortOption[];
	handleListSort: (sortObject: SortOption) => void;
	numFilterResults: number;
}

const ControlPanel: React.FC<ControlPanelProps> = (props) => {
	const ctx = useContext(ApplicationContext);
	const router = useNextRouter();

	const addSuggestion = () => {
		console.log(ctx);
		router.push("/feedback/create");
	};

	const handleDropdownButtonClick = (selectedOption: SortOption) => {
		// TODO: Get the value clicked and the order, then call the handleListSort function

		console.log("ControlPanel", selectedOption);

		props.handleListSort(selectedOption);
	};

	return (
		<div className={classes["control-panel"]}>
			<div className={classes["control-panel-options"]}>
				<div className={classes["total-suggestions"]}>
					<LightBulbIcon />
					<span>{props.numFilterResults} Suggestions</span>
				</div>
				<ButtonDropdown
					label="Sort by"
					options={props.sortOptions}
					onOptionClick={handleDropdownButtonClick}
				/>
			</div>
			<Button color="purple" iconName={"add"} onClick={addSuggestion}>
				<span>Add Feedback</span>
			</Button>
		</div>
	);
};

export default ControlPanel;
