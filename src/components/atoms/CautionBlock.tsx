import React, { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLDivElement> {
  //   NOTE: 下記のようなPropsを追加したい所ですが現状必要ないものを含めないようにしています。
  //   level:'info' | 'warning' | 'error';
  children: React.ReactNode;
}

export const CautionBlock: React.FC<TextInputProps> = ({ children }) => {
  return (
    <div className=" border border-yellow-600 bg-yellow-100 p-4">
      <p className="text-yellow-700">{children}</p>
    </div>
  );
};
