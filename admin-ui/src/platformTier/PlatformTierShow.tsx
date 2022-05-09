import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLATFORMTIER_TITLE_FIELD } from "./PlatformTierTitle";
import { PLATFORMPROVIDER_TITLE_FIELD } from "../platformProvider/PlatformProviderTitle";

export const PlatformTierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Room"
          target="PlatformTierId"
          label="Rooms"
        >
          <Datagrid rowClick="show">
            <TextField label="Allowed Frequency" source="allowedFrequency" />
            <TextField label="Billing Date" source="billingDate" />
            <TextField label="Capcity" source="capcity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Platform Tier"
              source="platformtier.id"
              reference="PlatformTier"
            >
              <TextField source={PLATFORMTIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Remaining Capcity" source="remainingCapcity" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
