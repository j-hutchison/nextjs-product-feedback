import React, { useState } from "react";

import classes from "./Roadmap.module.css";
import { getStatusList } from "../../data/GetListDataService";

import Button from "../../components/ui/Button";
import GoBackLink from "../../components/ui/GoBackLink";

import SuggestionListItem from "../../components/suggestion/SuggestionListItem";

import { Style } from "../../components/suggestion/SuggestionListItem";
import { Suggestion } from "../../components/suggestion/SuggestionList";
import { getAllSuggestions } from "../../data/GetFeedbackService";
import { stat } from "fs";

interface RoadmapProps {
	data: Suggestion[];
}

const Roadmap: React.FC<RoadmapProps> = (props) => {
	const statusList = getStatusList();
	const [statusDisplayedMobile, setStatusDisplayedMobile] = useState(0);

	const tile: Style = { name: "tile" };

	const handleStatusHeadingClick = (index: number) => {
		setStatusDisplayedMobile(() => index);
	};

	const isSuggestion = (status: any) => {
		return status.name === "suggestion";
	};

	let mobileStatusHeaderClasses: string;

	return (
		<div className={classes.container}>
			<div className={classes["roadmap-banner"]}>
				<div className={classes["roadmap-banner-text"]}>
					<GoBackLink color="white" />
					<h1>Road Map</h1>
				</div>
				<Button color="purple" iconName="add">
					Add Feedback
				</Button>
			</div>

			<div className={classes["roadmap-filter--mobile"]}>
				{statusList
					.filter((status) => !isSuggestion(status))
					.map((status, statusIndex) => {
						return (
							<div
								key={statusIndex}
								className={classes["roadmap-filter--mobile-heading"]}
							>
								<h2
									onClick={handleStatusHeadingClick.bind(this, statusIndex)}
									className={
										statusIndex === statusDisplayedMobile
											? [classes["active"], classes[status.color!]].join(" ")
											: ""
									}
								>
									{status.name} (
									{props.data.reduce(
										(prevValue, currValue) =>
											currValue.status === status.name
												? prevValue + 1
												: prevValue,
										0
									)}
									)
								</h2>
							</div>
						);
					})}
			</div>
			<div className={classes["roadmap-board"]}>
				{statusList
					.filter((status) => !isSuggestion(status))
					.map((status, statusIndex) => {
						mobileStatusHeaderClasses = [
							classes["roadmap-column"],
							statusDisplayedMobile === statusIndex
								? classes["roadmap-column--active"]
								: "",
						].join(" ");

						return (
							<div
								className={mobileStatusHeaderClasses}
								key={statusIndex}
								style={{
									gridColumn: `${statusIndex + 1} / ${statusIndex + 2}`,
								}}
							>
								{props.data
									.filter((suggestion) => suggestion.status === status.name)
									.map((suggestion, suggestionId, results) => {
										if (suggestionId === 0) {
											return (
												<>
													<div className={classes["column-header"]}>
														<h2>
															{status.name} ({results.length})
														</h2>
														<p className={classes.definition}>
															{status.definition}
														</p>
													</div>
													<SuggestionListItem
														key={suggestion.id}
														suggestion={suggestion}
														styles={tile}
													></SuggestionListItem>
												</>
											);
										} else {
											return (
												<SuggestionListItem
													key={suggestion.id}
													suggestion={suggestion}
													styles={tile}
												></SuggestionListItem>
											);
										}
									})}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Roadmap;

export const getStaticProps = async ({
	params,
}: {
	params: {};
}): Promise<{ props: any }> => {
	const feedbackList = getAllSuggestions();

	return {
		// Passed to the page component as props
		props: { data: feedbackList },
	};
};
