import { createContext, useState } from "react";
import { Suggestion } from "../components/suggestion/SuggestionList";

interface ContextObject {
	suggestions: Suggestion[];
	setSuggestions: (suggestions: Suggestion[]) => void;
}

export const ApplicationContext = createContext<ContextObject>({
	suggestions: [],
	setSuggestions: (suggestions) => {},
});

interface ContextProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = (props) => {
	const [suggestionList, setSuggestionsList] = useState<Suggestion[]>([]);

	const value = {
		suggestions: suggestionList,
		setSuggestions: setSuggestionsList,
	};

	return (
		<ApplicationContext.Provider value={value}>
			{props.children}
		</ApplicationContext.Provider>
	);
};
