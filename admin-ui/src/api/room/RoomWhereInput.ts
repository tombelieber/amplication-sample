import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { RoomEnrollmentListRelationFilter } from "../roomEnrollment/RoomEnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlatformTierWhereUniqueInput } from "../platformTier/PlatformTierWhereUniqueInput";

export type RoomWhereInput = {
  billingDate?: DateTimeFilter;
  capcity?: IntFilter;
  enrollments?: RoomEnrollmentListRelationFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  platformTier?: PlatformTierWhereUniqueInput;
  remainingCapcity?: IntFilter;
  status?: "Public" | "Private" | "Archive";
};
