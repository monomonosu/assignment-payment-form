import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: number;
  isBold?: boolean;
}

export const Text: React.FC<TextProps> = ({
  size,
  isBold,
  style,
  children,
  ...props
}) => {
  return (
    <p
      style={{
        fontSize: size ? `${size}px` : "16px",
        fontWeight: isBold ? 600 : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
