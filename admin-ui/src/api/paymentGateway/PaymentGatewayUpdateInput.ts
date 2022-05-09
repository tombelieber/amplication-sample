import { PaymentRecordUpdateManyWithoutPaymentGatewaysInput } from "./PaymentRecordUpdateManyWithoutPaymentGatewaysInput";

export type PaymentGatewayUpdateInput = {
  description?: string;
  name?: string;
  paymentRecords?: PaymentRecordUpdateManyWithoutPaymentGatewaysInput;
};
