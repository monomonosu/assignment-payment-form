"use client";

import { PaymentForm } from "@/app/components/PaymentForm/PaymentForm";
import { usePaymentPage } from "@/app/hooks/usePaymentPage";

export default function Payment() {
  const { onSubmit } = usePaymentPage();

  return (
    <>
      <h1>ご購入手続き</h1>

      <PaymentForm onSubmit={onSubmit} />
    </>
  );
}
