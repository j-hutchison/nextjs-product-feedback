import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import classes from "./ButtonDropdown.module.css";

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
			<div className={classes.button} onClick={handleDropdownButtonClick}>
				<div className={classes["btn-content"]}>
					<span className={classes["button-label"]}>{props.label}</span>
					<span className={classes.divider}>:</span>
					<span className={classes["selected-option"]}>{selectedOption}</span>
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
									>
										{listItem}
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
