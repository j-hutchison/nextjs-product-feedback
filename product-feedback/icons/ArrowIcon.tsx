import React from "react";

interface ArrowIconProps {
	type: "up" | "down" | "left";
}

const ArrowIcon: React.FC<ArrowIconProps> = (props) => {
	switch (props.type) {
		case "up":
			return (
				<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 6l4-4 4 4"
						stroke="#4661E6"
						stroke-width="2"
						fill="none"
						fill-rule="evenodd"
					/>
				</svg>
			);
		case "down":
			return (
				<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 1l4 4 4-4"
						stroke="#4661E6"
						stroke-width="2"
						fill="none"
						fill-rule="evenodd"
					/>
				</svg>
			);
		case "left":
			return (
				<svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6 9L2 5l4-4"
						stroke="#4661E6"
						stroke-width="2"
						fill="none"
						fill-rule="evenodd"
					/>
				</svg>
			);
	}
};

export default ArrowIcon;
