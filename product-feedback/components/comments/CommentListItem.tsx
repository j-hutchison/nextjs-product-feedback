import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Comment } from "../suggestion/SuggestionList";
import classes from "./CommentListItem.module.css";

interface CommentListItemProps {
	data: Comment;
}

const CommentListItem: React.FC<CommentListItemProps> = ({ data }) => {
	const {
		user: { name: author, image: userImage, username },
		content,
		id: commentId,
	} = data;

	return (
		<div className={classes.container}>
			<Image
				className={classes.avatar}
				src={userImage}
				alt={username}
				width={40}
				height={40}
				quality={75}
			/>
			<div className={classes.comment}>
				<aside className={classes["comment-header"]}>
					<div className={classes["author-details"]}>
						<h3>{author}</h3>
						<h4>{`@${username}`}</h4>
					</div>
					<a href="/">Reply</a>
				</aside>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default CommentListItem;
