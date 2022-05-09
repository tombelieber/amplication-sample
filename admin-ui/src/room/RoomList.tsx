import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLATFORMTIER_TITLE_FIELD } from "../platformTier/PlatformTierTitle";

export const RoomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rooms"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
