import { useCallback, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { PaymentFormType } from "@/app/schema";

export const usePaymentModal = (
  form: UseFormReturn<PaymentFormType>,
  onClose: () => void,
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onConfirm = useCallback(async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const values = form.getValues();
      const response = await fetch("/api/post-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        console.error("注文確定の送信に失敗しました", await response.text());
        return;
      }

      onClose();
    } catch (error) {
      console.error("注文確定の送信でエラーが発生しました", error);
    } finally {
      setIsSubmitting(false);
    }
  }, [form, isSubmitting, onClose]);

  return {
    isSubmitting,
    onConfirm,
  };
};
