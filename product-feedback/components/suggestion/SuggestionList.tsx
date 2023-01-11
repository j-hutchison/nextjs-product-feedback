import React, { useState, useEffect, useContext } from "react";
import classes from "./SuggestionList.module.css";

import Button from "../ui/Button";
import SuggestionListItem from "./SuggestionListItem";
import SearchingImage from "../../icons/SearchingImage";

import { ApplicationContext } from "../../context/ContextProvider";
import { SortOption } from "../../pages";
import data from "../../data.json";

export interface Suggestion {
	id: number;
	upvotes: number;
	title: string;
	description: string;
	tags: string[];
	comments: Comment[];
}

export interface Comment {
	id: number;
	content: string;
	user: {
		image: string;
		name: string;
		username: string;
	};
	replies?: any;
}

interface SuggestionListProps {
	sort: SortOption;
}

const SuggestionList: React.FC<SuggestionListProps> = (props) => {
	const [isLoading, setIsLoading] = useState(true);

	const ctx = useContext(ApplicationContext);

	useEffect(() => {
		console.log(ctx);

		setIsLoading(() => true);

		if (!data) {
			return;
		}

		console.log("data.productRequests", data.productRequests);

		const parsedSuggestionData = data.productRequests.map((productRequest) => {
			const thisSuggestion: Suggestion = {
				id: productRequest.id,
				upvotes: productRequest.upvotes,
				title: productRequest.title,
				description: productRequest.description,
				tags: [productRequest.category],
				comments: productRequest?.comments ? [...productRequest.comments] : [],
			};

			return thisSuggestion;
		});

		ctx.setSuggestions([...ctx.suggestions, ...parsedSuggestionData]);

		setIsLoading(() => false);

		console.log(ctx);
	}, []);

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
				ctx.suggestions.length > 0 &&
				ctx.suggestions
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
								id={suggestion.id}
								upvotes={suggestion.upvotes}
								title={suggestion.title}
								description={suggestion.description}
								tags={suggestion.tags}
								comments={suggestion.comments}
							></SuggestionListItem>
						);
					})}
			{!isLoading && ctx.suggestions.length === 0 && componentNoSuggestions}
		</div>
	);
};

export default SuggestionList;
