import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import {
  defaultValues,
  type PaymentFormType,
  paymentSchema,
} from "@/app/schema";

export const usePaymentForm = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: prefecturesData } = useSWR("/api/prefectures", fetcher);
  const { data: paymentsData } = useSWR("/api/payments", fetcher);

  const prefectures = useMemo(() => {
    if (!prefecturesData) return [];
    return prefecturesData.map(
      (prefecture: { code: string; name: string }) => ({
        label: prefecture.name,
        value: prefecture.code,
      }),
    );
  }, [prefecturesData]);

  const payments = useMemo(() => {
    if (!paymentsData) return [];
    return paymentsData.map(
      (payment: { payment_type: number; payment_name: string }) => ({
        label: payment.payment_name,
        value: payment.payment_type,
      }),
    );
  }, [paymentsData]);

  const form = useForm<PaymentFormType>({
    resolver: zodResolver(paymentSchema),
    defaultValues: defaultValues,
  });

  return {
    prefectures,
    payments,
    form,
  };
};
