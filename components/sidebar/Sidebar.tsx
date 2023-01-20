import React, { useState } from "react";
import Link from "next/link";

import classes from "./Sidebar.module.css";
import Tag from "../ui/Tag";
import SidebarStatusIndicator from "../ui/SidebarStatusIndicator";

import { getCategoryList } from "../../data/GetListDataService";
import { getColorFromStatus } from "../../data/GetListDataService";

import { Suggestion } from "../suggestion/SuggestionList";
import LogoBanner from "./LogoBanner";

interface SidebarProps {
	defaultTag: string;
	data: Suggestion[];
	onClickFilter: (filterValue: string) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const categoryList = getCategoryList();

	const handleTagClick = (e: React.MouseEvent) => {
		console.log(e.currentTarget.innerHTML);
		props.onClickFilter(e.currentTarget.innerHTML);
	};

	const handleMenuIconClick = () => {
		setShowSidebar((prevValue) => !prevValue);
	};

	const sidebarClasses = [
		classes["sidebar-content"],
		showSidebar && classes["sidebar-mobile-visible"],
	].join(" ");

	const statusCountObject = props.data.reduce(
		(acc: { [key: string]: number }, currValue: Suggestion) => {
			if (acc[currValue.status]) {
				acc[currValue.status] += 1;
			} else {
				acc[currValue.status] = 1;
			}
			return acc;
		},
		{}
	);

	console.log(statusCountObject);

	return (
		<aside className={classes.sidebar}>
			<LogoBanner onMenuIconClick={handleMenuIconClick} />
			{showSidebar && <div className={classes["sidebar-overlay"]}></div>}
			<div className={sidebarClasses}>
				<div className={classes.tags}>
					<ul className={classes["tag-list"]}>
						{categoryList.map((category, categoryId) => (
							<Tag
								key={categoryId}
								onClick={handleTagClick}
								text={category.name}
								isActive={
									category.name === props.defaultTag || category.default
								}
							></Tag>
						))}
					</ul>
				</div>
				<div className={classes.roadmap}>
					<div className={classes["roadmap-heading"]}>
						<h3>Roadmap</h3>
						<Link href="/roadmap">View</Link>
					</div>

					<ul className={classes["roadmap-suggestion-list"]}>
						{Object.keys(statusCountObject)
							.filter((value) => value !== "suggestion")
							.map((status, idx) => {
								return (
									<SidebarStatusIndicator
										key={idx}
										text={status}
										count={statusCountObject[status]}
										color={getColorFromStatus(status)}
									/>
								);
							})}
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
