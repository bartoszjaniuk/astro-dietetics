import * as React from "react";

export const AbstractShape = (props: React.ComponentProps<"img">) => {
	return (
		<img src="/assets/circle.svg" alt="Abstract Shape Circle" {...props} />
	);
};
