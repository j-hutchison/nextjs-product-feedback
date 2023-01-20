import React, { useState } from "react";
import { ContextProvider } from "../context/ContextProvider";

import Sidebar from "../components/sidebar/Sidebar";
import ControlPanel from "../components/controlpanel/ControlPanel";
import SuggestionList from "../components/suggestion/SuggestionList";

import { Suggestion } from "../components/suggestion/SuggestionList";
import { getAllSuggestions } from "../data/GetFeedbackService";
import { getDefaultCategory } from "../data/GetListDataService";

export interface SortOption {
	field: string;
	label: string;
	type: "asc" | "dsc" | null;
	isSelected: boolean;
}

interface HomePageProps {
	data: Suggestion[];
}

export default function Home<HomePageProps>({ data }) {
	const [listSort, setListSort] = useState<SortOption>({
		field: "",
		label: "",
		type: "dsc",
		isSelected: false,
	});

	const [listFilter, setListFilter] = useState(
		getDefaultCategory()[0].name || ""
	);

	const [numFilterResults, setNumFilterResults] = useState(0);

	const handleListSort = (options: SortOption) => {
		setListSort({
			field: options.field,
			label: options.label,
			type: options.type,
			isSelected: options.isSelected,
		});
	};

	const handleListFilter = (filterValue: string) => {
		setListFilter(() => filterValue);
	};

	const handleNumberFilterResults = (numFilterResults: number) => {
		setNumFilterResults(() => numFilterResults);
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
				<Sidebar
					onClickFilter={handleListFilter}
					defaultTag={listFilter}
					data={data}
				></Sidebar>
				<main className="flex-column">
					<ControlPanel
						sortOptions={controlPanelSortOptions}
						handleListSort={handleListSort}
						numFilterResults={numFilterResults}
					/>
					<SuggestionList
						data={data}
						sort={listSort}
						filter={listFilter}
						updateNumFilterResults={handleNumberFilterResults}
					/>
				</main>
			</div>
		</ContextProvider>
	);
}

export const getStaticProps = async ({
	params,
}: {
	params: {};
}): Promise<{ props: any }> => {
	const feedbackList = getAllSuggestions();

	return {
		// Passed to the page component as props
		props: { data: feedbackList },
	};
};
