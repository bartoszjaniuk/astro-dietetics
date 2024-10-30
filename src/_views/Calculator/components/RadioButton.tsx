import * as React from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  value: string;
};

export const RadioButton = <T extends Record<string, unknown>>({
  label,
  name,
  register,
  value,
}: Props<T>) => {
  return (
    <li>
      <label className="border rounded-xl p-4 relative flex justify-center items-center min-w-[350px]">
        <input
          id={label}
          value={value}
          type="radio"
          className="absolute top-1/2 -translate-y-1/2 left-4 w-5 h-5 accent-primary"
          {...(register && register(name))}
        />

        <p className="text-lg md:text-xl">{label}</p>
      </label>
    </li>
  );
};
