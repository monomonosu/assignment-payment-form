import { PaymentFormType } from "@/app/schema";

export const usePaymentPage = () => {
  const onSubmit = (data: PaymentFormType) => {
    console.log(data);
  };

  return {
    onSubmit,
  };
};
