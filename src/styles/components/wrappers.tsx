import type { InputHTMLAttributes } from "react";

interface GapWrapperProps extends InputHTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: number;
  children: React.ReactNode;
}

export const GapWrapper: React.FC<GapWrapperProps> = ({
  direction = "row",
  gap = 8,
  children,
  ...props
}) => {
  return (
    <div
      className="flex"
      style={{ flexDirection: direction, gap: `${gap}px` }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CenterWrapper: React.FC<InputHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
};
