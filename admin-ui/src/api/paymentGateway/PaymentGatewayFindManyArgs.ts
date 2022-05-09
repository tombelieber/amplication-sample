import { PaymentGatewayWhereInput } from "./PaymentGatewayWhereInput";
import { PaymentGatewayOrderByInput } from "./PaymentGatewayOrderByInput";

export type PaymentGatewayFindManyArgs = {
  where?: PaymentGatewayWhereInput;
  orderBy?: Array<PaymentGatewayOrderByInput>;
  skip?: number;
  take?: number;
};
