import { PaymentGateway } from "../paymentGateway/PaymentGateway";
import { RoomEnrollment } from "../roomEnrollment/RoomEnrollment";

export type PaymentRecord = {
  amount: number;
  createdAt: Date;
  frequency?: "OneOff" | "Monthly" | "Yearly";
  id: string;
  paymentGateway?: PaymentGateway;
  roomEnrollment?: RoomEnrollment;
  status?: "Success" | "Failed" | "Pending";
  updatedAt: Date;
};
