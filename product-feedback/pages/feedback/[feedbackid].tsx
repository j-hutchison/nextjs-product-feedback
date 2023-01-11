import React from "react";

import { Suggestion } from "../../components/suggestion/SuggestionList";

import CommentList from "../../components/comments/CommentList";
import SuggestionListItem from "../../components/suggestion/SuggestionListItem";
import GoBackLink from "../../components/ui/GoBackLink";
import Button from "../../components/ui/Button";

import classes from "./FeedbackPage.module.css";
import data from "../../data.json";

interface FeedbackPageProps {
	data: Suggestion;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ data }) => {
	console.log(data);
	if (!data) {
		return <p>Error retrieving data</p>;
	}

	const { id, title, description, upvotes, comments, tags } = data;

	return (
		<div className={classes["container"]}>
			<div className={classes["btn-panel"]}>
				<GoBackLink />
				<Button color="blue">Edit Feedback</Button>
			</div>
			<SuggestionListItem
				id={id}
				title={title}
				description={description}
				upvotes={upvotes}
				comments={comments}
				tags={tags}
			/>
			<CommentList comments={comments} />
		</div>
	);
};

export default FeedbackPage;

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths = async (): Promise<{
	paths: string[];
	fallback: boolean;
}> => {
	const feedbackIds = data.productRequests.map((productRequest) => {
		return `/feedback/${productRequest.id}`;
	});

	console.log(feedbackIds);

	return {
		paths: feedbackIds,
		fallback: false, // can also be true or 'blocking'
	};
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async ({
	params,
}: {
	params: { feedbackid: string };
}): Promise<{ props: any }> => {
	const feedbackid = params.feedbackid;

	let parsedSuggestionData = data.productRequests
		.filter((feedback) => {
			return feedback.id === +feedbackid;
		})
		.map((productRequest) => {
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

	if (parsedSuggestionData.length < 0) {
		parsedSuggestionData = [];
	}

	return {
		// Passed to the page component as props
		props: { data: { ...parsedSuggestionData[0] } },
	};
};
