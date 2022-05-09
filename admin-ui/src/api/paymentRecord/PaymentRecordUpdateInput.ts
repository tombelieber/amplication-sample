import { PaymentGatewayWhereUniqueInput } from "../paymentGateway/PaymentGatewayWhereUniqueInput";
import { RoomEnrollmentWhereUniqueInput } from "../roomEnrollment/RoomEnrollmentWhereUniqueInput";

export type PaymentRecordUpdateInput = {
  amount?: number;
  frequency?: "OneOff" | "Monthly" | "Yearly";
  paymentGateway?: PaymentGatewayWhereUniqueInput;
  roomEnrollment?: RoomEnrollmentWhereUniqueInput;
  status?: "Success" | "Failed" | "Pending";
};
