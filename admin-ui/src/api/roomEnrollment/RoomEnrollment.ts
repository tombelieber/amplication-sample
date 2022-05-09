import { PaymentRecord } from "../paymentRecord/PaymentRecord";
import { Room } from "../room/Room";
import { User } from "../user/User";

export type RoomEnrollment = {
  createdAt: Date;
  id: string;
  paymentRecords?: Array<PaymentRecord>;
  room?: Room;
  updatedAt: Date;
  user?: User;
};
