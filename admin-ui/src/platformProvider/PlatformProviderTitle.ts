import { PlatformProvider as TPlatformProvider } from "../api/platformProvider/PlatformProvider";

export const PLATFORMPROVIDER_TITLE_FIELD = "name";

export const PlatformProviderTitle = (record: TPlatformProvider): string => {
  return record.name || record.id;
};
