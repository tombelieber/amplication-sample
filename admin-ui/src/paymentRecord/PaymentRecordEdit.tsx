import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PaymentGatewayTitle } from "../paymentGateway/PaymentGatewayTitle";
import { RoomEnrollmentTitle } from "../roomEnrollment/RoomEnrollmentTitle";

export const PaymentRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <SelectInput
          source="frequency"
          label="Frequency"
          choices={[
            { label: "ONE_OFF", value: "OneOff" },
            { label: "MONTHLY", value: "Monthly" },
            { label: "YEARLY", value: "Yearly" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="paymentgateway.id"
          reference="PaymentGateway"
          label="Payment Gateway"
        >
          <SelectInput optionText={PaymentGatewayTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="roomenrollment.id"
          reference="RoomEnrollment"
          label="Room Enrollment"
        >
          <SelectInput optionText={RoomEnrollmentTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "SUCCESS", value: "Success" },
            { label: "FAILED", value: "Failed" },
            { label: "PENDING", value: "Pending" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
