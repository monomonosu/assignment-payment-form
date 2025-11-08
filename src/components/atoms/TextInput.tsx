"use client";

import clsx from "clsx";
import type React from "react";
import type { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ error, ...props }) => {
  return (
    <input
      id="input"
      className={clsx(
        "border border-natural-gray02 rounded-sm px-2 py-1 w-full",
        error && "border-red-500",
      )}
      {...props}
    />
  );
};

export default TextInput;
