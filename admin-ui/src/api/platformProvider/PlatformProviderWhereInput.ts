import { StringFilter } from "../../util/StringFilter";
import { PlatformTierListRelationFilter } from "../platformTier/PlatformTierListRelationFilter";

export type PlatformProviderWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  tiers?: PlatformTierListRelationFilter;
};
