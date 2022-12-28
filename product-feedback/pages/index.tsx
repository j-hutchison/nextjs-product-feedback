import Button from "../components/ui/Button";
import VoteTag from "../components/ui/VoteTag";
import Tag from "../components/ui/Tag";

export default function Home() {
	return (
		<>
			{/* <Button color="navy" hasIcon={true}>
				<span>Button 4</span>
			</Button> */}
			<VoteTag value={80}></VoteTag>
			{/* <Tag text="UX"></Tag> */}
		</>
	);
}
