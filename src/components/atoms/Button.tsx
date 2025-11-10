"use client";

import clsx from "clsx";
import type React from "react";
import type { ButtonHTMLAttributes } from "react";

interface TextInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: "contained" | "outlined";
  width?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<TextInputProps> = ({
  variants = "contained",
  width = 240,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        variants === "contained" && "bg-gray-950 text-white",
        variants === "outlined" && "border border-gray-950 text-gray-950",
        "px-4 py-2 rounded-sm hover:opacity-80 active:opacity-60 font-bold",
      )}
      style={{ width: `${width}px` }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
