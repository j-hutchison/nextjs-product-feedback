import React from "react";
import classes from "./SuggestionListItem.module.css";
import Link from "next/link";

import VoteTag from "../ui/VoteTag";
import Tag from "../ui/Tag";
import CommentsIcon from "../../icons/CommentsIcon";

import { Suggestion } from "./SuggestionList";
import { getColorFromStatus } from "../../data/GetListDataService";
import SidebarStatusIndicator from "../ui/SidebarStatusIndicator";

export type Style = {
	name: "tile" | "listitem";
};

interface SuggestionListItemProps {
	suggestion: Suggestion;
	styles?: Style;
}

const SuggestionListItem: React.FC<SuggestionListItemProps> = (props) => {
	const isGridTile = props.styles?.name === "tile";

	const statusColor = props.styles
		? getColorFromStatus(props.suggestion.status)
		: "";

	console.log(statusColor);

	const tileStyles = isGridTile
		? [classes["suggestion-list-item--tile"], classes[statusColor]].join(" ")
		: "";

	const suggestionListItemClasses = [
		classes["suggestion-list-item"],
		classes["suggestion-list-item--mobile"],
		tileStyles,
	].join(" ");

	return (
		<div className={suggestionListItemClasses}>
			{isGridTile && (
				<SidebarStatusIndicator
					color={statusColor}
					text={props.suggestion.status}
				/>
			)}
			<VoteTag value={props.suggestion.upvotes}></VoteTag>
			<div className={classes["suggestion-list-item-content"]}>
				<Link
					href={`/feedback/${props.suggestion.id}`}
					className={classes["suggestion-title"]}
				>
					{props.suggestion.title}
				</Link>
				<p className={classes["suggestion-description"]}>
					{props.suggestion.description}
				</p>
				<ul className={classes["suggestion-tag-list"]}>
					{props.suggestion.tags.map((tag, id) => (
						<Tag
							key={id}
							text={tag}
							onClick={() => console.log("Tag Clicked!")}
						></Tag>
					))}
				</ul>
			</div>
			<div className={classes.comments}>
				<CommentsIcon />
				<span className={classes["suggestion-comments-count"]}>
					{props.suggestion.comments.length}
				</span>
			</div>
		</div>
	);
};

export default SuggestionListItem;
