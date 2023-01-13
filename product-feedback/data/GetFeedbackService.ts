import { Suggestion } from "../components/suggestion/SuggestionList";

import data from "../data.json";

export const getSingleSuggestionById = (feedbackid: string) => {
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

	return parsedSuggestionData;
};

export const getAllSuggestions = () => {
	let parsedSuggestionData = data.productRequests.map((productRequest) => {
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

	return parsedSuggestionData;
};
