import React, { useState } from "react";
import classes from "./Dropdown.module.css";

import ArrowIcon from "../../icons/ArrowIcon";

import { getDefaultCategory } from "../../data/GetListDataService";

export interface Category {
	index: number;
	name: string;
	default: boolean;
	definition?: string;
}

interface DropdownProps {
	id: string;
	options: Category[];
	title?: string;
	description?: string;
	value?: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
	const [selectedOption, setSelectedOption] = useState(
		props?.value || getDefaultCategory()[0].name || ""
	);
	const [showDropdown, setShowDropdown] = useState(false);

	const dropdownClasses = [
		classes["container"],
		showDropdown && classes["container-active"],
	].join(" ");

	const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const selectedValue = event.currentTarget.innerHTML;
		console.log(selectedValue);

		setSelectedOption(() => {
			return selectedValue;
		});

		setShowDropdown(() => {
			return false;
		});
	};

	const handleDropdownButtonClick = (event: React.MouseEvent) => {
		setShowDropdown(() => {
			return !showDropdown;
		});
	};

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		if (
			event.relatedTarget &&
			event.relatedTarget.closest(classes["dropdown-list"])
		) {
			return;
		}

		setShowDropdown(() => false);
	};

	return (
		<div className={dropdownClasses} onBlur={handleBlur}>
			<button
				id={props.id}
				className={classes.btn}
				onClick={handleDropdownButtonClick}
			>
				<span className={classes["selected-option"]}>{selectedOption}</span>
				<span className={classes["dropdown-icon"]}>
					{showDropdown ? <ArrowIcon type="up" /> : <ArrowIcon type="down" />}
				</span>
			</button>
			{showDropdown && (
				<div className={classes["dropdown-list"]}>
					{props.options.map((listItem, index) => {
						if (listItem.name === selectedOption) return;

						return (
							<div
								key={index}
								className={classes["dropdown-option"]}
								onMouseDown={handleOptionClick}
							>
								{listItem.name}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
