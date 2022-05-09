import { RoomEnrollmentWhereInput } from "./RoomEnrollmentWhereInput";
import { RoomEnrollmentOrderByInput } from "./RoomEnrollmentOrderByInput";

export type RoomEnrollmentFindManyArgs = {
  where?: RoomEnrollmentWhereInput;
  orderBy?: Array<RoomEnrollmentOrderByInput>;
  skip?: number;
  take?: number;
};
