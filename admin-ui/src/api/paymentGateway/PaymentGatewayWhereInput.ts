import { StringFilter } from "../../util/StringFilter";
import { PaymentRecordListRelationFilter } from "../paymentRecord/PaymentRecordListRelationFilter";

export type PaymentGatewayWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  paymentRecords?: PaymentRecordListRelationFilter;
};
