import type { HTMLAttributes } from "react";

interface ConfirmBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ConfirmBlock: React.FC<ConfirmBlockProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="border border-natural-gray02 p-2" {...props}>
      {children}
    </div>
  );
};
