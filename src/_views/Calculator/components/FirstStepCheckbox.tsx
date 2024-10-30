import * as React from "react";
import type { UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  register: UseFormRegister<{
    gender: string;
  }>;
  value: "male" | "female";
};

export const FirstStepCheckbox = ({
  children,
  label,
  register,
  value,
}: React.PropsWithChildren<Props>) => {
  return (
    <label
      htmlFor={label}
      className="border rounded-xl p-4 flex flex-col gap-4 w-full items-center relative"
    >
      <input
        id={label}
        className="absolute top-4 left-4 w-6 h-6 accent-primary"
        type="radio"
        value={value}
        {...register("gender")}
      />
      <div className="w-14 h-14">{children}</div>
      <p className="text-xl">{label}</p>
    </label>
  );
};
