import { StringFilter } from "../../util/StringFilter";
import { PaymentRecordListRelationFilter } from "../paymentRecord/PaymentRecordListRelationFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomEnrollmentWhereInput = {
  id?: StringFilter;
  paymentRecords?: PaymentRecordListRelationFilter;
  room?: RoomWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
