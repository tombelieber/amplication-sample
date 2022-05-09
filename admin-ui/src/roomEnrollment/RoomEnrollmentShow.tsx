import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAYMENTGATEWAY_TITLE_FIELD } from "../paymentGateway/PaymentGatewayTitle";
import { ROOMENROLLMENT_TITLE_FIELD } from "./RoomEnrollmentTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RoomEnrollmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="PaymentRecord"
          target="RoomEnrollmentId"
          label="Payment Records"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Frequency" source="frequency" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Payment Gateway"
              source="paymentgateway.id"
              reference="PaymentGateway"
            >
              <TextField source={PAYMENTGATEWAY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Room Enrollment"
              source="roomenrollment.id"
              reference="RoomEnrollment"
            >
              <TextField source={ROOMENROLLMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
