import React from "react";
import data from "../../../data.json";

import { getSingleSuggestionById } from "../../../data/GetFeedbackService";
import { Suggestion } from "../../../components/suggestion/SuggestionList";

interface EditFeedbackProps {
	data: Suggestion;
}

const EditFeedback: React.FC<EditFeedbackProps> = ({ data }) => {
	console.log(data);
	return <div>EditFeedback</div>;
};

export default EditFeedback;

// Generates `/feedback/1/edit` and `/feedback/2/edit`
export const getStaticPaths = async (): Promise<{
	paths: string[];
	fallback: boolean;
}> => {
	const feedbackIds = data.productRequests.map((productRequest) => {
		const viewModePath = `/feedback/${productRequest.id}/edit`;
		return viewModePath;
	});

	console.log(feedbackIds);

	return {
		paths: feedbackIds.flat(),
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

	const parsedSuggestionData = getSingleSuggestionById(feedbackid);

	return {
		// Passed to the page component as props
		props: { data: { ...parsedSuggestionData[0] } },
	};
};
