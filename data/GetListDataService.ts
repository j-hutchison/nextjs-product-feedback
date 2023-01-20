import lists from "../lists.json";

export const getCategoryList = () => {
	return lists.category;
};

export const getDefaultCategory = () => {
	return lists.category.filter((category) => {
		return category.default === true;
	});
};

export const getStatusList = () => {
	return lists.status;
};

export const getColorFromStatus = (statusName: string) => {
	const results = lists.status.filter((status) => {
		return status.name === statusName ? status.color : "";
	});

	if (results.length > 0) {
		return results[0].color!;
	}
	return "";
};
