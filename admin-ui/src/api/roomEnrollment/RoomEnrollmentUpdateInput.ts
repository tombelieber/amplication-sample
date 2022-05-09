import { PaymentRecordUpdateManyWithoutRoomEnrollmentsInput } from "./PaymentRecordUpdateManyWithoutRoomEnrollmentsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomEnrollmentUpdateInput = {
  paymentRecords?: PaymentRecordUpdateManyWithoutRoomEnrollmentsInput;
  room?: RoomWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
