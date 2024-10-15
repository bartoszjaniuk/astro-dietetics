import { cn } from "@/lib/utils";

type Props = {
	navigateTo: string;
	text: string;
	variant?: "default" | "inverted";
	className?: string;
};

const variantMap = {
	default:
		"text-white bg-primary border hover:text-primary hover:bg-white hover:border-primary",
	inverted:
		"text-primary bg-white hover:text-white border border-primary hover:bg-primary hover:border-white",
};

export const LinkButton = ({
	navigateTo,
	text,
	variant = "default",
	className,
}: Props) => {
	return (
		<a
			className={cn(
				`w-fit px-8 py-4 rounded-sm cursor-pointer transition-all hover:skew-y-1 hover:scale-110 xl:text-3xl xl:px-6 xl:py-6 ${variantMap[variant]}`,
				className,
			)}
			href={navigateTo}
		>
			{text}
		</a>
	);
};
