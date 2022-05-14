import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TagTitle } from "../tag/TagTitle";
import { PlatformTierTitle } from "../platformTier/PlatformTierTitle";

export const PlatformProviderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bannerImage" source="bannerImage" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="iconImage" source="iconImage" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tiers"
          reference="PlatformTier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlatformTierTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
