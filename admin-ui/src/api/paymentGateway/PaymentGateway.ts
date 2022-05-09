import { PaymentRecord } from "../paymentRecord/PaymentRecord";

export type PaymentGateway = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  paymentRecords?: Array<PaymentRecord>;
  updatedAt: Date;
};
