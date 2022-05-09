import { PaymentRecordCreateNestedManyWithoutPaymentGatewaysInput } from "./PaymentRecordCreateNestedManyWithoutPaymentGatewaysInput";

export type PaymentGatewayCreateInput = {
  description: string;
  name: string;
  paymentRecords?: PaymentRecordCreateNestedManyWithoutPaymentGatewaysInput;
};
