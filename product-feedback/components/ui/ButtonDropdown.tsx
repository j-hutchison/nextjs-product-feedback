import React, { MouseEventHandler, useState } from "react";
import classes from "./Dropdown.module.css";

interface ButtonDropdownProps {
	label: string;
	options: string[];
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = (props) => {
	const [selectedOption, setSelectedOption] = useState(props.options[0]);
	const [showDropdown, setShowDropdown] = useState(false);

	const buttonClasses = [
		classes["button"],
		showDropdown && classes["defocus"],
	].join(" ");

	const handleOptionClick = (event: React.MouseEvent) => {
		event.preventDefault();

		const selectedValue = event.currentTarget.innerHTML;
		console.log(selectedValue);

		setSelectedOption(() => {
			return selectedValue;
		});

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
			<div className={buttonClasses} onClick={handleDropdownButtonClick}>
				<div className={classes["btn-content"]}>
					<span className={classes["button-label"]}>{props.label}</span>
					<span className={classes.divider}>:</span>
					<span className={classes["selected-option"]}>{selectedOption}</span>
					<span className={classes["dropdown-icon"]}>
						{showDropdown ? "-" : "+"}
					</span>
				</div>
			</div>
			{showDropdown && (
				<div className={classes["dropdown"]}>
					<ul className={classes["dropdown-list"]}>
						{props.options.map((listItem, index) => {
							return (
								<li className={classes["dropdown-option"]} key={index}>
									<a
										className={classes["dropdown-link"]}
										href="/"
										onClick={handleOptionClick}
									>
										{listItem}
									</a>
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
