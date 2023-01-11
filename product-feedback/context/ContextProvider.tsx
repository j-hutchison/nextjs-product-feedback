import { createContext, useState } from "react";
import { Suggestion } from "../components/suggestion/SuggestionList";

interface ContextObject {
	suggestions: Suggestion[];
	setSuggestions: (suggestions: Suggestion[]) => void;
	sortUpvotesAscending: boolean;
	setSortUpvotesAscending: (value: boolean) => void;
}

export const ApplicationContext = createContext<ContextObject>({
	suggestions: [],
	setSuggestions: (suggestions) => {},
	sortUpvotesAscending: false,
	setSortUpvotesAscending: (value) => {},
});

interface ContextProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = (props) => {
	const [suggestionList, setSuggestionsList] = useState<Suggestion[]>([]);
	const [sortUpvotesAscending, setSortUpvotesAscending] = useState(false);

	const value = {
		suggestions: suggestionList,
		setSuggestions: setSuggestionsList,
		sortUpvotesAscending: false,
		setSortUpvotesAscending,
	};

	return (
		<ApplicationContext.Provider value={value}>
			{props.children}
		</ApplicationContext.Provider>
	);
};
