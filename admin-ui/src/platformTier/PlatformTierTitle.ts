import { PlatformTier as TPlatformTier } from "../api/platformTier/PlatformTier";

export const PLATFORMTIER_TITLE_FIELD = "name";

export const PlatformTierTitle = (record: TPlatformTier): string => {
  return record.name || record.id;
};
