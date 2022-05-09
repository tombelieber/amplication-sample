import { PlatformTierUpdateManyWithoutPlatformProvidersInput } from "./PlatformTierUpdateManyWithoutPlatformProvidersInput";

export type PlatformProviderUpdateInput = {
  description?: string;
  name?: string;
  tiers?: PlatformTierUpdateManyWithoutPlatformProvidersInput;
};
