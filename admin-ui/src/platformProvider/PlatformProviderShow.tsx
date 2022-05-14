import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PLATFORMPROVIDER_TITLE_FIELD } from "./PlatformProviderTitle";

export const PlatformProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bannerImage" source="bannerImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="iconImage" source="iconImage" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PlatformTier"
          target="PlatformProviderId"
          label="Platform Tiers"
        >
          <Datagrid rowClick="show">
            <TextField label="Capcity" source="capcity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Provider"
              source="platformprovider.id"
              reference="PlatformProvider"
            >
              <TextField source={PLATFORMPROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
