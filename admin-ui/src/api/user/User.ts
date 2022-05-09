import { RoomEnrollment } from "../roomEnrollment/RoomEnrollment";
import { Room } from "../room/Room";

export type User = {
  createdAt: Date;
  email: string;
  enrolledRooms?: Array<RoomEnrollment>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  roles: Array<string>;
  rooms?: Array<Room>;
  updatedAt: Date;
  username: string;
};
