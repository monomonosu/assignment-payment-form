"use client";

import type { InputHTMLAttributes } from "react";
import { createPortal } from "react-dom";

import { RxCross1 } from "react-icons/rx";

interface TextInputProps extends InputHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<TextInputProps> = ({
  isOpen,
  onClose,
  title,
  children,
  ...props
}) => {
  if (typeof document === "undefined") return null;

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="
          fixed inset-0 z-50 flex items-center justify-center
          bg-black/40
        "
      onClick={onClose}
      onKeyDown={onClose}
      role="dialog"
      aria-hidden="true"
      {...props}
    >
      <div
        className="
            relative w-full max-w-1/2 rounded-lg bg-white text-gray-900
            shadow-lg
          "
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation}
      >
        {/* ヘッダー */}
        <div className="p-4 flex items-center justify-between gap-4 border-b border-natural-gray02">
          {title && (
            <h2 id="modal-title" className="text-lg font-semibold">
              {title}
            </h2>
          )}
          <button
            type="button"
            onClick={onClose}
            className="
                inline-flex h-8 w-8 items-center justify-center rounded-full
                text-gray-500 hover:bg-gray-100 hover:text-gray-800
              "
            aria-label="close"
          >
            <RxCross1 className="h-5 w-5" />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6 text-sm">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
