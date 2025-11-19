import z from "zod";
import {
  maxNumberLengthSchema,
  requiredString,
} from "@/utils/validation/universalSchema";

// NOTE:schemaファイルはそれぞれページ毎ののfeatureディレクトリで作成するようなイメージです。今回はページが１ページになるのでtopに置いています。

export const paymentSchema = z.object({
  last_name: requiredString("姓"),
  first_name: requiredString("名"),
  phone_number: maxNumberLengthSchema("電話番号", 11),
  post_number: maxNumberLengthSchema("郵便番号", 7),
  prefecture: requiredString("都道府県"),
  city: requiredString("市区町村"),
  address: requiredString("番地"),
  building: z.string().optional(),
  payment_type: requiredString("支払い方法"),
});

export type PaymentFormType = z.infer<typeof paymentSchema>;

export const defaultValues: PaymentFormType = {
  last_name: "",
  first_name: "",
  phone_number: "",
  post_number: "",
  prefecture: "",
  city: "",
  address: "",
  building: "",
  payment_type: "",
};
