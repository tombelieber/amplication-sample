import { RoomEnrollmentUpdateManyWithoutRoomsInput } from "./RoomEnrollmentUpdateManyWithoutRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlatformTierWhereUniqueInput } from "../platformTier/PlatformTierWhereUniqueInput";

export type RoomUpdateInput = {
  allowedFrequency?: Array<"OneOff" | "Failed" | "Pending">;
  billingDate?: Date;
  capcity?: number;
  enrollments?: RoomEnrollmentUpdateManyWithoutRoomsInput;
  owner?: UserWhereUniqueInput;
  platformTier?: PlatformTierWhereUniqueInput;
  remainingCapcity?: number;
  status?: "Public" | "Private" | "Archive";
};
