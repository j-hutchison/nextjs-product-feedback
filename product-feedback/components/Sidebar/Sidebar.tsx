import React, { useState } from "react";

import classes from "./Sidebar.module.css";
import Tag from "../ui/Tag";
import SidebarStatusIndicator from "../ui/SidebarStatusIndicator";

import LogoBanner from "./LogoBanner";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const handleTagClick = () => {
		console.log("Hello!");
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
						<Tag onClick={handleTagClick} text="All" isActive={true}></Tag>
						<Tag onClick={handleTagClick} text="UI"></Tag>
						<Tag onClick={handleTagClick} text="UX"></Tag>
						<Tag onClick={handleTagClick} text="Enhancement"></Tag>
						<Tag onClick={handleTagClick} text="Bug"></Tag>
						<Tag onClick={handleTagClick} text="Feature"></Tag>
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
