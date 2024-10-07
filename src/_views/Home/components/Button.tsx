type Props = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	text: string;
	variant?: "default" | "inverted";
	className?: string;
};

const variantMap = {
	default:
		"text-white bg-primary hover:text-primary hover:bg-white hover:border-primary",
	inverted:
		"text-primary bg-white hover:text-white hover:bg-primary hover:border-white",
};

export const Button = ({
	onClick,
	text,
	variant = "default",
	className,
}: Props) => {
	return (
		<button
			className={`w-fit px-8 py-4 border border-transparent rounded-sm cursor-pointer transition-all hover:scale-105 xl:text-3xl xl:px-6 xl:py-6 ${variantMap[variant]} ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
