import { PlatformTierWhereInput } from "./PlatformTierWhereInput";
import { PlatformTierOrderByInput } from "./PlatformTierOrderByInput";

export type PlatformTierFindManyArgs = {
  where?: PlatformTierWhereInput;
  orderBy?: Array<PlatformTierOrderByInput>;
  skip?: number;
  take?: number;
};
