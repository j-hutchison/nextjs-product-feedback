import React, { useContext } from "react";
import {
	ContextProvider,
	ApplicationContext,
} from "../context/ContextProvider";

import Sidebar from "../components/sidebar/Sidebar";
import ControlPanel from "../components/controlpanel/ControlPanel";
import SuggestionList from "../components/suggestion/SuggestionList";

export default function Home() {
	const ctx = useContext(ApplicationContext);

	return (
		<ContextProvider>
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
					<ControlPanel />
					<SuggestionList />
				</main>
			</div>
		</ContextProvider>
	);
}
