import React from "react";
import { useRouter } from "next/router";

import { Suggestion } from "../../../components/suggestion/SuggestionList";

import { getSingleSuggestionById } from "../../../data/GetFeedbackService";

import CommentList from "../../../components/comments/CommentList";
import SuggestionListItem from "../../../components/suggestion/SuggestionListItem";
import GoBackLink from "../../../components/ui/GoBackLink";
import Button from "../../../components/ui/Button";

import classes from "../FeedbackPage.module.css";
import data from "../../../data.json";
import AddComment from "../../../components/comments/AddComment";

interface FeedbackPageProps {
	data: Suggestion;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ data }) => {
	console.log(data);
	if (!data) {
		return <p>Error retrieving data</p>;
	}

	const { id, title, description, upvotes, comments, tags } = data;
	const handleEditBtnClick = () => {};

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
			<AddComment />
		</div>
	);
};

export default FeedbackPage;

// Generates `/feedback/1` and `/feedback/2`
export const getStaticPaths = async (): Promise<{
	paths: string[];
	fallback: boolean;
}> => {
	const feedbackIds = data.productRequests.map((productRequest) => {
		const viewModePath = `/feedback/${productRequest.id}`;
		return viewModePath;
	});

	console.log(feedbackIds);

	return {
		paths: feedbackIds.flat(),
		fallback: false, // can also be true or 'blocking'
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: { feedbackid: string };
}): Promise<{ props: any }> => {
	const feedbackid = params.feedbackid;
	const feedbackObject = getSingleSuggestionById(feedbackid);

	return {
		// Passed to the page component as props
		props: { data: { ...feedbackObject[0] } },
	};
};
