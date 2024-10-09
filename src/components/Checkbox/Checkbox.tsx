import type { InputProps } from "../Input/Input";
import statuteReference from "/regulamin.pdf";

export const CheckBox = ({
	id,
	name,
	label,
	type,
	className = "",
	placeholder,
	errors,
	register,
	rules,
	value,
	...props
}: InputProps<any>) => {
	const hasError = !!errors;
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center gap-2 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary accent-primary">
				<input
					className="w-8 h-8 md:w-6 md:h-6"
					id={id}
					name={name}
					aria-invalid={hasError}
					type="checkbox"
					aria-label={label}
					placeholder={placeholder}
					{...props}
					{...(register && register(name, rules))}
				/>
				<label className="text-primary text-xl xl:text-lg" htmlFor={id}>
					Zapoznałem się{" "}
					<a
						className="text-primary border-b-primary border-b-2"
						href={statuteReference}
						target="_blank"
					>
						Regulaminem Serwisu
					</a>{" "}
					i akceptuję jego treść.
				</label>
			</div>
			{hasError ? (
				<p className="text-red-700 text-sm">{errors[name]?.message}</p>
			) : null}
		</div>
	);
};
