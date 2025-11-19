"use client";

import { PaymentForm } from "@/app/components/PaymentForm/PaymentForm";
import { PaymentModal } from "@/app/components/PaymentModal/PaymentModal";
import { usePaymentPage } from "@/app/hooks/usePaymentPage";

export default function Payment() {
  const { isOpen, close, form, onSubmit } = usePaymentPage();

  return (
    <>
      <h1>ご購入手続き</h1>

      <form>
        <PaymentForm form={form} onSubmit={onSubmit} />

        <PaymentModal isOpen={isOpen} onClose={close} form={form} />
      </form>
    </>
  );
}
