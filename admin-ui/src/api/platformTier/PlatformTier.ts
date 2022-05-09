import { PlatformProvider } from "../platformProvider/PlatformProvider";
import { Room } from "../room/Room";

export type PlatformTier = {
  capcity: number;
  createdAt: Date;
  id: string;
  name: string;
  price: number;
  provider?: PlatformProvider;
  rooms?: Array<Room>;
  updatedAt: Date;
};
