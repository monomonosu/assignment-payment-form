import type { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  message: string | undefined;
}

export const ErrorMessage = ({
  message,
  className,
  ...props
}: ErrorMessageProps) => {
  return (
    <>
      {message && (
        <div
          className={`text-sm text-red-500 mt-1 ${className ?? ""}`}
          {...props}
        >
          {message}
        </div>
      )}
    </>
  );
};
