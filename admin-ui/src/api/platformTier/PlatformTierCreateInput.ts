import { PlatformProviderWhereUniqueInput } from "../platformProvider/PlatformProviderWhereUniqueInput";
import { RoomCreateNestedManyWithoutPlatformTiersInput } from "./RoomCreateNestedManyWithoutPlatformTiersInput";

export type PlatformTierCreateInput = {
  capcity: number;
  name: string;
  price: number;
  provider: PlatformProviderWhereUniqueInput;
  rooms?: RoomCreateNestedManyWithoutPlatformTiersInput;
};
