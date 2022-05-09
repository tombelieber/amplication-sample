import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  allowedFrequency?: SortOrder;
  billingDate?: SortOrder;
  capcity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  platformTierId?: SortOrder;
  remainingCapcity?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
