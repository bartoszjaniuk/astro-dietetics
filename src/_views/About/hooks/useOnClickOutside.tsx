import * as React from "react";

export const useOnClickOutside = (ref: any) => {
	const [isComponentOpened, setIsComponentOpened] = React.useState(false);

	React.useEffect(() => {
		const eventHandler = (e: MouseEvent) => {
			if (!isComponentOpened) return;

			const node = ref.current;

			if (node && node.contains(e.target as Node)) {
				return;
			}

			setIsComponentOpened(false);
		};

		if (isComponentOpened) {
			document.addEventListener("click", eventHandler);
		} else {
			document.removeEventListener("click", eventHandler);
		}

		return () => {
			document.removeEventListener("click", eventHandler);
		};
	}, [isComponentOpened]);

	return { isComponentOpened, setIsComponentOpened };
};
