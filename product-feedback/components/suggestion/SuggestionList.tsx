import React, { useState, useEffect } from "react";
import classes from "./SuggestionList.module.css";

import Button from "../ui/Button";
import SuggestionListItem from "./SuggestionListItem";
import SearchingImage from "../../icons/SearchingImage";

export interface Suggestion {
	id: number;
	upvotes: number;
	title: string;
	description: string;
	tags: string[];
	comments: string[];
}

interface SuggestionListProps {
	data: Suggestion[];
}

const SuggestionList: React.FC<SuggestionListProps> = (props) => {
	const [foundResults, setFoundResults] = useState(false);

	useEffect(() => {
		if (props.data) {
			setFoundResults(true);
		}
	}, []);

	console.log(props.data);

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
			{foundResults
				? props.data.map((suggestion) => {
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
				  })
				: componentNoSuggestions}
		</div>
	);
};

export default SuggestionList;
