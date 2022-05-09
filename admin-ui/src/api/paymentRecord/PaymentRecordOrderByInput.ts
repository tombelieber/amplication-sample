import { SortOrder } from "../../util/SortOrder";

export type PaymentRecordOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  paymentGatewayId?: SortOrder;
  roomEnrollmentId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
