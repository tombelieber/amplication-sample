import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlatformProviderTitle } from "../platformProvider/PlatformProviderTitle";
import { RoomTitle } from "../room/RoomTitle";

export const PlatformTierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Capcity" source="capcity" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput
          source="platformprovider.id"
          reference="PlatformProvider"
          label="Provider"
        >
          <SelectInput optionText={PlatformProviderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="rooms"
          reference="Room"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
