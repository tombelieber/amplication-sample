import { Module } from "@nestjs/common";
import { PlatformProviderModuleBase } from "./base/platformProvider.module.base";
import { PlatformProviderService } from "./platformProvider.service";
import { PlatformProviderController } from "./platformProvider.controller";
import { PlatformProviderResolver } from "./platformProvider.resolver";

@Module({
  imports: [PlatformProviderModuleBase],
  controllers: [PlatformProviderController],
  providers: [PlatformProviderService, PlatformProviderResolver],
  exports: [PlatformProviderService],
})
export class PlatformProviderModule {}
