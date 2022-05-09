import { RoomEnrollmentCreateNestedManyWithoutRoomsInput } from "./RoomEnrollmentCreateNestedManyWithoutRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlatformTierWhereUniqueInput } from "../platformTier/PlatformTierWhereUniqueInput";

export type RoomCreateInput = {
  allowedFrequency?: Array<"OneOff" | "Failed" | "Pending">;
  billingDate: Date;
  capcity: number;
  enrollments?: RoomEnrollmentCreateNestedManyWithoutRoomsInput;
  owner: UserWhereUniqueInput;
  platformTier: PlatformTierWhereUniqueInput;
  remainingCapcity: number;
  status: "Public" | "Private" | "Archive";
};
