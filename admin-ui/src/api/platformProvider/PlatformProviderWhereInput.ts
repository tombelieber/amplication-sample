import { StringFilter } from "../../util/StringFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { PlatformTierListRelationFilter } from "../platformTier/PlatformTierListRelationFilter";

export type PlatformProviderWhereInput = {
  bannerImage?: StringFilter;
  description?: StringFilter;
  iconImage?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  tags?: TagListRelationFilter;
  tiers?: PlatformTierListRelationFilter;
};
