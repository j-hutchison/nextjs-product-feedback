import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import classes from "./ButtonDropdown.module.css";

import { SortOption } from "../../pages";

interface ButtonDropdownProps {
	label: string;
	options: SortOption[];
	onOptionClick: (value: SortOption) => void;
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = (props) => {
	const [selectedOption, setSelectedOption] = useState(props.options[1]);
	const [showDropdown, setShowDropdown] = useState(false);

	const handleOptionClick = (event: React.MouseEvent) => {
		event.preventDefault();

		const selectedSortField = event.currentTarget.getAttribute("data-field");
		let selectedSortType = event.currentTarget.getAttribute("data-type");
		const selectedSortLabel = event.currentTarget.innerHTML;

		console.log(event.currentTarget);

		if (selectedSortType !== "asc" && selectedSortType !== "dsc") {
			selectedSortType = null;
		}

		const selectedSortOption: SortOption = {
			field: selectedSortField!,
			label: selectedSortLabel,
			type: selectedSortType,
			isSelected: true,
		};
		setSelectedOption(selectedSortOption);

		props.onOptionClick(selectedSortOption);

		setShowDropdown((prevValue) => {
			return !prevValue;
		});
	};

	const handleDropdownButtonClick = (event: React.MouseEvent) => {
		event.preventDefault();

		setShowDropdown(() => {
			return !showDropdown;
		});
	};

	return (
		<div className={classes.container}>
			<div className={classes.button} onClick={handleDropdownButtonClick}>
				<div className={classes["btn-content"]}>
					<span className={classes["button-label"]}>{props.label}</span>
					<span className={classes.divider}>:</span>
					<span className={classes["selected-option"]}>
						{selectedOption.label}
					</span>
					<span className={classes["dropdown-icon"]}>
						{showDropdown ? (
							<span className={`${classes.icon} material-symbols-outlined`}>
								<span className="material-symbols-outlined">expand_less</span>
							</span>
						) : (
							<span className={`${classes.icon} material-symbols-outlined`}>
								<span className="material-symbols-outlined">expand_more</span>
							</span>
						)}
					</span>
				</div>
			</div>
			{showDropdown && (
				<div className={classes["dropdown"]}>
					<ul className={classes["dropdown-list"]}>
						{props.options.map((listItem, index) => {
							return (
								<li className={classes["dropdown-option"]} key={index}>
									<Link
										className={classes["dropdown-link"]}
										href="/"
										onClick={handleOptionClick}
										data-type={listItem.type}
										data-field={listItem.field}
									>
										{listItem.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ButtonDropdown;
