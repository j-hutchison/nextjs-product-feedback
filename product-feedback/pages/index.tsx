import Button from "../components/ui/Button";
import VoteTag from "../components/ui/VoteTag";
import Tag from "../components/ui/Tag";
import ButtonDropdown from "../components/ui/ButtonDropdown";
import InputField from "../components/ui/InputField";
import Dropdown from "../components/ui/Dropdown";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
	const sortOptions = [
		"Least Votes",
		"Most Votes",
		"Least Comments",
		"Most Comments",
	];

	return (
		<div className="container">
			{/* <Button color="navy" hasIcon={true}>
				<span>Button 4</span>
			</Button>
			<VoteTag value={80}></VoteTag> */}
			{/* <Tag text="UX"></Tag> */}
			{/* <ButtonDropdown label="Sort by" options={sortOptions} /> */}
			{/* <InputField type="text" errorMessage="Can't be empty" /> */}
			{/* <Dropdown options={sortOptions} /> */}
			{/* <CustomDropdown options={dropDownOptions} /> */}
			<Sidebar></Sidebar>
			Hello World! More Content!
		</div>
	);
}
