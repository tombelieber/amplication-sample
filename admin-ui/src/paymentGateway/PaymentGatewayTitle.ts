import { PaymentGateway as TPaymentGateway } from "../api/paymentGateway/PaymentGateway";

export const PAYMENTGATEWAY_TITLE_FIELD = "name";

export const PaymentGatewayTitle = (record: TPaymentGateway): string => {
  return record.name || record.id;
};
