import { StringFilter } from "../../util/StringFilter";
import { RoomEnrollmentListRelationFilter } from "../roomEnrollment/RoomEnrollmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type UserWhereInput = {
  email?: StringFilter;
  enrolledRooms?: RoomEnrollmentListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
  username?: StringFilter;
};
