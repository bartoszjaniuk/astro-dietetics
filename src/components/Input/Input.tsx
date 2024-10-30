import * as React from "react";
import type { DeepMap, FieldError, RegisterOptions } from "react-hook-form";

import { cn } from "@/lib/utils";

export type InputProps<T> = {
  id: string;
  name: string;
  label?: string | React.ReactNode;
  className?: string;
  type?: "text" | "email" | "radio" | "number";
  register: any;
  rules?: RegisterOptions;
  errors?: Partial<DeepMap<T, FieldError>>;
  isTextArea?: boolean;
  value?: string;
  useFormGroup?: boolean;
  rows?: number;
  options?: { value: number; label: string; description?: string }[];
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size"
>;

export const Input = ({
  id,
  name,
  label,
  type = "text",
  className = "",
  placeholder,
  errors,
  register,
  rules,
  isTextArea,
  value,
  rows = 3,
  required,
  ...props
}: InputProps<any>) => {
  const hasError = !!errors;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        <label htmlFor={name} className="text-base md:text-xl text-primary">
          {label}
        </label>
        {required ? <span className="text-red-700">*</span> : null}
      </div>

      {isTextArea ? (
        <textarea
          className={cn(
            "flex h-16 xl:max-h-20 w-full rounded-md border border-neutral-200 bg-transparent px-1 py-1 xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 bg-white",
            className
          )}
          id={id}
          aria-invalid={hasError}
          {...props}
          {...(register && register(name, rules))}
        />
      ) : (
        <input
          type={type}
          className={cn(
            "flex h-10 xl:h-9 w-full rounded-md border border-neutral-200 bg-transparent px-1 py-1 xl:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 bg-white",
            className
          )}
          id={id}
          aria-invalid={hasError}
          {...props}
          {...(register && register(name, rules))}
        />
      )}
      {hasError ? (
        <p className="text-red-700 text-sm text-left pt-1">
          {errors[name]?.message}
        </p>
      ) : null}
    </div>
  );
};
