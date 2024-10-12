import { useRef } from "react";

import { useOnClickOutside } from "../hooks/useOnClickOutside";

export const CertificateItem = ({
	path,
	alt,
	id,
}: {
	path: string;
	alt: string;
	id: number;
}) => {
	const divRef = useRef(null);
	const { isComponentOpened, setIsComponentOpened } = useOnClickOutside(divRef);

	const handleClick = () => setIsComponentOpened(!isComponentOpened);

	return (
		<div
			id={id.toString()}
			ref={divRef}
			className={`px-0 py-2 scale-100 [perspective:200px] [transition:all_0.4s_ease] ${isComponentOpened ? "scale-150 z-50 [perspective:200px]" : ""}`}
			onClick={handleClick}
		>
			<img
				loading="lazy"
				className="w-full h-auto [box-shadow:rgba(99,99,99,0.2)0px_2px_8px_0px] p-1 bg-white box-border [perspective:200px] [transition:all_0.4s_ease]"
				src={path}
				alt={alt}
			/>
		</div>
	);
};
