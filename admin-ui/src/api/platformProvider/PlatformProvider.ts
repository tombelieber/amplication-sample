import { PlatformTier } from "../platformTier/PlatformTier";

export type PlatformProvider = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  tiers?: Array<PlatformTier>;
  updatedAt: Date;
};
