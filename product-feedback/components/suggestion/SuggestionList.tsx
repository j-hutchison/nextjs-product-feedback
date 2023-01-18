import React, { useState, useEffect } from "react";
import classes from "./SuggestionList.module.css";

import Button from "../ui/Button";
import SuggestionListItem from "./SuggestionListItem";
import SearchingImage from "../../icons/SearchingImage";

import { SortOption } from "../../pages";

export interface Suggestion {
	id: number;
	upvotes: number;
	title: string;
	description: string;
	tags: string[];
	status: string;
	comments: Comment[];
}

export interface User {
	image: string;
	name: string;
	username: string;
}

export interface Comment {
	id: number;
	content: string;
	user: User;
	replies?: CommentReply[];
}

export interface CommentReply {
	content: string;
	replyingTo: string;
	user: User;
}

interface SuggestionListProps {
	data: Suggestion[];
	sort: SortOption;
	filter: string;
	updateNumFilterResults: (value: number) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [filterHasResults, setFilterHasResults] = useState(true);
	const [suggestionList, setSuggestionList] = useState<Suggestion[]>([]);

	useEffect(() => {
		setIsLoading(() => true);

		if (!props.data) {
			return;
		}

		setSuggestionList([...props.data]);

		setIsLoading(() => false);
	}, []);

	useEffect(() => {
		const checkFilterHasResults = props.data.filter((suggestion) =>
			props.filter !== "all" ? suggestion.tags[0] === props.filter : suggestion
		);

		props.updateNumFilterResults(checkFilterHasResults.length);

		setFilterHasResults(checkFilterHasResults.length > 0);
	}, [props.filter]);

	/** Component to be displayed when no suggestions / data passed into the component */
	const componentNoSuggestions = (
		<div className={classes["no-suggestions"]}>
			<span className={classes.image}>
				<SearchingImage />
			</span>
			<div className={classes.text}>
				<h2 className={classes["message-title"]}>There is no feedback yet.</h2>
				<p className={classes["message-detail"]}>
					Got a suggestion? Found a bug that needs to be squashed? We love
					hearing about new ideas to improve our app.
				</p>
			</div>
			<Button color="purple" iconName={"add"}>
				<span>Add Feedback</span>
			</Button>
		</div>
	);

	return (
		<div className={classes["suggestion-list"]}>
			{isLoading && <p>Loading...</p>}
			{!isLoading &&
				filterHasResults &&
				suggestionList.length > 0 &&
				suggestionList
					.filter((suggestion) =>
						props.filter !== "all"
							? suggestion.tags[0] === props.filter
							: suggestion
					)
					.sort((suggestion1, suggestion2) => {
						if (props.sort.field === "upvotes") {
							if (props.sort.type === "asc") {
								return suggestion1.upvotes - suggestion2.upvotes;
							}
							return suggestion2.upvotes - suggestion1.upvotes;
						}
						if (props.sort.field === "comments") {
							if (props.sort.type === "asc") {
								return (
									suggestion1.comments.length - suggestion2.comments.length
								);
							}
							return suggestion2.comments.length - suggestion1.comments.length;
						}
						return 0;
					})
					.map((suggestion) => {
						return (
							<SuggestionListItem
								key={suggestion.id}
								suggestion={suggestion}
							></SuggestionListItem>
						);
					})}
			{!isLoading && !filterHasResults && componentNoSuggestions}
		</div>
	);
};

export default SuggestionList;
