import { PlatformProviderWhereUniqueInput } from "../platformProvider/PlatformProviderWhereUniqueInput";
import { RoomUpdateManyWithoutPlatformTiersInput } from "./RoomUpdateManyWithoutPlatformTiersInput";

export type PlatformTierUpdateInput = {
  capcity?: number;
  name?: string;
  price?: number;
  provider?: PlatformProviderWhereUniqueInput;
  rooms?: RoomUpdateManyWithoutPlatformTiersInput;
};
