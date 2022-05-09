import { PlatformTierCreateNestedManyWithoutPlatformProvidersInput } from "./PlatformTierCreateNestedManyWithoutPlatformProvidersInput";

export type PlatformProviderCreateInput = {
  description: string;
  name: string;
  tiers?: PlatformTierCreateNestedManyWithoutPlatformProvidersInput;
};
