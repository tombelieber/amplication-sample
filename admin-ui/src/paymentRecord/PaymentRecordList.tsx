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
import { PAYMENTGATEWAY_TITLE_FIELD } from "../paymentGateway/PaymentGatewayTitle";
import { ROOMENROLLMENT_TITLE_FIELD } from "../roomEnrollment/RoomEnrollmentTitle";

export const PaymentRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payment Records"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
