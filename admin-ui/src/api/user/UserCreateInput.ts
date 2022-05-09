import { RoomEnrollmentCreateNestedManyWithoutUsersInput } from "./RoomEnrollmentCreateNestedManyWithoutUsersInput";
import { RoomCreateNestedManyWithoutUsersInput } from "./RoomCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  enrolledRooms?: RoomEnrollmentCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: Array<string>;
  rooms?: RoomCreateNestedManyWithoutUsersInput;
  username: string;
};
