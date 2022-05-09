import { PlatformProviderWhereInput } from "./PlatformProviderWhereInput";
import { PlatformProviderOrderByInput } from "./PlatformProviderOrderByInput";

export type PlatformProviderFindManyArgs = {
  where?: PlatformProviderWhereInput;
  orderBy?: Array<PlatformProviderOrderByInput>;
  skip?: number;
  take?: number;
};
