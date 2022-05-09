import { RoomEnrollment as TRoomEnrollment } from "../api/roomEnrollment/RoomEnrollment";

export const ROOMENROLLMENT_TITLE_FIELD = "id";

export const RoomEnrollmentTitle = (record: TRoomEnrollment): string => {
  return record.id || record.id;
};
