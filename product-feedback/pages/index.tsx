import Button from "../components/ui/Button";
import VoteTag from "../components/ui/VoteTag";
import Tag from "../components/ui/Tag";
import ButtonDropdown from "../components/ui/ButtonDropdown";
import InputField from "../components/ui/InputField";
import Dropdown from "../components/ui/Dropdown";
import CustomDropdown from "../components/ui/CustomDropdown";
import { OptionObject } from "../components/ui/CustomDropdown";

export default function Home() {
	const sortOptions = [
		"Least Votes",
		"Most Votes",
		"Least Comments",
		"Most Comments",
	];

	const dropDownOptions: OptionObject[] = [
		{ text: "Option 1", value: "option1" },
		{ text: "Option 2", value: "option2" },
		{ text: "Option 3", value: "option3" },
		{ text: "Option 4", value: "option4" },
	];

	return (
		<>
			{/* <Button color="navy" hasIcon={true}>
				<span>Button 4</span>
			</Button>
			<VoteTag value={80}></VoteTag> */}
			{/* <Tag text="UX"></Tag> */}
			{/* <ButtonDropdown label="Sort by" options={sortOptions} /> */}
			{/* <InputField type="text" errorMessage="Can't be empty" /> */}
			<Dropdown options={sortOptions} />
			{/* <CustomDropdown options={dropDownOptions} /> */}
		</>
	);
}
