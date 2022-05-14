import { PlatformProviderCreateNestedManyWithoutTagsInput } from "./PlatformProviderCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name: string;
  platformProvider?: PlatformProviderCreateNestedManyWithoutTagsInput;
};
