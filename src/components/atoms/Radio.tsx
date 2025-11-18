import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  register,
  error,
  ...props
}) => {
  return (
    <div className="border border-natural-gray02">
      <label className="p-2 inline-flex items-center w-full h-full">
        <input
          className={clsx(
            "mr-2 appearance-none w-4 h-4 border-2 border-blue-500 rounded-full relative before:content-[''] before:absolute before:block before:w-[60%] before:h-[60%] before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full checked:before:bg-blue-500",
            error && "border-red-500",
          )}
          type="radio"
          {...register}
          {...props}
        />
        {label}
      </label>
    </div>
  );
};
