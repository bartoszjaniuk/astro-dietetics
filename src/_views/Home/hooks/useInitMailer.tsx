import * as React from "react";

export const useInitMailer = () => {
	React.useEffect(() => {
		fetch("https://umami-get-mailed.onrender.com/api/v1/app/init", {
			method: "POST",
		});
	}, []);
};
