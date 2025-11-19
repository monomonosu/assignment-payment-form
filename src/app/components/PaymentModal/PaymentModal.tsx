"use client";

import type { UseFormReturn } from "react-hook-form";
import type { PaymentFormType } from "@/app/schema";
import { Modal } from "@/components/atoms/Modal";

type PaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  form: UseFormReturn<PaymentFormType>;
};

export const PaymentModal = (props: PaymentModalProps) => {
  const { isOpen, onClose, form } = props;

  console.log(form.getValues());

  return (
    <Modal title="購入内容確認" isOpen={isOpen} onClose={onClose}>
      ほげほげ
    </Modal>
  );
};
