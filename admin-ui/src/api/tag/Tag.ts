import { PlatformProvider } from "../platformProvider/PlatformProvider";

export type Tag = {
  createdAt: Date;
  id: string;
  name: string;
  platformProvider?: Array<PlatformProvider>;
  updatedAt: Date;
};
