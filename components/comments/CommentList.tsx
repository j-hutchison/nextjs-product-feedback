import React from "react";
import classes from "./CommentList.module.css";

import { Comment, CommentReply } from "../suggestion/SuggestionList";
import CommentListItem from "./CommentListItem";

interface CommentListProps {
	comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
	const commentsCount =
		comments.length > 1 ? `${comments.length} Comments` : `1 Comment`;

	console.log(comments);

	return (
		<div className={classes.container}>
			<h2>{commentsCount}</h2>
			{comments.map((comment, idx) => {
				return (
					<div
						className={`${[
							classes["comment-container"],
							idx > 0 && classes["border-top"],
						].join(" ")}`}
						key={idx}
					>
						<CommentListItem data={comment}>
							{comment.replies &&
								comment.replies.map((reply, replyIdx) => {
									return <CommentListItem key={replyIdx} data={reply} />;
								})}
						</CommentListItem>
					</div>
				);
			})}
		</div>
	);
};

export default CommentList;
