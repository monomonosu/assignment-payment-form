import { NextResponse } from "next/server";

export enum PaymentType {
  CreditCard = 1,
  ConvenienceStore = 2,
  CarrierPayment = 3,
}

type Payment = {
  payment_type: PaymentType;
  payment_name: string;
};

const payments: Payment[] = [
  {
    payment_type: PaymentType.CreditCard,
    payment_name: "クレジットカード（Visa,MasterCard,JCB,AmericanExpress）",
  },
  { payment_type: PaymentType.ConvenienceStore, payment_name: "コンビニ決済" },
  { payment_type: PaymentType.CarrierPayment, payment_name: "キャリア決済" },
];

export async function GET() {
  return NextResponse.json(payments);
}
