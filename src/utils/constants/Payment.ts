export class Payment {
  static readonly CreditCard = "1";
  static readonly ConvenienceStore = "2";
  static readonly CarrierPayment = "3";

  static getText(value: string) {
    switch (value) {
      case Payment.CreditCard:
        return "クレジットカード（Visa,MasterCard,JCB,AmericanExpress）";
      case Payment.ConvenienceStore:
        return "コンビニ決済";
      case Payment.CarrierPayment:
        return "キャリア決済";
      default:
        return "";
    }
  }
}
