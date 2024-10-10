import { cn } from "@/lib/utils";
import * as React from "react";

export const AbstractShape = (props: React.ComponentProps<"img">) => {
	const { className } = props;
	return (
		<img
			{...props}
			src="/assets/circle.svg"
			alt="Abstract Shape Circle"
			className={cn("hidden xl:block", className)}
		/>
	);
};
