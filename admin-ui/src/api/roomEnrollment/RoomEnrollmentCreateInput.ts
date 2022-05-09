import { PaymentRecordCreateNestedManyWithoutRoomEnrollmentsInput } from "./PaymentRecordCreateNestedManyWithoutRoomEnrollmentsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomEnrollmentCreateInput = {
  paymentRecords?: PaymentRecordCreateNestedManyWithoutRoomEnrollmentsInput;
  room: RoomWhereUniqueInput;
  user: UserWhereUniqueInput;
};
