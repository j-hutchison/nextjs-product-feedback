import React, { useEffect, useState } from "react";

import Button from "../components/ui/Button";
import VoteTag from "../components/ui/VoteTag";
import Tag from "../components/ui/Tag";
import ButtonDropdown from "../components/ui/ButtonDropdown";
import InputField from "../components/ui/InputField";
import Dropdown from "../components/ui/Dropdown";
import Sidebar from "../components/sidebar/Sidebar";
import ControlPanel from "../components/controlpanel/ControlPanel";
import SuggestionList from "../components/suggestion/SuggestionList";

import { Suggestion } from "../components/suggestion/SuggestionList";

import data from "../data.json";

export default function Home() {
	if (!data) {
		return;
	}
	const parsedSuggestionData = data.productRequests.map((productRequest) => {
		return {
			id: productRequest.id,
			upvotes: productRequest.upvotes,
			title: productRequest.title,
			description: productRequest.description,
			tags: [productRequest.category],
			comments: ["Test Comment"],
		};
	});

	return (
		<div className="container">
			{/* <Button color="navy" hasIcon={true}>
				<span>Button 4</span>
			</Button>
			<VoteTag value={80}></VoteTag> */}
			{/* <Tag text="UX"></Tag> */}
			{/* <InputField type="text" errorMessage="Can't be empty" /> */}
			{/* <Dropdown options={sortOptions} /> */}
			{/* <CustomDropdown options={dropDownOptions} /> */}
			<Sidebar></Sidebar>
			<main className="flex-column">
				<ControlPanel suggestionCount={6} />
				<SuggestionList data={parsedSuggestionData} />
			</main>
		</div>
	);
}
