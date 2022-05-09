import { Module } from "@nestjs/common";
import { PlatformTierModuleBase } from "./base/platformTier.module.base";
import { PlatformTierService } from "./platformTier.service";
import { PlatformTierController } from "./platformTier.controller";
import { PlatformTierResolver } from "./platformTier.resolver";

@Module({
  imports: [PlatformTierModuleBase],
  controllers: [PlatformTierController],
  providers: [PlatformTierService, PlatformTierResolver],
  exports: [PlatformTierService],
})
export class PlatformTierModule {}
