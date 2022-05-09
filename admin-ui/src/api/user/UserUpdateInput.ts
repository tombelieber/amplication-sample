import { RoomEnrollmentUpdateManyWithoutUsersInput } from "./RoomEnrollmentUpdateManyWithoutUsersInput";
import { RoomUpdateManyWithoutUsersInput } from "./RoomUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string;
  enrolledRooms?: RoomEnrollmentUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: Array<string>;
  rooms?: RoomUpdateManyWithoutUsersInput;
  username?: string;
};
