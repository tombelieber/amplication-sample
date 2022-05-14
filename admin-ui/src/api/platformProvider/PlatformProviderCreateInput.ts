import { TagCreateNestedManyWithoutPlatformProvidersInput } from "./TagCreateNestedManyWithoutPlatformProvidersInput";
import { PlatformTierCreateNestedManyWithoutPlatformProvidersInput } from "./PlatformTierCreateNestedManyWithoutPlatformProvidersInput";

export type PlatformProviderCreateInput = {
  bannerImage: string;
  description: string;
  iconImage: string;
  name: string;
  tags?: TagCreateNestedManyWithoutPlatformProvidersInput;
  tiers?: PlatformTierCreateNestedManyWithoutPlatformProvidersInput;
};
