import { Tag } from "../tag/Tag";
import { PlatformTier } from "../platformTier/PlatformTier";

export type PlatformProvider = {
  bannerImage: string;
  createdAt: Date;
  description: string;
  iconImage: string;
  id: string;
  name: string;
  tags?: Array<Tag>;
  tiers?: Array<PlatformTier>;
  updatedAt: Date;
};
