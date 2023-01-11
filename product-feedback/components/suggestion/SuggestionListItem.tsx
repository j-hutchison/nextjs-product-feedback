import React from "react";
import classes from "./SuggestionListItem.module.css";
import Link from "next/link";

import VoteTag from "../ui/VoteTag";
import Tag from "../ui/Tag";
import CommentsIcon from "../../icons/CommentsIcon";

import { Suggestion } from "./SuggestionList";

const SuggestionListItem: React.FC<Suggestion> = (props) => {
	return (
		<div className={classes["suggestion-list-item"]}>
			<VoteTag value={props.upvotes}></VoteTag>
			<div className={classes["suggestion-list-item-content"]}>
				<Link
					href={`feedback/${props.id}`}
					className={classes["suggestion-title"]}
				>
					{props.title}
				</Link>
				<p className={classes["suggestion-description"]}>{props.description}</p>
				<ul className={classes["suggestion-tag-list"]}>
					{props.tags.map((tag, id) => (
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
					{props.comments.length}
				</span>
			</div>
		</div>
	);
};

export default SuggestionListItem;
