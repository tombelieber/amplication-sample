import { PaymentRecord as TPaymentRecord } from "../api/paymentRecord/PaymentRecord";

export const PAYMENTRECORD_TITLE_FIELD = "id";

export const PaymentRecordTitle = (record: TPaymentRecord): string => {
  return record.id || record.id;
};
