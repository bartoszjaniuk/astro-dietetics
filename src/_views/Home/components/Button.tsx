type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "inverted";
  className?: string;
  isWithoutAnimation?: boolean;
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;

const variantMap = {
  default:
    "text-white bg-primary enabled:hover:text-primary enabled:hover:bg-white enabled:hover:border-primary",
  inverted:
    "text-primary bg-white enabled:hover:text-white enabled:hover:bg-primary enabled:hover:border-white",
};

const buttonSize = {
  sm: "text-xl xl:text-lg p-4",
  md: "xl:text-2xl xl:px-6 xl:py-6",
  lg: "xl:text-3xl px-8 py-4 xl:px-6 xl:py-6",
};

export const Button = ({
  onClick,
  variant = "default",
  className,
  children,
  isWithoutAnimation,
  size = "sm",
  ...rest
}: Props) => {
  return (
    <button
      className={`w-fit border border-transparent rounded-sm cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed  ${!isWithoutAnimation ? "hover:scale-105" : ""} ${buttonSize[size]} ${variantMap[variant]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
