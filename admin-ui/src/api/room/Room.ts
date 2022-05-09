import { RoomEnrollment } from "../roomEnrollment/RoomEnrollment";
import { User } from "../user/User";
import { PlatformTier } from "../platformTier/PlatformTier";

export type Room = {
  allowedFrequency?: Array<"OneOff" | "Failed" | "Pending">;
  billingDate: Date;
  capcity: number;
  createdAt: Date;
  enrollments?: Array<RoomEnrollment>;
  id: string;
  owner?: User;
  platformTier?: PlatformTier;
  remainingCapcity: number;
  status?: "Public" | "Private" | "Archive";
  updatedAt: Date;
};
