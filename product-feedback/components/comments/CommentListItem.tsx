import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { InputRef } from "../ui/InputField";
import { Comment, CommentReply } from "../suggestion/SuggestionList";
import classes from "./CommentListItem.module.css";

interface CommentListItemProps {
	data: Comment | CommentReply;
	children?: React.ReactNode;
}

const CommentListItem: React.FC<CommentListItemProps> = ({
	data,
	children,
}) => {
	const commentReplyInputRef = React.useRef<InputRef>(null);
	const [showReplyComponent, setShowReplyComponent] = useState(false);

	useEffect(() => {
		console.log(commentReplyInputRef);
		commentReplyInputRef.current?.focus();
	}, [showReplyComponent]);

	const {
		user: { name: author, image: userImage, username },
		content,
	} = data;

	const isReply = "replyingTo" in data;

	let commentId: number;
	if (!isReply) {
		commentId = data.id;
	}

	let replyingTo: string = "";
	if (isReply) {
		replyingTo = data.replyingTo;
	}

	const containerClasses = [
		classes.container,
		isReply && classes["reply-container"],
	].join(" ");

	const handleReplyLinkClick = (e: React.MouseEvent) => {
		// e.preventDefault();

		setShowReplyComponent((prevValue) => (prevValue ? false : true));
	};

	const onSubmitReplyForm = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted New Reply");
	};

	return (
		<div className={containerClasses}>
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
					<a
						href="#"
						className={classes["reply-link"]}
						onClick={handleReplyLinkClick}
					>
						Reply
					</a>
				</aside>
				<p>
					{isReply && (
						<span className={classes["replying-to"]}>{`@${replyingTo}\t`}</span>
					)}
					{content}
				</p>
				{showReplyComponent && (
					<form
						className={`${classes["comment-reply-form"]}`}
						onSubmit={onSubmitReplyForm}
					>
						<InputField
							ref={commentReplyInputRef}
							type="textarea"
							errorMessage="Missing"
							id="reply-text-input"
						/>
						<Button color="purple">Post Reply</Button>
					</form>
				)}

				<div className={classes["comment-replies"]}>{children}</div>
			</div>
		</div>
	);
};

export default CommentListItem;
