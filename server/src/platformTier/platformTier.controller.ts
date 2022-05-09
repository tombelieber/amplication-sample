import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlatformTierService } from "./platformTier.service";
import { PlatformTierControllerBase } from "./base/platformTier.controller.base";

@swagger.ApiTags("platformTiers")
@common.Controller("platformTiers")
export class PlatformTierController extends PlatformTierControllerBase {
  constructor(
    protected readonly service: PlatformTierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
