import clsx from "clsx";
import type React from "react";
import type { InputHTMLAttributes } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type SelectOption = {
  label: string;
  value: string;
};

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: boolean;
}

export const Select: React.FC<SelectProps> = ({ options, error, ...props }) => {
  return (
    <div className="relative">
      <select
        id="input"
        className={clsx(
          "border border-natural-gray02 rounded-sm px-2 py-2 w-full appearance-none",
          error && "border-red-500",
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <IoMdArrowDropdown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xl text-natural-gray03" />
    </div>
  );
};
