import React, { useState, useRef } from "react";
import classes from "./AddComment.module.css";

import Button from "../ui/Button";
import InputField, { InputRef } from "../ui/InputField";

interface AddCommentProps {}

const AddComment: React.FC<AddCommentProps> = (props) => {
	const MAX_CHARACTERS_COMMENT = 250;

	const addCommentInputField = useRef<InputRef>(null);
	const [remainingCharacters, setRemainingCharacters] = useState(
		MAX_CHARACTERS_COMMENT
	);

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = e.target.value;
		console.log(value);

		setRemainingCharacters(() => MAX_CHARACTERS_COMMENT - value.length);
	};

	return (
		<div className={classes["container"]}>
			<h2 className={classes["add-comment-title"]}>Add Comment</h2>
			<InputField
				ref={addCommentInputField}
				type="textarea"
				placeholder="Type your comment here"
				id="add-comment-text-input"
				errorMessage="Missing"
				onChange={onChange}
			/>
			<footer>
				<p className={classes["add-comment-character-limit"]}>
					{remainingCharacters} Characters left
				</p>
				<Button color="purple">Post Comment</Button>
			</footer>
		</div>
	);
};

export default AddComment;
