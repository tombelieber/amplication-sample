import { PaymentRecordWhereInput } from "./PaymentRecordWhereInput";
import { PaymentRecordOrderByInput } from "./PaymentRecordOrderByInput";

export type PaymentRecordFindManyArgs = {
  where?: PaymentRecordWhereInput;
  orderBy?: Array<PaymentRecordOrderByInput>;
  skip?: number;
  take?: number;
};
