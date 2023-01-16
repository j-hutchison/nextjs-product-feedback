import { NextRouter, useRouter } from "next/router";

let router: NextRouter;

export const useNextRouter = () => {
	router = useRouter();
	return router;
};
