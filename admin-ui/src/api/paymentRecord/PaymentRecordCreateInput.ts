import { PaymentGatewayWhereUniqueInput } from "../paymentGateway/PaymentGatewayWhereUniqueInput";
import { RoomEnrollmentWhereUniqueInput } from "../roomEnrollment/RoomEnrollmentWhereUniqueInput";

export type PaymentRecordCreateInput = {
  amount: number;
  frequency: "OneOff" | "Monthly" | "Yearly";
  paymentGateway: PaymentGatewayWhereUniqueInput;
  roomEnrollment: RoomEnrollmentWhereUniqueInput;
  status: "Success" | "Failed" | "Pending";
};
