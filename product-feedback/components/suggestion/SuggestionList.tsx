import React, { useState, useEffect, useContext } from "react";
import classes from "./SuggestionList.module.css";

import Button from "../ui/Button";
import SuggestionListItem from "./SuggestionListItem";
import SearchingImage from "../../icons/SearchingImage";

import { ApplicationContext } from "../../context/ContextProvider";
import data from "../../data.json";

export interface Suggestion {
	id: number;
	upvotes: number;
	title: string;
	description: string;
	tags: string[];
	comments: string[];
}

interface SuggestionListProps {
	// data: Suggestion[];
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
				comments: ["Test Comment"],
			};

			return thisSuggestion;
		});

		ctx.setSuggestions([...ctx.suggestions, ...parsedSuggestionData]);

		setIsLoading(() => false);

		console.log(ctx);
	}, []);

	console.log(ctx.suggestions);

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
				ctx.suggestions.map((suggestion) => {
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
