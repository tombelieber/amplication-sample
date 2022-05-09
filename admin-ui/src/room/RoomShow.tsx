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

import { ROOM_TITLE_FIELD } from "./RoomTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLATFORMTIER_TITLE_FIELD } from "../platformTier/PlatformTierTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="RoomEnrollment"
          target="RoomId"
          label="Room Enrollments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
