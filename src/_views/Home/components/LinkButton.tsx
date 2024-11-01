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
        `w-fit rounded-sm cursor-pointer transition-all hover:skew-y-1 hover:scale-110 text-2xl px-4 py-4 ${variantMap[variant]}`,
        className
      )}
      href={navigateTo}
    >
      {text}
    </a>
  );
};
