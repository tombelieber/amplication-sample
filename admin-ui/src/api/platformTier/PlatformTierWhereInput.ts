import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { PlatformProviderWhereUniqueInput } from "../platformProvider/PlatformProviderWhereUniqueInput";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type PlatformTierWhereInput = {
  capcity?: IntFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  provider?: PlatformProviderWhereUniqueInput;
  rooms?: RoomListRelationFilter;
};
