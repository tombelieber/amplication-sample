import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PAYMENTGATEWAY_TITLE_FIELD } from "./PaymentGatewayTitle";
import { ROOMENROLLMENT_TITLE_FIELD } from "../roomEnrollment/RoomEnrollmentTitle";

export const PaymentGatewayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PaymentRecord"
          target="PaymentGatewayId"
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
