import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentGatewayWhereUniqueInput } from "../paymentGateway/PaymentGatewayWhereUniqueInput";
import { RoomEnrollmentWhereUniqueInput } from "../roomEnrollment/RoomEnrollmentWhereUniqueInput";

export type PaymentRecordWhereInput = {
  amount?: FloatFilter;
  frequency?: "OneOff" | "Monthly" | "Yearly";
  id?: StringFilter;
  paymentGateway?: PaymentGatewayWhereUniqueInput;
  roomEnrollment?: RoomEnrollmentWhereUniqueInput;
  status?: "Success" | "Failed" | "Pending";
};
