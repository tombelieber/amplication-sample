import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  DateInput,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoomEnrollmentTitle } from "../roomEnrollment/RoomEnrollmentTitle";
import { UserTitle } from "../user/UserTitle";
import { PlatformTierTitle } from "../platformTier/PlatformTierTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Allowed Frequency"
          source="allowedFrequency"
          choices={[
            { label: "ONE_OFF", value: "OneOff" },
            { label: "FAILED", value: "Failed" },
            { label: "PENDING", value: "Pending" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateInput label="Billing Date" source="billingDate" />
        <NumberInput step={1} label="Capcity" source="capcity" />
        <ReferenceArrayInput
          source="enrollments"
          reference="RoomEnrollment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomEnrollmentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="platformtier.id"
          reference="PlatformTier"
          label="Platform Tier"
        >
          <SelectInput optionText={PlatformTierTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Remaining Capcity"
          source="remainingCapcity"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PUBLIC", value: "Public" },
            { label: "PRIVATE", value: "Private" },
            { label: "ARCHIVE", value: "Archive" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
