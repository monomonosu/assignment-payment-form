import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  defaultValues,
  type PaymentFormType,
  paymentSchema,
} from "@/app/schema";
import { useDisclosure } from "@/utils/hooks/useDisclosure";

export const usePaymentPage = () => {
  const { isOpen, open, close } = useDisclosure();

  const form = useForm<PaymentFormType>({
    resolver: zodResolver(paymentSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = () => {
    open();
  };

  return {
    isOpen,
    close,
    form,
    onSubmit,
  };
};
