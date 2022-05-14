import { StringFilter } from "../../util/StringFilter";
import { PlatformProviderListRelationFilter } from "../platformProvider/PlatformProviderListRelationFilter";

export type TagWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  platformProvider?: PlatformProviderListRelationFilter;
};
