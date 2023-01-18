import React, { useState } from "react";

import classes from "./Sidebar.module.css";
import Tag from "../ui/Tag";
import SidebarStatusIndicator from "../ui/SidebarStatusIndicator";

import { getCategoryList } from "../../data/GetListDataService";

import LogoBanner from "./LogoBanner";

interface SidebarProps {
	defaultTag: string;
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
						<a href="/roadmap">View</a>
					</div>

					<ul className={classes["roadmap-suggestion-list"]}>
						<SidebarStatusIndicator text="Planned" color="orange" count={8} />
						<SidebarStatusIndicator text="In-Progress" count={4} />
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
