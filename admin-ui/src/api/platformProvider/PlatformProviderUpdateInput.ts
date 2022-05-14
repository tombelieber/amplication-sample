import { TagUpdateManyWithoutPlatformProvidersInput } from "./TagUpdateManyWithoutPlatformProvidersInput";
import { PlatformTierUpdateManyWithoutPlatformProvidersInput } from "./PlatformTierUpdateManyWithoutPlatformProvidersInput";

export type PlatformProviderUpdateInput = {
  bannerImage?: string;
  description?: string;
  iconImage?: string;
  name?: string;
  tags?: TagUpdateManyWithoutPlatformProvidersInput;
  tiers?: PlatformTierUpdateManyWithoutPlatformProvidersInput;
};
