import React, { useContext, useState } from "react";
import {
	ContextProvider,
	ApplicationContext,
} from "../context/ContextProvider";

import Sidebar from "../components/sidebar/Sidebar";
import ControlPanel from "../components/controlpanel/ControlPanel";
import SuggestionList from "../components/suggestion/SuggestionList";

export interface SortOption {
	field: string;
	label: string;
	type: "asc" | "dsc" | null;
	isSelected: boolean;
}

export default function Home() {
	const [listSort, setListSort] = useState<SortOption>({
		field: "",
		label: "",
		type: "dsc",
		isSelected: false,
	});

	const handleListSort = (options: SortOption) => {
		setListSort({
			field: options.field,
			label: options.label,
			type: options.type,
			isSelected: options.isSelected,
		});
	};

	//TODO: REMOVE 'ISSELECTED'
	const controlPanelSortOptions: SortOption[] = [
		{
			field: "upvotes",
			label: "Least Upvotes",
			type: "asc",
			isSelected: false,
		},
		{
			field: "upvotes",
			label: "Most Upvotes",
			type: "dsc",
			isSelected: false,
		},
		{
			field: "comments",
			label: "Least Comments",
			type: "asc",
			isSelected: false,
		},
		{
			field: "comments",
			label: "Most Comments",
			type: "dsc",
			isSelected: false,
		},
	];

	return (
		<ContextProvider>
			<div className="container">
				{/* <Button color="navy" hasIcon={true}>
				<span>Button 4</span>
			</Button>
			<VoteTag value={80}></VoteTag> */}
				{/* <Tag text="UX"></Tag> */}
				{/* <InputField type="text" errorMessage="Can't be empty" /> */}
				{/* <Dropdown options={sortOptions} /> */}
				{/* <CustomDropdown options={dropDownOptions} /> */}
				<Sidebar></Sidebar>
				<main className="flex-column">
					<ControlPanel
						sortOptions={controlPanelSortOptions}
						handleListSort={handleListSort}
					/>
					<SuggestionList sort={listSort} />
				</main>
			</div>
		</ContextProvider>
	);
}
